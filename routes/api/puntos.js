const express = require('express');
const router = express.Router();

const Point = require('../../models/punto');


router.get('/', async (req, res) => {
    const puntosDB = await Point.find({ code: 'L001I' });
    console.log(puntosDB);
    res.send(puntosDB)
});


module.exports = router;