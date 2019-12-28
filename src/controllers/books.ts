import * as express from "express";
import * as models from "../models/books";
<<<<<<< HEAD
import { IBook, IPostBook } from "../types";
=======
import { IBook } from "../types";
>>>>>>> b8ee109457aa085849416d3c9fe7bbf40398a518

export const getBooks: express.RequestHandler = (req: express.Request, res: express.Response): void => {
    try {
        const books: IBook[] = models.getBooks();
        if (!books) {
            res.status(404);
        }
        res.status(200).send(books);
    } catch (err) {
        res.status(500).send();
    }
};

export const getBook: express.RequestHandler = (req: express.Request, res: express.Response): void => {
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

export const deleteBook: express.RequestHandler = (req: express.Request, res: express.Response): void => {
    try {
        const book: IBook | null = models.deleteBook(req.params.id);
        if (!book) {
            res.status(404).send();
        } else {
            res.status(200).send(book);
        }
<<<<<<< HEAD
        res.status(200).send(book);
=======
>>>>>>> b8ee109457aa085849416d3c9fe7bbf40398a518
    } catch (err) {
        res.status(500).send();
    }
};

export const createBook: express.RequestHandler = (req: express.Request, res: express.Response): void => {
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
