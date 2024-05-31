import Icon from '../Icon/Icon';
import styles from './RatingBadge.module.css';
import { HTMLAttributes } from 'react';
import cn from 'classnames';

export default function RatingBadge({ starsCount, position = 'absolute' }: {starsCount: number, position?: 'absolute' | 'relative'} & HTMLAttributes<HTMLDivElement>) {
	const cl = cn(styles.stars, styles[position]);

	return (
		<div className={cl}><Icon srcImage="/star.svg" /> {starsCount}</div>
	);
}