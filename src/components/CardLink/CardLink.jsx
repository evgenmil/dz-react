import styles from './CardLink.module.css';
import classnames from 'classnames';

export default function CardLink({ label, icon, onClick, className }) {
	const cl = classnames(styles['add-card-link'], className);
	return <a href='' onClick={onClick} className={cl}>{icon} {label}</a>;
}