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
    const found = books.find((book) => book.id === id);
    if (!found) {
        return null;
    }
    const newBooks = books.filter((book) => book.id !== id);
    books = newBooks;
    return found;
};
