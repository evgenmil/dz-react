import { LinkHTMLAttributes, ReactNode } from 'react';

export interface CardLinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
	label: string; 
	icon: ReactNode; 
}