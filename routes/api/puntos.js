const express = require('express');
const router = express.Router();

const Point = require('../../models/punto');
const Linea = require('../../models/linea');


router.get('/', async (req, res) => {
    const puntosDB = await Point.find({ code: 'L001I' });
    console.log(puntosDB);
    res.send(puntosDB)
});

router.get('/linea', async (req, res) => {
  const puntosDB = await Linea.find({ linea: 'L001' });
  console.log(puntosDB);
  res.send(puntosDB)
});

//router.post('/linea', )

router.post('/api/linea', function (req, res) {
    var body = req.body
    console.log(body);
    var newLinea = new Linea({
        linea: body.linea,
        direccion: body.direccion,
        telefono: body.telefono,
        mail: body.mail,
        foto: body.foto,
        descripcion: body.descripcion,
    })
    newLinea.save(function (err, lineaResult) {
      if (err) { return next(err) }
      res.status(201).json(lineaResult);
    })
  })


module.exports = router;
