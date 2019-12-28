import short from "short-uuid";
import * as data from "../books.json";
import { IBook, IPostBook } from "../types";

let books: IBook[] = data.books;

export const getBooks = (): IBook[] => {
    return books;
};

export const getBook = (id: string): IBook | null => {
    for (const book of books) {
        if (book.id === id)  {
            return book;
        }
    }
    return null;
};

export const createBook = (createdBook: IPostBook): string => {
    const id: string = short.uuid();
    const newBook: IBook = { id, ...createdBook };

    books.push(newBook);
    return id;
};

export const deleteBook = (id: string): IBook | null => {
    let found = null;

    books = books.filter((book) => {
        if (book.id === id) {
            found = book;
            return false;
        }

        return true;
    });

    return found;
};

export const updateBook = (newBook: IBook): IBook | null => {
    books.forEach((book) => {
        if (book.id === newBook.id) {
            book = newBook;
            return book;
        }
    });

    return null;
};
