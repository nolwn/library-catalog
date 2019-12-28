import * as data  from "../books.json"
import { Book } from "../types"

const books: Book[] = data.books;

export const getBooks = (): Book[] => {
    return books;
};

<<<<<<< HEAD
export const getBook = (): Book => {
    return books[0];
};

export const createBook = (createdBook: Book): Book => {
    books.push(createdBook);
    return createdBook
=======
export const getBook = (id: string): Book | null => {
    for (const book of books) {
        if (book.id === id) return book;
    }
    return null;
>>>>>>> 9b57e3696c4fba545da3fdf01123699539ab6d08
};