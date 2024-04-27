import CardItem from '../CardItem/CardItem';
import styles from './CardList.module.css';

export default function CardList({ items }) {
	if (items.length == 0) {
		return (
			<div className={styles['notfound']}>
				<div className={styles['notfound-header']}>Упс... Ничего не найдено</div>
				<div className={styles['notfound-desc']}>Попробуйте изменить запрос или ввести более точное название фильма</div>
			</div>
		);
	}

	const itemsList = items.map(elem => {
		return <CardItem key={elem.id} name={elem.name} image={elem.image} starsCount={elem.starsCount} isFavorite={elem.isFavorite} />;
	});

	return <div className={styles['card-list']}>{itemsList}</div>;

}