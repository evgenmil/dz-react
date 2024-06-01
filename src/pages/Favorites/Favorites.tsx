import { useEffect, useState } from 'react';
import CardList from '../../components/CardList/CardList';
import Title from '../../components/Title/Title';
import { Film } from '../../constants';
import { LocalFilm } from '../../components/CardItem/CardItem.props';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function Favorites() {
	const currentUser = useSelector((s: RootState) => s.user.currentUser);
	const userFilms = useSelector((s: RootState) => s.favorite.userFilms);
	const [filmItems, setFilmItems] = useState<Film[]>([]);

	useEffect(() => {
		if (userFilms && currentUser) {
			const films = userFilms.find(i => i.username === currentUser.username)?.films;
			if (films) {
				setFilmItems(convertToFilmArray(films));
			} else {
				setFilmItems([]);
			}
		}
	}, [currentUser, userFilms]);

	const convertToFilmArray = (localFilms: LocalFilm[]): Film[] => {
		return localFilms.map(localFilm => ({
			'#TITLE': localFilm.name,
			'#IMDB_ID': localFilm.id,
			'#RANK': localFilm.starsCount,
			'#IMG_POSTER': localFilm.image
		}));
	};

	return <>
		<Title>Избранное</Title>
		{filmItems && <CardList items={filmItems}></CardList>}
	</>;
}