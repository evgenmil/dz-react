import { Navigate, Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Logo from '../../components/Logo/Logo';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function AuthLayout() {
	const currentUser = useSelector((s: RootState) => s.user.currentUser);

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