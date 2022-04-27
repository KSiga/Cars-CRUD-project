const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
})

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;


/*
    {
        _id: 0, brand: 'fiat', model: '500 Cabrio', color: 'red', status: true, cost: '10',
        date: '2022-02-24',
    },
*/