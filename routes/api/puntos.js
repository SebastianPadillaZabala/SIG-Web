const express = require('express');
const router = express.Router();

const Punto = require('../../models/punto');
const Linea = require('../../models/linea');
const Recorrido = require('../../models/recorrido');
const PuntoFinal = require('../../models/puntoFinal');


//-------------LINEAS--------------------------
router.get('/all-lineas', async (req, res) => {
  var lineasDB = await Linea.find();
  res.json(lineasDB, 200);
})

router.get('/una-linea/:linea', async (req, res) => {
  const lineaP = req.params.linea;
  var lineaDB = await Linea.findOne({linea : lineaP});
  res.json(lineaDB, 200);
})

//---------------------------------RECORRIDOS-------------------------------
router.get('/all-recorridos', async (req, res) => {
  var recorridosDB = await Recorrido.find();
  res.json(recorridosDB);
})

router.get('/un-recorrido/:recorrido', async (req, res) => {
  const recorridoP = req.params.recorrido;
  var recorridoDB = await Recorrido.findOne({code : recorridoP});
  res.json(recorridoDB, 200);
})

//-------------------------------PUNTOS----------------------------------
router.get('/all-puntos', async (req, res) => {
  var puntosDB = await Punto.find();
  res.json(puntosDB, 200);
})

router.get('/puntos-code/:code', async (req, res) => {
  const codeP = req.params.code;
  var puntosDB = await Punto.find({code : codeP});
  res.json(puntosDB, 200);
})

//-------------------------PUNTOS FINAL-----------------------------
router.get('/all-puntosFinal', async (req, res) => {
  var puntosFinalDB = await PuntoFinal.find();
  res.json(puntosFinalDB, 200);
})

router.get('/puntosFinal-code/:code', async (req, res) => {
  const codeP = req.params.code;
  var puntosFinalDB = await PuntoFinal.find({code : codeP}).sort({orden: 1});;
  res.json(puntosFinalDB, 200);
})
















// router.post('/api/linea', function (req, res) {
//     const body = req.body;
//     console.log(req.body);
//       let lineaa = new Linea({
//         linea: body.linea,
//         direccion: body.direccion,
//         telefono: body.telefono,
//         mail: body.mail,
//         foto: body.foto,
//         descripcion: body.descripcion,
//     })
//       lineaa.save(function (err, lineadb) {
//         if (err) { return err }
//         res.status(201).json(lineadb)
//       })
//   })

//   router.post('/api/recorrido', function (req, res) {
//     const body = req.body;
//       let recoridoo = new Recorrido({
//         linea: body.linea,
//         code: body.code,
//         tiempo: body.tiempo,
//         distancia: body.distancia,
//         velocidad: body.velocidad,
//         color: body.color,
//         grosor: body.grosor,
//         descripcion: body.descripcion,
//     })
//       recoridoo.save(function (err, lineadb) {
//         if (err) { return err }
//         res.status(201).json(lineadb)
//       })
//   })

//   router.post('/api/punto', function (req, res) {
//     const body = req.body;
//       let puntos = new Punto({
//         code: body.code,
//         latitud: body.latitud,
//         longitud: body.longitud,
//         linea: body.linea,
//         orden: body.orden,
//     })
//       puntos.save(function (err, lineadb) {
//         if (err) { return err }
//         res.status(201).json(lineadb)
//       })
//   });



  module.exports = router;
