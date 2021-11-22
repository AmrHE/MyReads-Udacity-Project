import React, { Component } from "react";
import Book from "./Book";

class Shelf extends Component {
	render() {
		const books = this.props.books;
		// console.log(books.map((book) => book.id));

		return (
			<div className="list-books-content">
				<div>
					<div className="bookshelf">
						<h2 className="bookshelf-title">{this.props.title}</h2>
						<div className="bookshelf-books">
							<ol className="books-grid">
								{books.length > 0 &&
									books.map((book) => (
										<Book
											book={book}
											key={book.id}
											// id={book.id}
											// name={book.title}
											// img={book.imageLinks.thumbnail}
											// imgSmall={book.imageLinks.smallThumbnail}
											// author={book.authors}
											// shelf={book.shelf}
											moveBook={this.props.moveBook}
										/>
									))}
							</ol>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Shelf;
