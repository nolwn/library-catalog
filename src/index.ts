import express from "express";
import { bookRouter } from "./routes/books";
// import bodyParser from "body-parser";

const app: express.Express = express();
const port: number = 3000;

// app.use(bodyParser);
app.use("/books", bookRouter);

app.listen(port);