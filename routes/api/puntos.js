const express = require('express');
const router = express.Router();

const Point = require('../../models/punto');


router.get('/', async (req, res) => {
    const puntosDB = await Point.find({ code: 'L001I' });
    console.log(puntosDB);
    res.send(puntosDB)
});

router.post('/linea', )

router.post('/api/linea', function (req, res) {
    body = req.body
    let lineaa = new Linea({
        linea: body.linea,
        direccion: body.direccion,
        telefono: body.telefono,
        mail: body.mail,
        foto: body.foto,
        descripcion: body.descripcion,
    })
    lineaa.save(function (err, lineadb) {
      if (err) { return next(err) }
      res.json(201, lineadb)
    })
  })
