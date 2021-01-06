import logo from './logo.svg';
import './App.css';
import { Books } from './components/Books';
import { booksList } from './data/books';

function App() {
	return (
		<div className="App">
			<Books data={booksList} />
		</div>
	);
}

export default App;
