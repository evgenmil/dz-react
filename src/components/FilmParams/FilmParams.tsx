import { useSelector } from 'react-redux';
import { ResponseFilmDetail } from '../../constants';
import styles from './FilmParams.module.css';
import { HTMLAttributes, useEffect, useState } from 'react';
import { RootState } from '../../store/store';
import CardLink from '../CardLink/CardLink';
import Icon from '../Icon/Icon';
import { LocalFilm } from '../CardItem/CardItem.props';
import RatingBadge from '../RatingBadge/RatingBadge';

export default function FilmParams({ film, ...props }: { film: ResponseFilmDetail } & HTMLAttributes<HTMLDivElement>) {
	const userFilms = useSelector((s: RootState) => s.favorite.userFilms);
	const currentUser = useSelector((s: RootState) => s.user.currentUser);
	const [currentFilm, setCurrentFilm] = useState<LocalFilm>();
	const icon = <Icon srcImage="/like.svg" />;
	const favoriteIcon = <Icon srcImage="/favorite.svg" />;

	useEffect(() => {
		const filmsData = userFilms.find(i => i.username === currentUser?.username);
		let isFavoriteFilm = false;
		if (filmsData) {
			isFavoriteFilm = filmsData.films.some((i: LocalFilm) => i.id === film.fake['#IMDB_ID']);
		} 
		const currentLocalFilm: LocalFilm = {
			id: film.fake['#IMDB_ID'],
			name: film.fake['#TITLE'],
			image: film.fake['#IMG_POSTER'],
			starsCount: film.fake['#RANK'],
			isFavorite: isFavoriteFilm
		}; 
		setCurrentFilm(currentLocalFilm);
	}, [currentUser, film, userFilms]);

	/* 	useEffect(() => {

		setCurrentFilm(currentLocalFilm);
	}, []); */

	function iso8601DurationToMinutes(duration: string): number {
		const regex = /(-?\d+)(H|M|S)/g;
		let totalMinutes = 0;

		let match: RegExpExecArray | null;
		while ((match = regex.exec(duration)) !== null) {
			const value = parseInt(match[1]);
			const unit = match[2];

			switch (unit) {
			case 'H':
				totalMinutes += value * 60;
				break;
			case 'M':
				totalMinutes += value;
				break;
			case 'S':
				totalMinutes += value / 60;
				break;
			default:
				break;
			}
		}

		return totalMinutes;
	}

	return (
		<div {...props} className={styles.params}>
			<div className={styles.description}>{film.short.description}</div>
			<div className={styles.ratingFavorite}>
				{film.short.aggregateRating && <RatingBadge position='relative' starsCount={film.short.aggregateRating.ratingValue} />}
				{currentFilm?.isFavorite && <CardLink isFavorite label='В избранном' icon={favoriteIcon} action="remove" film={currentFilm} />}
				{!currentFilm?.isFavorite && <CardLink label='В избранное' icon={icon} action="add" film={currentFilm} />}
			</div>
			<div>
				<div className={styles.paramLabel}>Тип</div>
				<div className={styles.paramValue}>{film.short['@type']}</div>
			</div>
			<div>
				<div className={styles.paramLabel}>Дата выхода</div>
				<div className={styles.paramValue}>{film.short.datePublished}</div>
			</div>
			{film.short.duration && <div>
				<div className={styles.paramLabel}>Длительность</div>
				<div className={styles.paramValue}>{iso8601DurationToMinutes(film.short.duration)} мин</div>
			</div>}
			<div>
				<div className={styles.paramLabel}>Жанр</div>
				<div className={styles.paramValue}>{film.short.genre.join(', ')}</div>
			</div>
		</div>
	);
}