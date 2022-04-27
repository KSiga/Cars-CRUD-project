import React, { createElement } from 'react';
import { Component } from 'react';
import Car from '../components/listPageComponents/Car';
import EditCar from '../components/listPageComponents/EditCar';
import AddCar from '../components/listPageComponents/AddCar';
import SortCar from '../components/listPageComponents/SortCar';
import SearchCar from '../components/listPageComponents/SearchCar';
import FilteredCar from '../components/listPageComponents/FilteredCar';
import Modal from 'react-modal';
import axios from 'axios';

import '../style/listPage/car.css';
import '../style/listPage/editCar.css';
import '../style/listPage/addCar.css';
import '../style/listPage/sortCar.css';
import '../style/listPage/moreInfoCar.css';
import '../style/listPage/searchCar.css';
import '../style/listPage/loginPage.css';
import '../style/listPage/loggedAdmin.css';

const customStyles = { // style dla Modala
    content: {
        display: 'block',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '24%',
        height: '56vh',
        borderRadius: '30px',
        border: '2px solid rgb(73, 73, 73)',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'grey',
    },
};

let carsInitial = [
    {
        _id: 0, brand: 'fiat', model: '500 Cabrio', color: 'red', status: true, cost: '10',
        date: '2022-02-24',
    },
    {
        _id: 1, brand: 'citroen', model: 'Berlingo', color: 'white', status: true, cost: '70',
        date: '2022-03-12',
    },
    {
        _id: 2, brand: 'fiat', model: 'Panda Sport', color: 'blue', status: true, cost: '30',
        date: '2022-03-18',
    },
    {
        _id: 3, brand: 'audi', model: 'A4', color: 'black', status: false, cost: '50',
        date: '2022-03-25',
    },
    {
        _id: 4, brand: 'citroen', model: 'C4', color: 'black', status: false, cost: '90',
        date: '2022-04-06',
    },
    {
        _id: 5, brand: 'Kia', model: 'Ceed', color: 'white', status: false, cost: '60',
        date: '2022-04-08',
    },
];

class ListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [],
            carsFiltered: [],
            showModal: false,
            editCar: {},
        }
    }

    componentDidMount() {
        this.fetchCars();
    }

    async fetchCars() {
        const res = await axios.get('http://localhost:3001/api/cars');
        const cars = res.data;

        this.setState({ cars });
        this.setState({ carsFiltered: cars });
    }

    async carAdd(car) {
        const cars = [...this.state.cars];
        // backend
        const res = await axios.post('http://localhost:3001/api/cars', car);
        const newCar = res.data;
        // frontend
        cars.unshift(newCar); // dodaje element na początek tablicy (push() na koniec)
        this.setState({ cars });
        this.setState({ carsFiltered: cars });
    }

    async carEdit(car) {
        await axios.put('http://localhost:3001/api/cars/' + car._id, car);
        // cars
        const cars = [...this.state.cars];
        console.log(cars);
        const index = cars.findIndex(index => index._id === car._id);
        if (index >= 0) {
            cars[index] = car;
            this.setState({ cars });
        }
        // carsFiltered
        const carsFiltered = [...this.state.carsFiltered];
        const indexFiltered = carsFiltered.findIndex(index => index._id === car._id);
        if (indexFiltered >= 0) {
            carsFiltered[indexFiltered] = car;
            this.setState({ carsFiltered });
        }
        //--------
        this.toggleModal();
    }

    carEditHandler(car) {
        this.toggleModal();
        this.setState({ editCar: car });
    }

    checkCarLength = (cars) => {
        let carListError = document.querySelector('.carListError');
        if (cars.length === 0) {
            if (!Boolean(carListError)) {
                let divCarListError = document.createElement('div');
                divCarListError.classList.add('carListError');
                divCarListError.innerText = 'Brak wyników wyszukiwania';
                let listPageRight = document.querySelector('.listPageRight');
                listPageRight.appendChild(divCarListError);
            }
        }
        if (carListError && cars.length > 0) {
            carListError.parentNode.removeChild(carListError);
        }
    }

    async carDelete(_id) {
        await axios.delete('http://localhost:3001/api/cars/' + _id);
        // cars
        let cars = [...this.state.cars];
        cars = cars.filter(car => car._id !== _id);
        this.setState({ cars });
        // carsFiltered
        let carsFiltered = [...this.state.carsFiltered];
        carsFiltered = carsFiltered.filter(car => car._id !== _id);
        this.setState({ carsFiltered });
        // ---
        this.checkCarLength(carsFiltered);
    }

    toggleModal() {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    carShowSorted(cars, textOption) {
        let sortInfoPanel = document.querySelector('.sortInfo');
        sortInfoPanel.innerText = `Sortowanie: ${textOption}`;
        this.setState({ carsFiltered: cars });
    }

    carChangeSearch(cars, searchTerm) {
        let searchInfoPanel = document.querySelector('.searchInfo');
        if (!searchTerm.trim()) { // jeśli w wyszukiwarce są same spacje
            searchInfoPanel.innerText = `Wyszukiwana fraza: ...`;
            if (searchTerm === '') {  // jeśli nie ma nic
                searchInfoPanel.innerText = `Wszystkie wyniki...`;
            }
        } else { // jeśli jest jakaś wyszukiwana wartość
            searchInfoPanel.innerText = `Wyszukiwana fraza: ${searchTerm}`;
        }
        this.checkCarLength(cars);
        this.setState({ carsFiltered: cars });
    }

    carValidation = (car) => {
        // console.log(new Date().toISOString().slice(0, 10));
        let brandCorrect = true;
        let modelCorrect = true;
        let colorCorrect = true;
        let costCorrect = true;

        const messages = ({
            brandIncorrect: 'Nie podano marki',
            modelIncorrect: 'Nie podano modelu',
            colorIncorrect: 'Nie podano koloru',
            costIncorrect: 'Nie podano kosztu',
        })

        if (car.brand === '') {
            brandCorrect = false;
        }
        if (car.model === '') {
            modelCorrect = false;
        }
        if (car.color === '') {
            colorCorrect = false;
        }

        if (car.cost === '' || car.cost === 0) {
            costCorrect = false;
        }

        const alert = document.createElement('div');
        const listPageWrapper = document.querySelector('.listPageWrapper');

        if (brandCorrect && modelCorrect && colorCorrect && costCorrect) {
            alert.classList.add('correctAlert');

            alert.innerHTML += `Marka: ${car.brand}<br/>`;
            alert.innerHTML += `Model: ${car.model}<br/>`;
            alert.innerHTML += `Kolor: ${car.color}<br/>`;
            alert.innerHTML += `Koszt: ${car.cost}$<br/>`;
            const status = car.status ? `aktywny` : `nieaktywny`;
            alert.innerHTML += `Status: ${status}`;

            listPageWrapper.appendChild(alert);

            setTimeout(() => {
                alert.parentNode.removeChild(alert);
            }, 1700);

            return true;
        } else {
            alert.classList.add('errorAlert');

            if (!brandCorrect) alert.innerHTML += `${messages.brandIncorrect}<br/>`;
            if (!modelCorrect) alert.innerHTML += `${messages.modelIncorrect}<br/>`;
            if (!colorCorrect) alert.innerHTML += `${messages.colorIncorrect}<br/>`;
            if (!costCorrect) alert.innerHTML += `${messages.costIncorrect}<br/>`;

            listPageWrapper.appendChild(alert);

            setTimeout(() => {
                alert.parentNode.removeChild(alert);
            }, 2000);

            return false;
        }
    }

    render() {
        let carList = this.state.carsFiltered.map(car => (
            <FilteredCar key={car._id} {...car}
                onDelete={() => this.carDelete(car._id)}
                onEdit={(car) => this.carEditHandler(car)}
            />
        ))

        return (
            <div className='listPageWrapper'>
                <div className='listPageLeft'>
                    <div className='addCarForm'>
                        <AddCar
                            cars={this.state.cars}
                            onAdd={car => this.carAdd(car)}
                            onValidation={car => this.carValidation(car)}
                        />
                    </div>
                    <div className='sortCarComponent'>
                        <SortCar
                            cars={this.state.carsFiltered}
                            onSort={(cars, textOption) => this.carShowSorted(cars, textOption)}
                        />
                    </div>
                    <div className='searchCarComponent'>
                        <SearchCar
                            cars={[...this.state.cars]}
                            onChange={(cars, searchTerm) => this.carChangeSearch(cars, searchTerm)}
                        />
                    </div>
                </div>

                <div className='listPageRight'>
                    <div className='infoPanel'>
                        <div className='sortInfo'>
                        </div>
                        <div className='searchInfo'>
                        </div>
                    </div>
                    {carList}
                    <Modal
                        isOpen={this.state.showModal}
                        style={customStyles}
                        contentLabel="Edytuj wybrane auto"
                        ariaHideApp={false}
                    >
                        <EditCar
                            {...this.state.editCar}
                            onEdit={car => this.carEdit(car)}
                            onCancel={() => this.toggleModal()}
                            onValidation={car => this.carValidation(car)}
                        />
                    </Modal>
                </div>
            </div>
        )
    }
}

export default ListPage;