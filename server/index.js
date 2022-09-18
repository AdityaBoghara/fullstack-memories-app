// import express from "express";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from 'dotenv';
// import postRoutes from "./routes/posts.js";

// const app = express();

// dotenv.config()
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

// app.use("/posts", postRoutes);

// app.get('/', (req, res) =>
// {
//   res.send('Hello to Memories API')
// })
// // //connecting it to database (mongodb)
// // /* this will help us to create a cluster, that will act like our online cloud database.*/

// const CONNECTION_URL =
//   'mongodb+srv://admin:admin123@cluster0.zleun.mongodb.net/?retryWrites=true&w=majority';
// const PORT = process.env.PORT || 8000;

// mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
//   .catch((error) => console.log(`${error} did not connect`));


// const db = mongoose.connection;
// db.on("error", console.error.bind(console, 'connection error: '));
// db.once("open", function () {
//   console.log('Connected successfully');
// });

// mongoose.set('useFindAndModify', false); // to make sure we dont get any warning in console
// app.get('/', function (req, res) {
//     res.send('Hello World');
//  })


import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL =
  'mongodb+srv://adityaboghara:8244@cluster0.mtk0y.mongodb.net/cluster0?retryWrites=true&w=majority';
const PORT = process.env.PORT || 8000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);