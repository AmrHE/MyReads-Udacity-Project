import React from "react";
import AddBook from "./AddBook";
import Shelf from "./Shelf";
import PropTypes from "prop-types";

const Home = (props) => {
	// state = {
	// 	currentlyReading: this.props.currentlyReading,
	// 	wantToRead: this.props.wantToRead,
	// 	read: this.props.read,
	// };

	// static getDerivedStateFromProps(props, state) {
	// 	// Any time the current user changes,
	// 	// Reset any parts of state that are tied to that user.
	// 	// In this simple example, that's just the email.
	// 	if (props.currentlyReading !== state.currentlyReading) {
	// 		return {
	// 			currentlyReading: props.currentlyReading,
	// 		};
	// 	}
	// 	if (props.wantToRead !== state.wantToRead) {
	// 		return {
	// 			wantToRead: props.wantToRead,
	// 		};
	// 	}
	// 	if (props.read !== state.read) {
	// 		return {
	// 			read: props.read,
	// 		};
	// 	}
	// 	return null;
	// }

	return (
		//HEADER
		<div className="list-books">
			<div className="list-books-title">
				<h1>MyReads</h1>
			</div>

			{/* SHELFS */}
			<Shelf
				title="Currently reading"
				books={props.currentlyReading}
				moveBook={props.moveBook}
			/>
			<Shelf
				title="Want to read"
				books={props.wantToRead}
				moveBook={props.moveBook}
			/>
			<Shelf title="Read" books={props.read} moveBook={props.moveBook} />
			<AddBook />
		</div>
	);
};

export default Home;
