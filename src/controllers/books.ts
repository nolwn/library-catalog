import * as express from "express";
import * as models from "../models/books";
import { IBook } from "../types";

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
        res.status(200).send(book);
    } catch (err) {
        res.status(500).send();
    }
};

export const updateBook: express.RequestHandler = (req: express.Request, res: express.Response): void => {
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
