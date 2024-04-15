import CardLink from '../CardLink/CardLink';
import Icon from '../Icon/Icon';
import styles from './CardItem.module.css';

export default function CardItem({ image, name, starsCount, isFavorite }) {
	const icon = <Icon srcImage="/like.svg" />;
	const favoriteIcon = <Icon srcImage="/favorite.svg" />;

	return (
		<div className={styles['card-item']}>
			<div className={styles['card-item__stars']}><Icon srcImage="/star.svg" /> {starsCount}</div>
			<img src={image} className={styles['card-item__image']} />
			<div className={styles['card-item__header']}>
				<div className={styles['card-item__name']}>{name}</div>
				{isFavorite && <CardLink className={styles['is-favorite']} label='В избранном' icon={favoriteIcon} />}
				{!isFavorite && <CardLink label='В избранное' icon={icon} />}
			</div>
		</div>
	);
}