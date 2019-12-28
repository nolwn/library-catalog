import * as data  from "../books.json"
import { Book } from "../types"

const books: Book[] = data.books;

export const getBooks = (): string[] => {
    return [ "Moby Dick", "Jane Eyre", "20,000 Leagues Under the Sea" ];
};

export const getBook = (): Book => {
    return books[0];
};

export const createBook = (createdBook: Book): Book => {
    books.push(createdBook);
    return createdBook
};