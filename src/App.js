import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";

class BooksApp extends React.Component {
	state = {
		books: [],
		currentlyReading: [],
		wantToRead: [],
		read: [],
	};
	removeFromShelf = (book, movedBook) => {
		if (movedBook && movedBook.shelf === "currentlyReading") {
			const index = this.state.currentlyReading.findIndex(
				(b) => book.id === b.id
			);

			const deletedItem = this.state.currentlyReading.splice(index, 1);

			this.setState({
				currentlyReading: this.state.currentlyReading,
			});

			// this.state.currentlyReading.map((book) => {
			// 	book.shelf = shelf;
			// 	return book;
			// });

			// console.log(this.state.currentlyReading);
			// console.log("Moved Book Shelf: ", movedBook.shelf);
		} else {
		}

		if (movedBook.shelf === "wantToRead") {
			const index = this.state.wantToRead.findIndex((b) => book.id === b.id);

			const deletedItem = this.state.wantToRead.splice(index, 1);

			this.setState({ wantToRead: this.state.wantToRead });

			// this.state.wantToRead.map((book) => {
			// 	book.shelf = shelf;
			// });

			// movedBook.shelf = shelf;
			// console.log(this.state.read);
			// console.log("Moved Book Shelf: ", movedBook.shelf);
		}

		if (movedBook.shelf === "read") {
			const index = this.state.read.findIndex((b) => book.id === b.id);

			const deletedItem = this.state.read.splice(index, 1);

			this.setState({ read: this.state.read });

			// this.state.read.map((book) => {
			// 	book.shelf = shelf;
			// });
			// console.log(this.state.read);
			// console.log("Moved Book Shelf: ", movedBook.shelf);
		}
	};

	moveBook = async (book, shelf) => {
		await BooksAPI.update(book, shelf);

		const foundBook = this.state.books.find((b) => b.id === book.id);

		try {
			if (
				shelf === "currentlyReading" &&
				foundBook.shelf &&
				!this.state.currentlyReading.includes(foundBook)
			) {
				this.setState({
					currentlyReading: [...this.state.currentlyReading, foundBook],
				});
				this.removeFromShelf(book, foundBook);
				foundBook.shelf = shelf;
			} else if (
				shelf === "wantToRead" &&
				foundBook.shelf &&
				!this.state.wantToRead.includes(foundBook)
			) {
				this.setState({
					wantToRead: [...this.state.wantToRead, foundBook],
				});
				this.removeFromShelf(book, foundBook);
				foundBook.shelf = shelf;
			} else if (
				shelf === "read" &&
				foundBook.shelf &&
				!this.state.read.includes(foundBook)
			) {
				this.setState({
					read: [...this.state.read, foundBook],
				});
				this.removeFromShelf(book, foundBook);
				foundBook.shelf = shelf;
			}
		} catch (error) {
			console.log("entered the else statement");
			this.setState({
				books: [...this.state.books, book],
			});
			book.shelf = shelf;
			window.location.replace("/");
			// window.location.reload();
		}
	};

	async componentDidMount() {
		const books = await BooksAPI.getAll();
		this.setState({ books });

		const currentlyReading = this.state.books.filter(
			(book) => book.shelf === "currentlyReading"
		);
		this.setState({ currentlyReading });

		const wantToRead = this.state.books.filter(
			(book) => book.shelf === "wantToRead"
		);
		this.setState({ wantToRead });

		const read = this.state.books.filter((book) => book.shelf === "read");
		this.setState({ read });

		// console.log(books);
		// console.log({ currentlyReading });
		// console.log({ wantToRead });
		// console.log({ read });
	}

	render() {
		return (
			<div className="app">
				<Route
					exact
					path="/"
					render={() => (
						<Home
							books={this.state.books}
							currentlyReading={this.state.currentlyReading}
							wantToRead={this.state.wantToRead}
							read={this.state.read}
							moveBook={this.moveBook}
						/>
					)}
				/>
				<Route
					exact
					path="/search"
					render={() => (
						<Search books={this.state.books} moveBook={this.moveBook} />
					)}
				/>
			</div>
		);
	}
}

export default BooksApp;
