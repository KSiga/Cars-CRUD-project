const Car = require('./car');

class CarActions {

    async saveCar(req, res) {
        const brand = req.body.brand;
        const model = req.body.model;
        const color = req.body.color;
        const status = req.body.status;
        const cost = req.body.cost;
        const date = req.body.date;

        let car;

        try {
            car = new Car({
                brand: brand,
                model: model,
                color: color,
                status: status,
                cost: cost,
                date: date,
            });
            await car.save();
        } catch (err) {
            return res.status(422).json({ message: err.message });
        }
        res.status(201).json(car);
    }

    async getAllCars(req, res) {
        let cars;
        try {
            cars = await Car.find({});
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(200).json(cars);
    }

    async getCar(req, res) {
        const id = req.params.id;
        const car = await Car.findOne({ _id: id });
        res.status(200).json(car);
    }

    async updateCar(req, res) {
        const id = req.params.id;
        const brand = req.body.brand;
        const model = req.body.model;
        const color = req.body.color;
        const status = req.body.status;
        const cost = req.body.cost;
        const date = req.body.date;

        const car = await Car.findOne({ _id: id });

        car.brand = brand;
        car.model = model;
        car.color = color;
        car.status = status;
        car.cost = cost;
        car.date = date;

        await car.save();
        res.status(201).json(car);
    }

    async deleteCar(req, res) {
        const id = req.params.id;
        await Car.deleteOne({ _id: id });

        res.sendStatus(204);
    }
}

module.exports = new CarActions();