import { HTMLAttributes } from 'react';
import styles from './SearchGroup.module.css';
import cn from 'classnames';

export default function SearchGroup({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
	return <div className={cn(styles.searchGroup, className)} {...props}>{children}</div>;
}