import React from "react";
import PropTypes from "prop-types";

const Book = (props) => {
	console.log(props);
	let author;
	try {
		author = props.book.authors;
	} catch (error) {
		author = "No Authors";
	}

	let name;
	try {
		name = props.book.title;
	} catch (error) {
		name = "";
	}

	let img;
	try {
		img = props.book.imageLinks.thumbnail;
	} catch (error) {
		try {
			img = props.book.imageLinks.SmallThumbnail;
		} catch (error) {
			img = "No Preview Image Found";
		}
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
				<div className="book-authors">{author}</div>
			</div>
		</li>
	);
};

export default Book;
