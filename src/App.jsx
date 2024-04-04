import './App.css';
import Button from './components/Button/Button';
import H1 from './components/H1/H1';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Logo from './components/Logo/Logo';
import NavBar from './components/NavBar/NavBar';
import Paragraph from './components/Paragraph/Paragraph';
import SearchGroup from './components/SearchGroup/SearchGroup';

function App() {

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
		</>
	);
}

export default App;
