import './Header.module.css';
import { HTMLAttributes } from 'react';

export default function Header({ children }: HTMLAttributes<HTMLHeadElement>) {
	return (
		<header>
			{children}
		</header>
	);
}