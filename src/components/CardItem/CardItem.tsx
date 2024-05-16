import CardLink from '../CardLink/CardLink';
import Icon from '../Icon/Icon';
import styles from './CardItem.module.css';
import { CardItemProps } from './CardItem.props';
import cn from 'classnames';

export default function CardItem({ image, name, starsCount = 0, isFavorite = false, className, ...props }: CardItemProps) {
	const icon = <Icon srcImage="/like.svg" />;
	const favoriteIcon = <Icon srcImage="/favorite.svg" />;

	return (
		<div className={cn(styles.cardItem, className)} {...props}>
			<div className={styles.stars}><Icon srcImage="/star.svg" /> {starsCount}</div>
			<img src={image} className={styles.image} />
			<div className={styles.header}>
				<div className={styles.name}>{name}</div>
				{isFavorite && <CardLink className={styles.isFavorite} label='В избранном' icon={favoriteIcon} />}
				{!isFavorite && <CardLink label='В избранное' icon={icon} />}
			</div>
		</div>
	);
}