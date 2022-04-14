import React from 'react';
import { Component } from 'react';
import Car from '../components/listPageComponents/Car';
import EditCar from '../components/listPageComponents/EditCar';
import AddCar from '../components/listPageComponents/AddCar';
import SortCar from '../components/listPageComponents/SortCar';
import SearchCar from '../components/listPageComponents/SearchCar';
import FilteredCar from '../components/listPageComponents/FilteredCar';
import Modal from 'react-modal';

import '../style/listPage/editCar.css';
import '../style/listPage/addCar.css';
import '../style/listPage/sortCar.css';
import '../style/listPage/moreInfoCar.css';
import '../style/listPage/searchCar.css';

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

class ListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [
                {
                    _id: 0, brand: 'fiat', model: '500 Cabrio', color: 'red', status: true, cost: '10',
                    date: '2022-02-24'
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
            ],
            showModal: false,
            editCar: {},
            carsFiltered: [],
        }
    }

    carAdd = (car) => {
        const cars = [...this.state.cars];
        cars.unshift(car); // dodaje element na początek tablicy (push() na koniec)
        this.setState({ cars });
    }

    carEdit(car) {
        const cars = [...this.state.cars];
        const index = cars.findIndex(index => index._id === car._id);
        if (index >= 0) {
            cars[index] = car;
            this.setState({ cars });
        }
        this.toggleModal();
    }

    carDelete = _id => {
        let cars = [...this.state.cars];
        let carsFiltered = [...this.state.carsFiltered]
        cars = cars.filter(car => car._id !== _id);
        carsFiltered = carsFiltered.filter(car => car._id !== _id);
        this.setState({ cars });
        this.setState({ carsFiltered });
    }

    toggleModal() {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    carEditHandler(car) {
        this.toggleModal();
        this.setState({ editCar: car });
    }

    carShowSorted(cars) {
        this.setState({ cars });
    }

    carChangeSearch(cars) {
        console.log(cars);
        this.setState({ carsFiltered: cars });
        console.log(this.state.carsFiltered);
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

        const carListFiltered = this.state.carsFiltered.map(car => (
            <FilteredCar key={car._id} {...car}
                onDelete={() => this.carDelete(car._id)}
                onEdit={(car) => this.carEditHandler(car)}
            />
        ))

        const carList = this.state.cars.map(car => (
            <Car key={car._id} {...car}
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
                            cars={this.state.cars}
                            onSort={car => this.carShowSorted(car)}
                        />
                    </div>
                    <div className='searchCarComponent'>
                        <SearchCar
                            cars={[...this.state.cars]}
                            onChange={(cars) => this.carChangeSearch(cars)}
                        />
                    </div>
                </div>

                <div className='listPageRight'>
                    <div className='sortPanel'>
                    </div>
                    {carList}
                    {carListFiltered}
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