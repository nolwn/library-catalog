import bodyParser from "body-parser";
import express from "express";
import { bookRouter } from "./routes/books";

const app: express.Express = express();
const port: number = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/books", bookRouter);

<<<<<<< HEAD
app.listen(port);
=======
app.listen(port, () => { console.log(`****---->>>> Listening on Port: ${port} <<<<----****`); });
>>>>>>> da13560ac18e160458bd7d452e1f97d1718b4689
