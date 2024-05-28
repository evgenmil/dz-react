import { Navigate, Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Logo from '../../components/Logo/Logo';
import { UserContext } from '../../context/user.context';
import { useContext } from 'react';

export default function AuthLayout() {
	const { currentUser } = useContext(UserContext);

	if (currentUser !== null) {
		return <Navigate to="/" replace />;
	}
	
	return <>
		<div>
			<Header>
				<Logo />
			</Header>
		</div>
		<div>
			<Outlet />
		</div>
	</>;
}