import logo from './logo.svg';
import './App.css';
import { Books } from './components/Books';
import { books } from './data/books';

function App() {
	return (
		<div className="App">
			<Books data={books} />
		</div>
	);
}

export default App;
