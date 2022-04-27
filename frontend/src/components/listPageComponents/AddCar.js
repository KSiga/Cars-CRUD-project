import React, { useState } from 'react';

function AddCar(props) {

    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [color, setColor] = useState('');
    const [status, setStatus] = useState(false);
    const [cost, setCost] = useState('');
    const [showForm, setShowForm] = useState(false);

    const changeBrandHandler = e => {
        const value = e.target.value;
        setBrand(value);
    }
    const changeModelHandler = e => {
        const value = e.target.value;
        setModel(value);
    }
    const changeColorHandler = e => {
        const value = e.target.value;
        setColor(value);
    }
    const changeStatusHandler = () => {
        setStatus(prev => !prev);
    }
    const changeCostHandler = e => {
        const value = e.target.value;
        setCost(value);
    }

    const resetInputs = () => {
        setBrand('');
        setModel('');
        setColor('');
        setStatus(false);
        setCost('');
    }


    const addCar = () => {
        const car = ({
            //  _id: props.cars.length,
            brand: brand,
            model: model,
            color: color,
            status: Boolean(status),
            cost: Number(cost),
            date: new Date().toISOString().slice(0, 10),
        })

        const validation = props.onValidation(car);

        if (validation) {
            props.onAdd(car);
            resetInputs();
            setShowForm(prev => !prev);
            if (showForm) {
                const addCarForm = document.querySelector('.addCarForm');
                addCarForm.classList.remove('active');
            }
        } else {
            return;
        }
    }

    const cancelAddCar = () => {
        resetInputs();
        setShowForm(prev => !prev);
        if (showForm) {
            const addCarForm = document.querySelector('.addCarForm');
            addCarForm.classList.remove('active');
        }
    }

    const toggleAddForm = () => {
        setShowForm(prev => !prev);
        if (!showForm) {
            const addCarForm = document.querySelector('.addCarForm');
            addCarForm.classList.add('active');
        }
    }

    const blockInvalidChar = e => ['e', 'E', '+', '-', '.'].includes(e.key) && e.preventDefault();

    return (
        showForm ? (
            <div className='formAddCar'>
                <label> Brand: </label>
                <input type='text' maxLength="16" value={brand} onChange={changeBrandHandler} />
                <label> Model: </label>
                <input type='text' maxLength="16" value={model} onChange={changeModelHandler} />
                <label> Color: </label>
                <input type='text' maxLength="16" value={color} onChange={changeColorHandler} />
                <label> Cost: </label>
                <input id='costInput' onKeyDown={blockInvalidChar} type='number' value={cost} onChange={changeCostHandler} />
                <div className='checkboxContainer'>
                    <input type='checkbox' checked={status} onChange={changeStatusHandler} />
                    <span>Status</span>
                </div>
                <div className='addCarButtons'>
                    <button className='addButton' onClick={() => addCar()}>Dodaj</button>
                    <button className='cancelButton' onClick={() => cancelAddCar()}>X</button>
                </div>
            </div>
        ) : (
            <button className='buttonShowForm' onClick={() => toggleAddForm()}>Dodaj nowe auto</button>
        )
    )
}

export default AddCar;
