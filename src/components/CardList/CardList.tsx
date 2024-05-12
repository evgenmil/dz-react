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
		return <CardItem
			id={elem['#IMDB_ID']}
			key={elem['#IMDB_ID']}
			name={elem['#TITLE']}
			image={elem['#IMG_POSTER']}
			starsCount={elem['#RANK']}
			isFavorite={false}
		/>;
	});

	return <div className={cn(styles.cardList, className)} {...props}>{itemsList}</div>;

}