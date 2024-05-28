import { HTMLAttributes } from 'react';

export interface CardItemProps extends HTMLAttributes<HTMLDivElement> {
	id: string;
	image: string;
	name: string;
	starsCount: number;
	isFavorite: boolean;
}