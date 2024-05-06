import { useState } from 'react';
import Button from './components/Button/Button';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Logo from './components/Logo/Logo';
import NavBar from './components/NavBar/NavBar';
import Paragraph from './components/Paragraph/Paragraph';
import SearchGroup from './components/SearchGroup/SearchGroup';
import { INITIAL_DATA_FILMS } from './constants';
import LoginForm from './components/LoginForm/Loginform.tsx';
import { UserContextProvider } from './context/user.context';
import Title from './components/Title/Title';

function App() {
	const [filmItems, setFilmItems] = useState(INITIAL_DATA_FILMS);

	return (
		<UserContextProvider>
			<Header>
				<Logo />
				<NavBar />
			</Header>

			<Title>Вход</Title>
			<LoginForm />

			<Title>Поиск</Title >
			<Paragraph className="small">Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
			<SearchGroup>
				<Input placeholder="Введите название" icon="search" />
				<Button label="Искать" className="primary" />
			</SearchGroup>

			<CardList items={filmItems}></CardList>
		</UserContextProvider>
	);
}

export default App;
