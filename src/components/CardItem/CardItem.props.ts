import { HTMLAttributes } from 'react';

export interface CardItemProps extends HTMLAttributes<HTMLDivElement> {
	image: string;
	name: string;
	starsCount: number;
	isFavorite: boolean;
}