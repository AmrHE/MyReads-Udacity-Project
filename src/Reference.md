// //     Keep this file as a reference for my old code/functions

// // OLD FUNCTION BUT THERE WAS A PROBLEM WITH SEARCH COMPONENTS AS THE SEARCHED BOOKS DO NOT HAVE SHELFVES
// moveBook = async (b, shelf) => {
// 	// console.log({ id, shelf });
// 	let movedBook = this.state.books.find((book) => book.id === b.id);

// 	const removeFromShelf = (movedBook) => {
// 		if (movedBook && movedBook.shelf === "currentlyReading") {
// 			const index = this.state.currentlyReading.findIndex(
// 				(book) => book.id === b.id
// 			);

// 			const deletedItem = this.state.currentlyReading.splice(index, 1);

// 			this.setState({
// 				currentlyReading: this.state.currentlyReading,
// 			});

// 			// this.state.currentlyReading.map((book) => {
// 			// 	book.shelf = shelf;
// 			// 	return book;
// 			// });

// 			// console.log(this.state.currentlyReading);
// 			// console.log("Moved Book Shelf: ", movedBook.shelf);
// 		} else {
// 		}

// 		if (movedBook.shelf === "wantToRead") {
// 			const index = this.state.wantToRead.findIndex((book) => book.id === b.id);

// 			const deletedItem = this.state.wantToRead.splice(index, 1);

// 			this.setState({ wantToRead: this.state.wantToRead });

// 			// this.state.wantToRead.map((book) => {
// 			// 	book.shelf = shelf;
// 			// });

// 			// movedBook.shelf = shelf;
// 			// console.log(this.state.read);
// 			// console.log("Moved Book Shelf: ", movedBook.shelf);
// 		}

// 		if (movedBook.shelf === "read") {
// 			const index = this.state.read.findIndex((book) => book.id === b.id);

// 			const deletedItem = this.state.read.splice(index, 1);

// 			this.setState({ read: this.state.read });

// 			// this.state.read.map((book) => {
// 			// 	book.shelf = shelf;
// 			// });
// 			// console.log(this.state.read);
// 			// console.log("Moved Book Shelf: ", movedBook.shelf);
// 		}
// 	};

// 	if (
// 		shelf === "currentlyReading" &&
// 		!this.state.currentlyReading.includes(movedBook)
// 		// &&
// 		// shelf !== movedBook.shelf
// 	) {
// 		removeFromShelf(movedBook);
// 		await BooksAPI.update(movedBook, shelf);
// 	}

// 	if (shelf === "wantToRead" && !this.state.wantToRead.includes(movedBook)) {
// 		this.setState({
// 			wantToRead: [...this.state.wantToRead, movedBook],
// 		});
// 		removeFromShelf(movedBook);
// 		movedBook.shelf = shelf;
// 		await BooksAPI.update(movedBook, shelf);
// 	}

// 	if (shelf === "read" && !this.state.read.includes(movedBook)) {
// 		this.setState({
// 			read: [...this.state.read, movedBook],
// 		});
// 		removeFromShelf(movedBook);
// 		movedBook.shelf = shelf;
// 		await BooksAPI.update(movedBook, shelf);
// 	}

// 	// console.log("Moved Book New Shelf: ", movedBook.shelf);
// };

// try {
// 	if (
// 		shelf === "currentlyReading" &&
// 		foundBook.shelf &&
// 		!this.state.currentlyReading.includes(foundBook)
// 	) {
// 		this.setState({
// 			currentlyReading: [...this.state.currentlyReading, foundBook],
// 		});
// 		this.removeFromShelf(book, foundBook);
// 		foundBook.shelf = shelf;
// 	}
// } catch (error) {
// 	console.log("entered the else statement");
// 	this.setState({
// 		books: [...this.state.books, { ...book, shelf }],
// 	});
// }
// try {
// 	if (
// 		shelf === "wantToRead" &&
// 		foundBook.shelf &&
// 		!this.state.wantToRead.includes(foundBook)
// 	) {
// 		this.setState({
// 			wantToRead: [...this.state.wantToRead, foundBook],
// 		});
// 		this.removeFromShelf(book, foundBook);
// 		foundBook.shelf = shelf;
// 	}
// } catch (error) {
// 	console.log("entered the else statement");
// 	this.setState({
// 		books: [...this.state.books, { ...book, shelf }],
// 	});
// }
// try {
// 	if (
// 		shelf === "read" &&
// 		foundBook.shelf &&
// 		!this.state.read.includes(foundBook)
// 	) {
// 		this.setState({
// 			read: [...this.state.read, foundBook],
// 		});
// 		this.removeFromShelf(book, foundBook);
// 		foundBook.shelf = shelf;
// 	}
// } catch (error) {
// 	console.log("entered the else statement");
// 	this.setState({
// 		books: [...this.state.books, { ...book, shelf }],
// 	});
// }

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
		books: [...this.state.books, { ...book, shelf }],
	});
}
