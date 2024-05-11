import Button from '../../components/Button/Button';
import CardList from '../../components/CardList/CardList';
import Input from '../../components/Input/Input';
import Paragraph from '../../components/Paragraph/Paragraph';
import SearchGroup from '../../components/SearchGroup/SearchGroup';
import Title from '../../components/Title/Title';
import { FilmInterface, INITIAL_DATA_FILMS } from '../../constants';
import { useState } from 'react';

export default function Search() {
	const [filmItems, setFilmItems] = useState<FilmInterface[]>(INITIAL_DATA_FILMS);

	return <>
		<Title>Поиск</Title >
		<Paragraph className="small">Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
		<SearchGroup>
			<Input placeholder="Введите название" icon="search" />
			<Button label="Искать" className="primary" />
		</SearchGroup>

		<CardList items={filmItems}></CardList>
	</>;
}