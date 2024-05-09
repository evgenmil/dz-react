import { MouseEvent, useContext, HTMLAttributes } from 'react';
import Badge from '../Badge/Badge';
import Icon from '../Icon/Icon';
import styles from './NavBar.module.css';
import { UserContext } from '../../context/user.context';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

type NavLinkRenderProps = {
    isActive: boolean;
    isPending: boolean;
    isTransitioning: boolean;
};

export default function NavBar({ ...props }: HTMLAttributes<HTMLElement>) {
	const { currentUser, logout } = useContext(UserContext);

	const logoutHandle = (e: MouseEvent) => {
		e.preventDefault();
		logout();
	};

	const navLinkClassName = (props: NavLinkRenderProps) => cn({[styles.active] : props.isActive});

	return (
		<div {...props} className={styles.navbar}>
			<NavLink to={'/'} className={navLinkClassName}>Поиск фильмов</NavLink>
			{currentUser &&
				<>
					<NavLink to={'/favorites'} className={navLinkClassName}>Мои фильмы <Badge /></NavLink>
					<NavLink to={'/profile'} className={navLinkClassName}>{currentUser.username} <Icon srcImage="/user.svg" /></NavLink>
					<a href='' onClick={logoutHandle}>Выйти</a>
				</>
			}
			{!currentUser && <NavLink to={'/login'} className={navLinkClassName}>Войти <Icon srcImage="/login.svg" /></NavLink>}
		</div >
	);
}