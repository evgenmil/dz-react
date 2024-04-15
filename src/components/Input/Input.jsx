import classNames from 'classnames';
import styles from './Input.module.css';

export default function Input({ placeholder, icon }) {
	const cl = classNames(styles['text-input'], {
		[styles['text-input-icon']]: icon,
		[styles[icon]]: icon
	});

	return <input type='text' className={cl} placeholder={placeholder} />;
}