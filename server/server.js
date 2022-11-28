const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://equipo_web:Apol0@apolo.0zbl8bs.mongodb.net/Site?retryWrites=true&w=majority'
  )
  .then(() => console.log('Connected to db'));

mongoose.set('debug', true);
const Paquete = require('./models/paquete.model');

const cors = require('cors');

app.use(cors());

app.get('/api/paquetes', async (req, res) => {
  allPaquetes = await Paquete.find();
  console.log(allPaquetes);
  res.json(allPaquetes);
});

app.listen(5005, () => console.log('Server up!'));
