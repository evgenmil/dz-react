import { useSelector } from 'react-redux';
import CardItem from '../CardItem/CardItem';
import { LocalFilm } from '../CardItem/CardItem.props';
import styles from './CardList.module.css';
import { CardListProps } from './CardList.props';
import cn from 'classnames';
import { RootState } from '../../store/store';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

export default function CardList({ items, className, ...props }: CardListProps) {
	const { currentUser } = useContext(UserContext);
	const films = useSelector((s: RootState) => s.favorite.userFilms);
	
	if (items.length == 0) {
		return (
			<div className={cn(styles.notFound, className)} {...props}>
				<div className={styles.header}>Упс... Ничего не найдено</div>
				<div className={styles.desc}>Попробуйте изменить запрос или ввести более точное название фильма</div>
			</div>
		);
	}

	const itemsList = items.map(elem => {
		const currentUserFilms = films.find((i) => i.username === currentUser?.username);
		const isFavorite = currentUserFilms?.films.some((film) => film.id === elem['#IMDB_ID']) ?? false;

		const film: LocalFilm = {
			id: elem['#IMDB_ID'],
			name: elem['#TITLE'],
			image: elem['#IMG_POSTER'],
			starsCount: elem['#RANK'],
			isFavorite: isFavorite
		}; 
		
		return <CardItem
			film={film}
			key={elem['#IMDB_ID']}
		/>;
	});

	return <div className={cn(styles.cardList, className)} {...props}>{itemsList}</div>;

}