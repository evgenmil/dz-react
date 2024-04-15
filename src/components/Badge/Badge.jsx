import styles from './Badge.module.css';
import classnames from 'classnames';

export default function Badge({ type, count }) {
	const cl = classnames(styles['badge'], styles[type]);

	return <span className={cl}>{count}</span>;
}