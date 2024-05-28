import styles from './CardLink.module.css';
import cn from 'classnames';
import { CardLinkProps } from './CardLink.props';

export default function CardLink({ label, icon, className, ...props }: CardLinkProps) {
	const cl = cn(styles.addCardLink, className);
	return <div {...props} className={cl}>{icon} {label}</div>;
}