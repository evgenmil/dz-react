import { Link } from 'react-router-dom';
import CardLink from '../CardLink/CardLink';
import Icon from '../Icon/Icon';
import styles from './CardItem.module.css';
import { CardItemProps } from './CardItem.props';
import RatingBadge from '../RatingBadge/RatingBadge';

export default function CardItem(props: CardItemProps) {
	const icon = <Icon srcImage="/like.svg" />;
	const favoriteIcon = <Icon srcImage="/favorite.svg" />;

	return (
		<Link to={`/film/${props.film.id}`} className={styles.cardItem}>
			<RatingBadge starsCount={props.film.starsCount} />
			<div className={styles.image} style={{backgroundImage: `url('${props.film.image}')`}}></div>
			<div className={styles.header}>
				<div className={styles.name}>{props.film.name}</div>
				{props.film.isFavorite && <CardLink isFavorite action='remove' label='В избранном' icon={favoriteIcon} film={props.film} />}
				{!props.film.isFavorite && <CardLink label='В избранное' icon={icon} action='add' film={props.film} />}
			</div>
		</Link>
	);
}