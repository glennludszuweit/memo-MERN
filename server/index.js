import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postsRoutes from './Routes/posts.js';
import usersRoutes from './Routes/users.js';

const app = express();

//MIDDLEWARES
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

//ROUTES
app.use('/posts', postsRoutes);
app.use('/users', usersRoutes);

//DB and Server
const MONGO_URL =
  'mongodb+srv://gnglab:Jd7DJQZNYDrovhlP@memo-mern.obtqi.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
