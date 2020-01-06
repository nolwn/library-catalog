import * as express from "express";
import * as models from "../models/books";
import { IBook } from "../types";

// TODO: use query params to get "from" and "to".
export const getBooks: express.RequestHandler = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    let books: IBook[];
    if (req.query.datasource === "elastic") {
      books = await models.getBooks();
    } else {
      books = models.getBooksMock();
    }

    if (!books) {
      res.status(404);
    }
    res.status(200).send(books);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getBook: express.RequestHandler = (
  req: express.Request,
  res: express.Response
): void => {
  try {
    const book: IBook | null = models.getBook(req.params.id);
    if (!book) {
      res.status(404).send();
    } else {
      res.status(200).send(book);
    }
  } catch (err) {
    res.status(500).send();
  }
};

export const deleteBook: express.RequestHandler = (
  req: express.Request,
  res: express.Response
): void => {
  try {
    const book: IBook | null = models.deleteBook(req.params.id);
    if (!book) {
      res.status(404).send();
    } else {
      res.status(200).send(book);
    }
    res.status(200).send(book);
  } catch (err) {
    res.status(500).send();
  }
};

export const updateBook: express.RequestHandler = (
  req: express.Request,
  res: express.Response
): void => {
  try {
    const book: IBook | null = models.updateBook(req.body);
    console.log(book);
    console.log(req.body);
    if (!book) {
      res.status(404).send();
    } else {
      res.status(200).send(book);
    }
  } catch (err) {
    res.status(500).send();
  }
};
export const createBook: express.RequestHandler = (
  req: express.Request,
  res: express.Response
): void => {
  try {
    const bookId: string = models.createBook(req.body);
    if (!bookId) {
      res.status(404);
    }
    res.status(200).send(bookId);
  } catch (err) {
    res.status(500).send();
  }
};
