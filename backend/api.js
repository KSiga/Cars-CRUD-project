const express = require('express');
const router = express.Router();

const carActions = require('./carActions');

router.get('/cars', carActions.getAllCars); // pobieranie notatek
router.get('/cars/:id', carActions.getCar); // pobieranie notatki
router.post('/cars', carActions.saveCar); // zapisywanie
router.put('/cars/:id', carActions.updateCar); // edycja
router.delete('/cars/:id', carActions.deleteCar); // usuwanie

module.exports = router;