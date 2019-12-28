import short from "short-uuid";
import * as data from "../books.json";
import { IBook, IPostBook } from "../types";

const books: IBook[] = data.books;

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
    const id = short.uuid();
    const newBook = { id, ...createdBook };

    books.push(newBook);
    return id;
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
    return found;
};

export const updateBook = (id: string): IBook | null => {
    const found = getBook(id);
    //FIXME expand with body
    return found;
};
