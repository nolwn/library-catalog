import * as data  from "../books.json"
import { Book } from "../types"

const books: Book[] = data.books;

export const getBooks = (): Book[] => {
    return books;
};

export const getBook = (id: string): Book | null => {
    for (const book of books) {
        if (book.id === id) return book;
    }
    return null;
};