import { HTMLAttributes, ReactNode } from 'react';

export interface CardLinkProps extends HTMLAttributes<HTMLElement> {
	label: string; 
	icon: ReactNode; 
}