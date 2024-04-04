import Badge from '../Badge/Badge';
import Icon from '../Icon/Icon';
import './NavBar.css';

export default function NavBar() {
	return (
		<div className='navbar'>
			<a href='' className='active'>Поиск фильмов</a>
			<a href=''>Мои фильмы <Badge type='primary' count="2" /></a>
			<a href=''>Пользователь <Icon name="user.svg" /></a>
			<a href=''>Войти <Icon name="login.svg" /></a>
		</div>
	);
}