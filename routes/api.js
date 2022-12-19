require('dotenv').config();
const { Router, response } = require('express');
//const request = require('request');
const router = Router();


router.get('/', async (req, res) => {
    const puntosDB = await Point.find({ code: 'L001I' });
    console.log(puntosDB);
    res.send(puntosDB)
});