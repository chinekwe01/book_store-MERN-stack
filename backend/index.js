import express from "express";
import { PORT } from "./config.js";

const app = express();

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Welcome to MERN Stack Tuts');
});

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});