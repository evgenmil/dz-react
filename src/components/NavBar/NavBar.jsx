import Badge from '../Badge/Badge';
import Icon from '../Icon/Icon';
import styles from './NavBar.module.css';

export default function NavBar() {
	return (
		<div className={styles['navbar']}>
			<a href='' className={styles['active']}>Поиск фильмов</a>
			<a href=''>Мои фильмы <Badge type='badge-primary' count="2" /></a>
			<a href=''>Пользователь <Icon srcImage="/user.svg" /></a>
			<a href=''>Войти <Icon srcImage="/login.svg" /></a>
		</div >
	);
}