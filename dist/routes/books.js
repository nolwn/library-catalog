"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var books_1 = require("../controllers/books");
exports.bookRouter = express_1.Router();
exports.bookRouter.get("/", books_1.getBooks);
//# sourceMappingURL=books.js.map