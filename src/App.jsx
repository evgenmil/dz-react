import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Paragraph from './components/Paragraph/Paragraph';

function App() {

	return (
		<>
			<Header text="Поиск" />
			<Button label="Искать" className="primary" />
			<Paragraph className="small">Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
		</>
	);
}

export default App;
