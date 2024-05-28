import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/user.context';

export const RequireAuth = ({ children }: {children: ReactNode}) => {
	const { currentUser } = useContext(UserContext);

	if (currentUser === null) {
		return <Navigate to="/auth/login" replace />;
	}

	return children;
};