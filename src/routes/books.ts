import { Router } from "express";
<<<<<<< HEAD
import { getBooks, getBook, createBook } from "../controllers/books";
=======
import { deleteBook, getBook, getBooks } from "../controllers/books";
>>>>>>> b8ee109457aa085849416d3c9fe7bbf40398a518

export const bookRouter: Router = Router();

bookRouter.get("/", getBooks);
bookRouter.get("/:id", getBook);
<<<<<<< HEAD
bookRouter.post("/", createBook);
=======
bookRouter.delete("/:id", deleteBook);
>>>>>>> b8ee109457aa085849416d3c9fe7bbf40398a518

// get getBook to retun a book from a json library

// use getBooks similarly
