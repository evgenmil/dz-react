import { HTMLAttributes } from 'react';
import { FilmInterface } from '../../constants';

export interface CardListProps extends HTMLAttributes<HTMLDivElement> {
	items: FilmInterface[];
}