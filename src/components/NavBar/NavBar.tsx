import { MouseEvent, useContext, HTMLAttributes } from 'react';
import Badge from '../Badge/Badge';
import Icon from '../Icon/Icon';
import styles from './NavBar.module.css';
import { UserContext } from '../../context/user.context';

export default function NavBar({ ...props }: HTMLAttributes<HTMLElement>) {
	const { currentUser, logout } = useContext(UserContext);

	const logoutHandle = (e: MouseEvent) => {
		e.preventDefault();
		logout();
	};

	return (
		<div {...props} className={styles['navbar']}>
			<a href='' className={styles['active']}>Поиск фильмов</a>
			{currentUser &&
				<>
					<a href=''>Мои фильмы <Badge /></a>
					<a href=''>{currentUser.username} <Icon srcImage="/user.svg" /></a>
					<a href='' onClick={logoutHandle}>Выйти</a>
				</>
			}
			{!currentUser && <a href=''>Войти <Icon srcImage="/login.svg" /></a>}
		</div >
	);
}