import React, { useState } from 'react';

function SortCar(props) {

    const [selectedOption, setSelectedOption] = useState('');
    const cars = props.cars;

    const sortByDate = (method, textOption) => {
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
        props.onSort(cars, textOption);
    }

    const sortById = (method, textOption) => {
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
        props.onSort(cars, textOption);
    }

    const sortByCost = (method, textOption) => {
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
        props.onSort(cars, textOption);
    }

    const sortByStatus = (method, textOption) => {
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
        props.onSort(cars, textOption);
    }

    const selectOption = e => {
        setSelectedOption(e.target.value);
        let index = e.nativeEvent.target.selectedIndex; // wyszukanie indeksu wybrane elementu z select
        let textOption = e.target[index].innerText;
        if (e.target.value === 'byNewestDate') sortByDate('newest', textOption);
        if (e.target.value === 'byOldestDate') sortByDate('oldest', textOption);
        if (e.target.value === 'byHighestId') sortById('highest', textOption);
        if (e.target.value === 'byLowestId') sortById('lowest', textOption);
        if (e.target.value === 'byHighestCost') sortByCost('highest', textOption);
        if (e.target.value === 'byLowestCost') sortByCost('lowest', textOption);
        if (e.target.value === 'byTrueStatus') sortByStatus('true', textOption);
        if (e.target.value === 'byFalseStatus') sortByStatus('false', textOption);
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