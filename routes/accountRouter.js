import express from 'express';
import { accountModel } from '../models/accountModel.js';

const app = express();

//CREATE
app.post('/account', async (req, res) => {
  try {
    const account = new accountModel(req.body);

    await account.save();
    res.send(account);
  } catch (error) {
    res.status(500).send(error);
  }
});

//RETRIEVE
app.get('/account', async (req, res) => {
  try {
    const account = await accountModel.find({});
    res.send(account);
  } catch (error) {
    res.status(500).send(error);
  }
});

//PATCH
app.patch('account/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const account = accountModel.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send(account);
  } catch (error) {
    res.status(500).send(error);
  }
});

//DELETE
app.delete('/account/:id', async (req, res) => {
  try {
    const account = accountModel.findByIdAndDelete({ _id: req.params.id });
    if (!account) {
      res.status(404).send('Documento não encontrado.');
    } else {
      res.status(200).send();
    }
  } catch (error) {
    res.status(500).send(error);
  }
});
export { app as accountRouter };
