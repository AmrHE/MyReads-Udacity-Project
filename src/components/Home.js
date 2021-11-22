import React, { Component } from "react";
import AddBook from "./AddBook";
import Shelf from "./Shelf";

class Home extends Component {
	state = {
		currentlyReading: this.props.currentlyReading,
		wantToRead: this.props.wantToRead,
		read: this.props.read,
	};

	static getDerivedStateFromProps(props, state) {
		// Any time the current user changes,
		// Reset any parts of state that are tied to that user.
		// In this simple example, that's just the email.
		if (props.currentlyReading !== state.currentlyReading) {
			return {
				currentlyReading: props.currentlyReading,
			};
		}
		if (props.wantToRead !== state.wantToRead) {
			return {
				wantToRead: props.wantToRead,
			};
		}
		if (props.read !== state.read) {
			return {
				read: props.read,
			};
		}
		return null;
	}

	render() {
		return (
			//HEADER
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>

				{/* SHELFS */}
				<Shelf
					title="Currently reading"
					books={this.props.currentlyReading}
					moveBook={this.props.moveBook}
				/>
				<Shelf
					title="Want to read"
					books={this.props.wantToRead}
					moveBook={this.props.moveBook}
				/>
				<Shelf
					title="Read"
					books={this.props.read}
					moveBook={this.props.moveBook}
				/>
				<AddBook />
			</div>
		);
	}
}

export default Home;
