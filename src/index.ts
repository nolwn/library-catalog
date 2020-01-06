import bodyParser from "body-parser";
import express from "express";
import { bookRouter } from "./routes/books";
import dotenv from "dotenv";
import morgan from "morgan";

const app: express.Express = express();
const port: number = 3000;

dotenv.config();

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/books", bookRouter);

app.listen(port, () => {
  console.log(`****---->>>> Listening on Port: ${port} <<<<----****`);
});
