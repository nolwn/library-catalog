import express from "express";
import { bookRouter } from "./routes/books";
// import bodyParser from "body-parser";

const app = express();
const port = 3000;

// app.use(bodyParser);
app.use("/books", bookRouter);

app.listen(port);
