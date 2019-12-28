import { Router } from "express";
import { deleteBook, getBook, getBooks, updateBook } from "../controllers/books";

export const bookRouter: Router = Router();

bookRouter.get("/", getBooks);
bookRouter.get("/:id", getBook);
bookRouter.delete("/:id", deleteBook);
bookRouter.put("/:id", updateBook)

// get getBook to retun a book from a json library

// use getBooks similarly
