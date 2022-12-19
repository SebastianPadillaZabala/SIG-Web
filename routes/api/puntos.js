const express = require('express');
const router = express.Router();

const Point = require('../../models/punto');
const Linea = require('../../models/linea');
const Recorrido = require('../../models/recorrido');


router.get('/', async (req, res) => {
    const puntosDB = await Point.find({ code: 'L001I' });
    console.log(puntosDB);
    res.send(puntosDB)
});



router.post('/api/linea', function (req, res) {
    const body = req.body;
    console.log(req.body);
      let lineaa = new Linea({
        linea: body.linea,
        direccion: body.direccion,
        telefono: body.telefono,
        mail: body.mail,
        foto: body.foto,
        descripcion: body.descripcion,
    })
      lineaa.save(function (err, lineadb) {
        if (err) { return err }
        res.status(201).json(lineadb)
      })
  })

  router.post('/api/recorrido', function (req, res) {
    const body = req.body;
      let recoridoo = new Recorrido({
        linea: body.linea,
        code: body.code,
        tiempo: body.tiempo,
        distancia: body.distancia,
        velocidad: body.velocidad,
        color: body.color,
        grosor: body.grosor,
        descripcion: body.descripcion,
    })
      recoridoo.save(function (err, lineadb) {
        if (err) { return err }
        res.status(201).json(lineadb)
      })
  })

  router.post('/api/punto', function (req, res) {
    const body = req.body;
      let puntos = new Point({
        code: body.code,
        latitud: body.latitud,
        longitud: body.longitud,
        linea: body.linea,
        orden: body.orden,
    })
      puntos.save(function (err, lineadb) {
        if (err) { return err }
        res.status(201).json(lineadb)
      })
  })

  module.exports = router;
