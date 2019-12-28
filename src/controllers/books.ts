import * as express from "express";
import * as models from "../models/books";

export const getBooks: express.RequestHandler = (req: express.Request, res: express.Response): void => {
    try {
        const books: string[] = models.getBooks();
        if (!books) {
            res.status(404);
        }
        res.status(200).send(books);
    } catch(err) {
        res.status(500).send();
    }
};