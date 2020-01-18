const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./src/routes');

mongoose.set('useCreateIndex', true);
mongoose.connect(
  'mongodb+srv://omnistack:omnistack@cluster0-jplms.mongodb.net/week10?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// MongoDB (Não-Relacional)
// Métodos HTTP: get, post, put, delete




app.use(express.json());
app.use(routes);

app.listen(3333);