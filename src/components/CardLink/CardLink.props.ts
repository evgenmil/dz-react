import { HTMLAttributes, ReactNode } from 'react';
import { LocalFilm } from '../CardItem/CardItem.props';

export interface CardLinkProps extends HTMLAttributes<HTMLElement> {
	label: string; 
	action: 'add' | 'remove'; 
	icon: ReactNode; 
	film: LocalFilm;
	isFavorite?: boolean;
}