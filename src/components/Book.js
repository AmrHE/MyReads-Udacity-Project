import React from "react";
import PropTypes from "prop-types";

const Book = (props) => {
	// console.log(props);
	let { authors, name, img } = props.book;

	// let author;
	if (authors && authors.length === 1) {
		authors = props.book.authors;
	} else if (authors && authors.length > 1) {
		authors = props.book.authors.join(", ");
	} else {
		authors = "No Authors";
	}

	// let name;
	if (name) {
		name = props.book.title;
	} else {
		name = "";
	}

	// let img;
	if (props.book.imageLinks.thumbnail) {
		img = props.book.imageLinks.thumbnail;
	} else if (props.book.imageLinks.SmallThumbnail) {
		img = props.book.imageLinks.SmallThumbnail;
	} else {
		img = "No Preview Image Found";
	}

	return (
		<li>
			<div className="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage: `url("${img}")`,
						}}
					/>
					<div className="book-shelf-changer">
						<select
							value={props.book.shelf ? props.book.shelf : "none"}
							onChange={(e) => props.moveBook(props.book, e.target.value)}
						>
							<option value="move" disabled>
								Move to...
							</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title">{name}</div>
				<div className="book-authors">{authors}</div>
			</div>
		</li>
	);
};

Book.propTypes = {
	authors: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string,
	imageLinks: PropTypes.object,
	shelf: PropTypes.string,
	moveBook: PropTypes.func,
};

export default Book;
