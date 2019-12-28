import { Router } from "express";
import { getBooks } from "../controllers/books";

export const bookRouter: Router = Router();

bookRouter.get("/", getBooks);
