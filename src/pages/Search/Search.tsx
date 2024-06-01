import axios, { AxiosError } from 'axios';
import Button from '../../components/Button/Button';
import CardList from '../../components/CardList/CardList';
import Input from '../../components/Input/Input';
import Paragraph from '../../components/Paragraph/Paragraph';
import SearchGroup from '../../components/SearchGroup/SearchGroup';
import Title from '../../components/Title/Title';
import { Film, ResponseFilm } from '../../constants';
import { useEffect, useState, useRef } from 'react';
import { BASE_API } from '../../helpers/API';

export default function Search() {
	const [filmItems, setFilmItems] = useState<Film[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>('');
	const searchRef = useRef<HTMLInputElement | null>(null);

	const getFilms = async (q: string) => {
		try {
			setIsLoading(true);
			const { data } = await axios.get<ResponseFilm>(`${BASE_API}/?q=${q}`);
			setFilmItems(data.description);
			setError('');
			setIsLoading(false);
		} catch (e) {
			console.error(e);
			if (e instanceof AxiosError) {
				setError(e.message);
			}
			setIsLoading(false);
			return;
		}
	};

	useEffect(() => {
		getFilms('Avengers: Endgame');
	}, []);

	const searchFilm = () => {
		const input = searchRef.current!;
		if (input.value.trim().length === 0) {
			input.focus();
			return;
		}
		getFilms(input.value);
	};

	return <>
		<Title>Поиск</Title >
		<Paragraph className="small">Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
		<SearchGroup>
			<Input placeholder="Введите название" ref={searchRef} icon="search" />
			<Button label="Искать" className="primary" onClick={searchFilm} />
		</SearchGroup>

		{error && <>{error}</>}
		{isLoading && <>Загружаем фильмы...</>}
		{!isLoading && <CardList items={filmItems}></CardList>}
	</>;
}