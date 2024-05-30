import { useContext, useEffect, useState } from 'react';
import CardList from '../../components/CardList/CardList';
import Title from '../../components/Title/Title';
import { USERS_FILM_PERSISTANT, UserFilms } from '../../store/favorite.slice';
import { loadState } from '../../store/storage';
import { Film } from '../../constants';
import { UserContext } from '../../context/user.context';
import { LocalFilm } from '../../components/CardItem/CardItem.props';

export default function Favorites() {
	const { currentUser } = useContext(UserContext);
	const [filmItems, setFilmItems] = useState<Film[]>([]);
	const userFilm = loadState<UserFilms[]>(USERS_FILM_PERSISTANT);

	const convertToFilmArray = (localFilms: LocalFilm[]): Film[] => {
		return localFilms.map(localFilm => ({
			'#TITLE': localFilm.name,
			'#IMDB_ID': localFilm.id,
			'#RANK': localFilm.starsCount,
			'#IMG_POSTER': localFilm.image
		}));
	};

	useEffect(() => {
		if (userFilm && currentUser) {
			const films = userFilm.find(i => i.username === currentUser.username)?.films;
			if (films) {
				setFilmItems(convertToFilmArray(films));
			}
		}
	}, [currentUser, userFilm]);

	return <>
		<Title>Favorites</Title>
		{filmItems && <CardList items={filmItems}></CardList>}
	</>;
}