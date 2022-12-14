import express from 'express';

import { dbConnect } from './db';
import { userRouter } from './routes/user';
import { cardSetRouter } from './routes/cardSet';

import { corsSetup } from './utils/corsSetup';

const app = express();
const port = process.env.PORT;

dbConnect();

app.use(express.static('client/build'));
app.use(express.json());
app.use(corsSetup());

app.use([userRouter, cardSetRouter]);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
