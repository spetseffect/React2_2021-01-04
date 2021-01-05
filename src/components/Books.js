import React from 'react';

export class Books extends React.Component {
	constructor(props) {
		super(props);
		this.state.books = this.props.data;
	}
	bookList = this.state.books.map((item, index) => {
		return (
			<li key={index} >
				<h2>"{item.name}" {item.avtor} ({item.pages}c./{item.genre})</h2>
				{item.review[0]}
			</li>
		);
	});

	render() {
		return (
			<ul>bookList</ul>
		);
	}
}