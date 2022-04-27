import React, { useState } from 'react';

function EditCar(props) {

    const [brand, setBrand] = useState(props.brand);
    const [model, setModel] = useState(props.model);
    const [color, setColor] = useState(props.color);
    const [status, setStatus] = useState(Number(props.status));
    const [cost, setCost] = useState(props.cost);

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

    const changeCostHandler = e => {
        const value = e.target.value;
        setCost(value);
    }

    const toggleStatus = () => {
        setStatus(prev => !prev);
    }

    const toggleCancel = () => {
        props.onCancel();
    }

    const editCar = () => {
        const car = {
            brand: brand,
            model: model,
            color: color,
            status: Boolean(status),
            cost: Number(cost),
            date: props.date,
            _id: props._id,
        }

        const validation = props.onValidation(car);
        if (validation) {
            props.onEdit(car);
        } else {
            return;
        }
    }

    return (
        <div className='modal'>
            <label>Brand:</label>
            <input id="brandEdit" value={brand} onChange={changeBrandHandler} type="text" maxLength="16" />
            <label>Model:</label>
            <input id="modelEdit" value={model} onChange={changeModelHandler} type="text" maxLength="16" />
            <label>Color:</label>
            <input id="colorEdit" value={color} onChange={changeColorHandler} type="text" />
            <label>Cost:</label>
            <input id="costEdit" value={cost} onChange={changeCostHandler} type="number" />
            <div className='checkboxContainer'>
                <input id="statusEdit" value={status} onChange={toggleStatus}
                    type="checkbox" className='checkbox' checked={status} /> <br />
                <span>Status</span>
            </div>
            <div className='modalButtons'>
                <button className="buttonEdit" onClick={() => editCar()}>Aktualizuj</button>
                <button className="buttonCancel" onClick={() => toggleCancel()}>X</button>
            </div>
        </div >
    )
}

export default EditCar;