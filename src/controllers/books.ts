import * as express from "express";
import * as models from "../models/books";
import { Book } from "../types"

export const getBooks: express.RequestHandler = (req: express.Request, res: express.Response): void => {
    try {
        const books: Book[] = models.getBooks();
        if (!books) {
            res.status(404);
        }
        res.status(200).send(books);
    } catch(err) {
        res.status(500).send();
    }
};

export const getBook: express.RequestHandler = (req: express.Request, res: express.Response): void => {
    try {
        const book: Book | null = models.getBook(req.params.id);
        if (!book) {
            res.status(404);
        }
        res.status(200).send(book);
    } catch(err) {
        res.status(500).send();
    }
};