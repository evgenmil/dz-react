import { useEffect, useState } from 'react';
import Button from './components/Button/Button';
import CardList from './components/CardList/CardList';
import H1 from './components/H1/H1';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Logo from './components/Logo/Logo';
import NavBar from './components/NavBar/NavBar';
import Paragraph from './components/Paragraph/Paragraph';
import SearchGroup from './components/SearchGroup/SearchGroup';
import { INITIAL_DATA_FILMS } from './constants';
import LoginForm from './components/LoginForm/Loginform';
import { useLocalStorage } from './hooks/use-localstorage.hook';

function mapItems(items, newItem) {
	if (!items) {
		return [];
	}
	return items.map(i => ({
		...i,
		isLogined: (i.username === newItem.username)
	}));
}

function App() {
	const [filmItems, setFilmItems] = useState(INITIAL_DATA_FILMS);
	const [users, setUsers] = useLocalStorage('users');
	const [currentUser, setCurrentUser] = useLocalStorage('currentUser');

	const login = item => {
		let isExistUser = false;
		if (users) {
			isExistUser = users.find(user => user.username === item.username);
		}
		if (isExistUser) {
			setUsers([...mapItems(users, item)]);
			setCurrentUser({ ...isExistUser, isLogined: true });
		} else {
			setUsers([...mapItems(users, item), item]);
			setCurrentUser(item);
		}
	};

	const logout = (e) => {
		e.preventDefault();
		setCurrentUser(false);
	};

	return (
		<>
			<Header>
				<Logo />
				<NavBar currentUser={currentUser} logout={logout} />
			</Header>

			{!currentUser && <>
				<H1 text="Вход" />
				<LoginForm setUsers={login} />
			</>}

			<H1 text="Поиск" />
			<Paragraph className="small">Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
			<SearchGroup>
				<Input placeholder="Введите название" icon="search" />
				<Button label="Искать" className="primary" />
			</SearchGroup>

			<CardList items={filmItems}></CardList>
		</>
	);
}

export default App;
