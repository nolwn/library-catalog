import { Router } from "express";
import { deleteBook, getBook, getBooks } from "../controllers/books";

export const bookRouter: Router = Router();

bookRouter.get("/", getBooks);
bookRouter.get("/:id", getBook);
bookRouter.delete("/:id", deleteBook);

// get getBook to retun a book from a json library

// use getBooks similarly
