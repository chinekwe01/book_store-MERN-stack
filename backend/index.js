import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY

// option 1: Allow all origins with default of cors(*)
// app.use(cors());

// option 2: Allow custom origins
app.use(cors(
    {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['content-type'],
    }
));
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to MERN Stack Tuts');
});

app.use('/books', booksRoute);
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening on ${PORT}`);
    });
    })
    .catch((error) => {
        console.log(error);
    });