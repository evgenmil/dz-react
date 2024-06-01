import styles from './FilmImage.module.css';
import { HTMLAttributes } from 'react';

export default function FilmImage({ src, ...props }: {src: string} & HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props} className={styles.image} style={{backgroundImage: `url('${src}')`}}></div>
	);
}