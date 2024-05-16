import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Logo from '../../components/Logo/Logo';
import NavBar from '../../components/NavBar/NavBar';
import { UserContextProvider } from '../../context/user.context';

export default function Layout() {
	return <UserContextProvider>
		<div>
			<Header>
				<Logo />
				<NavBar />
			</Header>
		</div>
		<div>
			<Outlet />
		</div>
	</UserContextProvider>;
}