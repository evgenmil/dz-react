import CardItem from '../CardItem/CardItem';
import './CardList.css';

export default function CardList({ items }) {
	if (items.length == 0) {
		return (
			<div className='notfound'>
				<div className='notfound-header'>Упс... Ничего не найдено</div>
				<div className='notfound-desc'>Попробуйте изменить запрос или ввести более точное название фильма</div>
			</div>
		);
	}

	const itemsList = items.map(elem => {
		return <CardItem key={elem.id} name={elem.name} image={elem.image} starsCount={elem.starsCount} isFavorite={elem.isFavorite} />;
	});

	return <div className='card-list'>{itemsList}</div>;

}