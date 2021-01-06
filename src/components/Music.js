import React from 'react';

export class Music extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			musList: this.props.data
		};
	}

	render() {
		let bookList = this.state.books.map((item, index) => {
			return (
				<li key={index} >
					<h2>"{item.name}" {item.avtor} ({item.pages}c./{item.genre})</h2>
					{item.review.map((r, i) => {
						return (
							<div key={i}>
								<h3>{r.avtor}</h3>
								<p>{r.text}</p>
							</div>
						);
					})}
				</li>
			);
		});
		return (<>
			<ul>{bookList}</ul>
			<hr />
		</>);
	}
}