import short from "short-uuid";
import * as data from "../books.json";
import { IBook, IPostBook } from "../types";
import { Client, ApiResponse, RequestParams } from "@elastic/elasticsearch";
import { SearchResponse } from "elasticsearch";

let books: IBook[] = data.books;

export const getBooks = async (from: number = 0, size: number = 25) => {
  const client = new Client({ node: "http://localhost:9200" });
  const query: RequestParams.Search = {
    index: "library",
    body: { from, size }
  };

  const { body }: ApiResponse = await client.search(query);
  return body.hits.hits.map(
    (record: any): IBook => {
      console.log(record);
      return record._source as IBook;
    }
  );
};

export const getBooksMock = (): IBook[] => {
  return books;
};

export const getBook = (id: string): IBook | null => {
  for (const book of books) {
    if (book.id === id) {
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

  books = books.filter(book => {
    if (book.id === id) {
      found = book;
      return false;
    }

    return true;
  });

  return found;
};

export const updateBook = (newBook: IBook): IBook | null => {
  let found: null | IBook = null;
  const newBooks: IBook[] = books.map(book => {
    if (book.id === newBook.id) {
      found = newBook;
      return newBook;
    }
    return book;
  });
  books = newBooks;

  return found;
};
