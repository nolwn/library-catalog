import { Router } from "express";
import { getBooks, getBook } from "../controllers/books";

export const bookRouter: Router = Router();

bookRouter.get("/", getBooks);
bookRouter.get("/", getBook)

// get getBook to retun a book from a json library

// use getBooks similarly
