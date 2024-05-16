import classNames from 'classnames';
import styles from './Input.module.css';
import { forwardRef } from 'react';
import { InputProps } from './Input.props';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ icon, ...props }, ref) {
	const cl = classNames(styles.textInput, {
		[styles.textInputIcon]: icon,
		[styles[icon]]: icon
	});

	return <input {...props} type='text' ref={ref} className={cl} />;
});

export default Input;