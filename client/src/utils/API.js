import axios from "axios"

export default {
    // get multiple books from google search 
    getGoogleSearchBooks: function(book) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book)
    },

    // get all books
    getBooks: function () {
        return axios.get("/api/books");
    },

    // Gets the book with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },

    // saves a book to the db
    saveBook: function (savedBooks) {
        return axios.post("/api/books", savedBooks);
    },

    // deletes the book with specific id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }

}