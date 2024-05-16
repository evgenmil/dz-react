import CardItem from '../CardItem/CardItem';
import styles from './CardList.module.css';
import { CardListProps } from './CardList.props';
import cn from 'classnames';

export default function CardList({ items, className, ...props }: CardListProps) {
	if (items.length == 0) {
		return (
			<div className={cn(styles.notFound, className)} {...props}>
				<div className={styles.header}>Упс... Ничего не найдено</div>
				<div className={styles.desc}>Попробуйте изменить запрос или ввести более точное название фильма</div>
			</div>
		);
	}

	const itemsList = items.map(elem => {
		return <CardItem key={elem.id} name={elem.name} image={elem.image} starsCount={elem.starsCount} isFavorite={elem.isFavorite} />;
	});

	return <div className={cn(styles.cardList, className)} {...props}>{itemsList}</div>;

}