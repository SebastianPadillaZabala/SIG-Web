const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const Point = require('./models/Point.js');


mongoose.connect('mongodb+srv://heidyolmos:sig2022@clustersig.pe3jfya.mongodb.net/proyectoSIG')
    .then(db => console.log('DB is connceted'))
    .catch(err => console.error(err));

app.get('/', async (req, res) =>  {
    const puntosDB = await Point.find({ code: 'L001I' });
    console.log(puntosDB);
  res.send(puntosDB)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log('http://localhost:3000');
})
