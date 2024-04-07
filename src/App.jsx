import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import CardList from './components/CardList/CardList';
import H1 from './components/H1/H1';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Logo from './components/Logo/Logo';
import NavBar from './components/NavBar/NavBar';
import Paragraph from './components/Paragraph/Paragraph';
import SearchGroup from './components/SearchGroup/SearchGroup';

const INITIAL_DATA_FILMS = [
	{
		id: 1,
		name: 'Black Widow',
		image: './films/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New.png',
		starsCount: 123,
		isFavorite: false
	},
	{
		id: 2,
		name: 'Shang Chi',
		image: './films/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.png',
		starsCount: 32,
		isFavorite: true
	},
	{
		id: 3,
		name: 'Loki',
		image: './films/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1 (1).png',
		starsCount: 35,
		isFavorite: false
	},
	{
		id: 4,
		name: 'How I Met Your Mother',
		image: './films/how-i-met.png',
		starsCount: 356,
		isFavorite: false
	},
	{
		id: 5,
		name: 'Money Heist',
		image: './films/money-hist.png',
		starsCount: 567,
		isFavorite: false
	}
];

function App() {

	const [filmItems, setFilmItems] = useState(INITIAL_DATA_FILMS);

	return (
		<>
			<Header>
				<Logo />
				<NavBar />
			</Header>
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
