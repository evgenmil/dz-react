import { Link } from 'react-router-dom';
import CardLink from '../CardLink/CardLink';
import Icon from '../Icon/Icon';
import styles from './CardItem.module.css';
import { CardItemProps } from './CardItem.props';

export default function CardItem(props: CardItemProps) {
	const icon = <Icon srcImage="/like.svg" />;
	const favoriteIcon = <Icon srcImage="/favorite.svg" />;

	return (
		<Link to={`/film/${props.id}`} className={styles.cardItem}>
			<div className={styles.stars}><Icon srcImage="/star.svg" /> {props.starsCount}</div>
			<div className={styles.image} style={{backgroundImage: `url('${props.image}')`}}></div>
			<div className={styles.header}>
				<div className={styles.name}>{props.name}</div>
				{props.isFavorite && <CardLink className={styles.isFavorite} label='В избранном' icon={favoriteIcon} />}
				{!props.isFavorite && <CardLink label='В избранное' icon={icon} />}
			</div>
		</Link>
	);
}