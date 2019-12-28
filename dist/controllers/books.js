"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var models = __importStar(require("../models/books"));
exports.getBooks = function (req, res, next) {
    try {
        var books = models.getBooks();
        if (!books) {
            res.status(404);
        }
        res.status(200).send(books);
    }
    catch (err) {
        res.status(500).send();
    }
};
//# sourceMappingURL=books.js.map