import { Router } from "express";
import { getBooks, getBook, createBook } from "../controllers/books";

export const bookRouter: Router = Router();

bookRouter.get("/", getBooks);
bookRouter.get("/", getBook);
bookRouter.post("/", createBook);

// get getBook to retun a book from a json library

// use getBooks similarly
