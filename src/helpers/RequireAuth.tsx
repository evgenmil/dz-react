import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const RequireAuth = ({ children }: {children: ReactNode}) => {
	const currentUser = useSelector((s: RootState) => s.user.currentUser);

	if (currentUser === null) {
		return <Navigate to="/auth/login" replace />;
	}

	return children;
};