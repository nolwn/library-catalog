import * as data from "../books.json"
import { IBook } from "../types"

let books: IBook[] = data.books;

export const getBooks = (): IBook[] => {
    return books;
};

export const getBook = (id: string): IBook | null => {
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
};

export const updateBook = (id: string): IBook | null => {
    const found = getBook(id);
    //FIXME expand with body
    return found;
};
