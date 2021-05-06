import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import { port } from "./types"

dotenv.config()

const app: Application = express();
const PORT: port  = 42069;

app.get("/", (req: Request, res: Response) => {
    res.status(200).send(`API is running in ${process.env.NODE_ENV} mode `);
    //Shut up about not being used
    req;
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})
