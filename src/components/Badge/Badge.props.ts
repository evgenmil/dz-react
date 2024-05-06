import { HTMLAttributes } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLElement> {
	type?: 'primary';
	count?: number;
}