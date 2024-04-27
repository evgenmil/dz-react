import { forwardRef } from 'react';
import styles from './Button.module.css';

const Button = forwardRef(function Button({ label, className, onClick }, ref) {
	return <button ref={ref} className={styles[className]} onClick={onClick}>{label}</button>;
});

export default Button;