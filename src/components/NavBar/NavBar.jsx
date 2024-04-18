import Badge from '../Badge/Badge';
import Icon from '../Icon/Icon';
import styles from './NavBar.module.css';

export default function NavBar({ logout, currentUser }) {
	return (
		<div className={styles['navbar']}>
			<a href='' className={styles['active']}>Поиск фильмов</a>
			{currentUser &&
				<>
					<a href=''>Мои фильмы <Badge type='badge-primary' count="2" /></a>
					<a href=''>{currentUser.username} <Icon srcImage="/user.svg" /></a>
					<a href='' onClick={logout}>Выйти</a>
				</>
			}
			{!currentUser && <a href=''>Войти <Icon srcImage="/login.svg" /></a>}
		</div >
	);
}