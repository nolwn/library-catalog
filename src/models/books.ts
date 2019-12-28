import * as data  from "../books.json"
import { Book } from "../types"

const books: Book[] = data.books;

export const getBooks = (): string[] => {
    return [ "Moby Dick", "Jane Eyre", "20,000 Leagues Under the Sea" ];
};

export const getBook = (id: string): Book | null => {
    for (const book of books) {
        if (book.id === id) return book;
    }
    return null;
};