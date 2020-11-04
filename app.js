import express from 'express';
import mongoose from 'mongoose';
import { accountRouter } from './routes/accountRouter.js';

(async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://igti:123@cluster0.x3ekc.mongodb.net/accounts?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.log('Erro ao conectar no MongoDB');
  }
})();

const app = express();

app.use(express.json());
app.use(accountRouter);

app.listen(3000, () => console.log('API Iniciada'));
