import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const Shelf = (props) => {
	// if (props.length > 0) {
	// 	console.log(props);
	// }
	const { books } = props;
	console.log(books);

	return (
		<div className="list-books-content">
			<div>
				<div className="bookshelf">
					<h2 className="bookshelf-title">{props.title}</h2>
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
										moveBook={props.moveBook}
									/>
								))}
						</ol>
					</div>
				</div>
			</div>
		</div>
	);
};

Shelf.propTypes = {
	books: PropTypes.arrayOf(PropTypes.object),
	movedBook: PropTypes.func,
};

export default Shelf;
