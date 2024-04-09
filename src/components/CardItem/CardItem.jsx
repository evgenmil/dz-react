import CardLink from '../CardLink/CardLink';
import Icon from '../Icon/Icon';
import './CardItem.css';

export default function CardItem({ image, name, starsCount, isFavorite }) {
	const icon = <Icon srcImage="/like.svg" />;
	const favoriteIcon = <Icon srcImage="/favorite.svg" />;

	return (
		<div className='card-item'>
			<div className='card-item__stars'><Icon srcImage="/star.svg" /> {starsCount}</div>
			<img src={image} className='card-item__image' />
			<div className='card-item__header'>
				<div className='card-item__name'>{name}</div>
				{isFavorite && <CardLink className='is-favorite' label='В избранном' icon={favoriteIcon} />}
				{!isFavorite && <CardLink label='В избранное' icon={icon} />}
			</div>
		</div>
	);
}