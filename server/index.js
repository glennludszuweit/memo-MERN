import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

//mongodb+srv://gnglab:Jd7DJQZNYDrovhlP@memo-mern.obtqi.mongodb.net/<dbname>?retryWrites=true&w=majority
const MONGO_URL =
  'mongodb+srv://gnglab:Jd7DJQZNYDrovhlP@memo-mern.obtqi.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running at port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
