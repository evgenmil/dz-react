import classNames from 'classnames';
import styles from './Input.module.css';
import { forwardRef } from 'react';

const Input = forwardRef(function Input({ placeholder, icon, ...props }, ref) {
	const cl = classNames(styles['text-input'], {
		[styles['text-input-icon']]: icon,
		[styles[icon]]: icon
	});

	return <input {...props} type='text' ref={ref} className={cl} placeholder={placeholder} />;
});

export default Input;