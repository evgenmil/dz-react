import { Link } from 'react-router-dom';
import CardLink from '../CardLink/CardLink';
import Icon from '../Icon/Icon';
import styles from './CardItem.module.css';
import { CardItemProps } from './CardItem.props';
import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { favoriteActions } from '../../store/favorite.slice';

export default function CardItem(props: CardItemProps) {
	const icon = <Icon srcImage="/like.svg" />;
	const favoriteIcon = <Icon srcImage="/favorite.svg" />;
	const dispatch = useDispatch<AppDispatch>();

	const add = (e: MouseEvent) => {
		e.preventDefault();
		dispatch(favoriteActions.add({ username: '123', films: [props.film] }));
	};
	const remove = (e: MouseEvent) => {
		e.preventDefault();
		dispatch(favoriteActions.remove({ username: '123', filmId: props.film.id }));
	};

	return (
		<Link to={`/film/${props.film.id}`} className={styles.cardItem}>
			<div className={styles.stars}><Icon srcImage="/star.svg" /> {props.film.starsCount}</div>
			<div className={styles.image} style={{backgroundImage: `url('${props.film.image}')`}}></div>
			<div className={styles.header}>
				<div className={styles.name}>{props.film.name}</div>
				{props.film.isFavorite && <CardLink className={styles.isFavorite} onClick={remove} label='В избранном' icon={favoriteIcon} />}
				{!props.film.isFavorite && <CardLink label='В избранное' icon={icon} onClick={add} />}
			</div>
		</Link>
	);
}