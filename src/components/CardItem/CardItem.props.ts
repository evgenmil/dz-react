import { HTMLAttributes } from 'react';

export interface LocalFilm {
	id: string;
	image: string;
	name: string;
	starsCount: number;
	isFavorite: boolean;
}
export interface CardItemProps extends HTMLAttributes<HTMLDivElement> {
	film: LocalFilm
}