import classnames from 'classnames';
import styles from './Badge.module.css';
import { BadgeProps } from './Badge.props';


export default function Badge({ type = 'primary', count = 0, ...props }: BadgeProps) {
	const cl = classnames(styles.badge, styles[type]);

	return <span {...props} className={cl}>{count}</span>;
}