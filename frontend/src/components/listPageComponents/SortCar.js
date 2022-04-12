import React, { useState } from 'react';

function SortCar(props) {

    const [selectedOption, setSelectedOption] = useState('');
    const cars = props.cars;

    const sortByDate = method => {
        if (method === 'newest') {
            cars.sort((a, b) => {
                if (a.date < b.date) return 1
                if (a.date > b.date) return -1
                return 0;
            })
        }
        else if (method === 'oldest') {
            cars.sort((a, b) => {
                if (a.date > b.date) return 1
                if (a.date < b.date) return -1
                return 0;
            })
        } else return;
        props.onSort(cars);
    }

    const sortById = method => {
        if (method === 'highest') {
            cars.sort((a, b) => {
                if (a._id < b._id) return 1
                if (a._id > b._id) return -1
                return 0;
            })
        }
        else if (method === 'lowest') {
            cars.sort((a, b) => {
                if (a._id > b._id) return 1
                if (a._id < b._id) return -1
                return 0;
            })
        } else return;
        props.onSort(cars);
    }

    const sortByCost = method => {
        if (method === 'highest') {
            cars.sort((a, b) => {
                if (a.cost < b.cost) return 1
                if (a.cost > b.cost) return -1
                return 0;
            })
        }
        else if (method === 'lowest') {
            cars.sort((a, b) => {
                if (a.cost > b.cost) return 1
                if (a.cost < b.cost) return -1
                return 0;
            })
        }
        else return;
        props.onSort(cars);
    }

    const sortByStatus = method => {
        if (method === 'true') {
            cars.sort((a, b) => {
                if (a.status < b.status) return 1
                if (a.status > b.status) return -1
                return 0;
            })
        }
        else if (method === 'false') {
            cars.sort((a, b) => {
                if (a.status > b.status) return 1
                if (a.status < b.status) return -1
                return 0;
            })
        } else return;
        props.onSort(cars);
    }

    const selectOption = e => {
        setSelectedOption(e.target.value);
        if (e.target.value === 'byNewestDate') sortByDate('newest');
        if (e.target.value === 'byOldestDate') sortByDate('oldest');
        if (e.target.value === 'byHighestId') sortById('highest');
        if (e.target.value === 'byLowestId') sortById('lowest');
        if (e.target.value === 'byHighestCost') sortByCost('highest');
        if (e.target.value === 'byLowestCost') sortByCost('lowest');
        if (e.target.value === 'byTrueStatus') sortByStatus('true');
        if (e.target.value === 'byFalseStatus') sortByStatus('false');
    }

    return (
        <div>
            <p>sortuj elementy: </p>
            <select id='sortOptions' value={selectedOption} onChange={selectOption}>
                <option id='default' value="default">-</option>
                <option value="byHighestId">id: najwyższe</option>
                <option value="byLowestId">id: najniższe</option>
                <option value="byNewestDate">data: najnowsza</option>
                <option value="byOldestDate">data: najstarsza</option>
                <option value="byHighestCost">Cena: najwyższa</option>
                <option value="byLowestCost">Cena: najniższa</option>
                <option value="byTrueStatus">Status: true</option>
                <option value="byFalseStatus">Status: false</option>
            </select>
        </div>
    )
}

export default SortCar;