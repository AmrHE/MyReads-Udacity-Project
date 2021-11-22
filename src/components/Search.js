import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

class Search extends Component {
	state = {
		showingBooks: [],
	};

	search = async (query) => {
		if (query) {
			const books = await BooksAPI.search(query);
			console.log(books);
			if (books && !books.error && books.length > 0) {
				const booksWithShelves = books.map((book) => {
					//if the book exists only change the shelf
					const foundBook = this.props.books.find((b) => book.id === b.id);
					if (foundBook) {
						book.shelf = foundBook.shelf;
					}
					return book;
				});
				this.setState({
					showingBooks: booksWithShelves,
				});
			} else {
				this.setState({
					showingBooks: [],
				});
			}
		} else {
			this.setState({
				showingBooks: [],
			});
		}
	};

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">
						Close
					</Link>
					<div className="search-books-input-wrapper">
						<input
							onChange={(e) => this.search(e.target.value)}
							type="text"
							placeholder="Search by title or author"
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{this.state.showingBooks.map((book) => (
							<Book
								moveBook={this.props.moveBook}
								key={book.id}
								// id={book.id}
								// name={book.title}
								// img={book.imageLinks.thumbnail}
								// imgSmall={book.imageLinks.smallThumbnail}
								// author={book.authors}
								// shelf={book.shelf}
								book={book}
							/>
						))}
					</ol>
				</div>
			</div>
		);
	}
}

export default Search;
