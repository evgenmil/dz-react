import styles from './CardLink.module.css';
import cn from 'classnames';
import { CardLinkProps } from './CardLink.props';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { favoriteActions } from '../../store/favorite.slice';

export default function CardLink({ label, icon, action, film, isFavorite, className, ...props }: CardLinkProps) {
	const currentUser = useSelector((s: RootState) => s.user.currentUser);
	const dispatch = useDispatch<AppDispatch>();
	const cl = cn(styles.addCardLink, {[styles.isFavorite]: isFavorite}, className);

	const actionClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		if (currentUser) {
			if (action === 'add') {
				dispatch(favoriteActions.add({ username: currentUser.username, films: [film] }));
			}
			if (action === 'remove') {
				dispatch(favoriteActions.remove({ username: currentUser.username, filmId: film.id }));
			}
		}
	};
	
	return <div {...props} onClick={actionClick} className={cl}>{icon} {label}</div>;
}