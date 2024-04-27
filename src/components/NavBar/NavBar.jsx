import { useContext } from 'react';
import Badge from '../Badge/Badge';
import Icon from '../Icon/Icon';
import styles from './NavBar.module.css';
import { UserContext } from '../../context/user.context';

export default function NavBar({ ...props }) {
	const { currentUser, logout } = useContext(UserContext);

	const logoutHandle = (e) => {
		e.preventDefault();
		logout();
	};

	return (
		<div {...props} className={styles['navbar']}>
			<a href='' className={styles['active']}>Поиск фильмов</a>
			{currentUser &&
				<>
					<a href=''>Мои фильмы <Badge type='badge-primary' count="2" /></a>
					<a href=''>{currentUser.username} <Icon srcImage="/user.svg" /></a>
					<a href='' onClick={logoutHandle}>Выйти</a>
				</>
			}
			{!currentUser && <a href=''>Войти <Icon srcImage="/login.svg" /></a>}
		</div >
	);
}