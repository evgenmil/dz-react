import { forwardRef } from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ label, className = 'primary', ...props }, ref) {
	return <button ref={ref} className={styles[className]} {...props}>{label}</button>;
});

export default Button;