<<<<<<< HEAD
import short from "short-uuid";
import * as data from "../books.json";
import { IBook, IPostBook } from "../types";

const books: IBook[] = data.books;
=======
import * as data from "../books.json"
import { IBook } from "../types"

let books: IBook[] = data.books;
>>>>>>> b8ee109457aa085849416d3c9fe7bbf40398a518

export const getBooks = (): IBook[] => {
    return books;
};

export const getBook = (id: string): IBook | null => {
<<<<<<< HEAD
    for (const book of books) {
        if (book.id === id)  {
            return book;
        }
    }
    return null;
};

export const createBook = (createdBook: IPostBook): string => {
    const id = short.uuid();
    const newBook = { id, ...createdBook };

    books.push(newBook);
    return id;
=======
    const found = books.find((book) => book.id === id);
    if (found === undefined) {
        return null;
    }
    return found;
};

export const deleteBook = (id: string): IBook | null => {
    let found = null;

    const newBooks = books.filter((book) => {
        if (book.id === id) {
            found = book;
            return false;
        }

        return true;
    });

    if (!found) {
        return null;
    }

    books = newBooks;
    return found;
>>>>>>> b8ee109457aa085849416d3c9fe7bbf40398a518
};
