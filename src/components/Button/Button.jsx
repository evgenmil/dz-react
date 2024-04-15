import styles from './Button.module.css';

export default function Button({ label, className, onClick }) {
	return <button className={styles[className]} onClick={onClick}>{label}</button>;
}