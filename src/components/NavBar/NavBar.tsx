import { MouseEvent, HTMLAttributes } from 'react';
import Badge from '../Badge/Badge';
import Icon from '../Icon/Icon';
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { userActions } from '../../store/user.slice';

type NavLinkRenderProps = {
    isActive: boolean;
    isPending: boolean;
    isTransitioning: boolean;
};

export default function NavBar({ ...props }: HTMLAttributes<HTMLElement>) {
	const currentUser = useSelector((s: RootState) => s.user.currentUser);
	const films = useSelector((s: RootState) => s.favorite.userFilms);
	const currentUserFilmsCount = films.find(i => i.username === currentUser?.username)?.films.length;
	const dispatch = useDispatch<AppDispatch>();

	const logoutHandle = (e: MouseEvent) => {
		e.preventDefault();
		dispatch(userActions.logout());
	};

	const navLinkClassName = (props: NavLinkRenderProps) => cn({[styles.active] : props.isActive});

	return (
		<div {...props} className={styles.navbar}>
			<NavLink to={'/'} className={navLinkClassName}>Поиск фильмов</NavLink>
			{currentUser &&
				<>
					<NavLink to={'/favorites'} className={navLinkClassName}>Мои фильмы <Badge count={currentUserFilmsCount} /></NavLink>
					<NavLink to={'/profile'} className={navLinkClassName}>{currentUser.username} <Icon srcImage="/user.svg" /></NavLink>
					<a href='' onClick={logoutHandle}>Выйти</a>
				</>
			}
			{!currentUser && <NavLink to={'/auth/login'} className={navLinkClassName}>Войти <Icon srcImage="/login.svg" /></NavLink>}
		</div >
	);
}