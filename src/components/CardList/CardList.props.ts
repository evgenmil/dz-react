import { HTMLAttributes } from 'react';
import { Film } from '../../constants';

export interface CardListProps extends HTMLAttributes<HTMLDivElement> {
	items: Film[];
}