import { Router } from "express";
import {
  createBook,
  deleteBook,
  getBook,
  getBooks,
  updateBook
} from "../controllers/books";

export const bookRouter: Router = Router();

bookRouter.get("/", getBooks);
bookRouter.get("/:id", getBook);
bookRouter.post("/", createBook);
bookRouter.delete("/:id", deleteBook);
bookRouter.put("/", updateBook);
