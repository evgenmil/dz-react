import { HTMLAttributes } from 'react';
import './Title.module.css';

export default function Title({ children, ...props }: HTMLAttributes<HTMLElement>) {
	return <h1 {...props}>{children}</h1 >;
}