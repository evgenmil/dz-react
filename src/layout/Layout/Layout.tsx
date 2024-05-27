import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Logo from '../../components/Logo/Logo';
import NavBar from '../../components/NavBar/NavBar';

export default function Layout() {
	return <>
		<div>
			<Header>
				<Logo />
				<NavBar />
			</Header>
		</div>
		<div>
			<Outlet />
		</div>
	</>;
}