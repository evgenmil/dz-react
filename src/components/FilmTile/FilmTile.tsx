import styles from './FilmTile.module.css';
import { HTMLAttributes } from 'react';

export default function FilmTile({ children }: HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={styles.header}>
			{children}
		</div>
	);
}