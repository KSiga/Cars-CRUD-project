import React from 'react';

function ShowCar(props) {

    const editHandler = () => {
        const editCar = ({
            model: props.model,
            brand: props.brand,
            color: props.color,
            status: Boolean(props.status),
            cost: Number(props.cost),
            _id: Number(props._id),
            date: props.date,
        })
        props.onEdit(editCar);
    }

    return (
        <div className='carList'>
            <div className='carInformation'>
                {props.model} {props.brand} {props.color} {String(props.status)} {props.cost} id: {props._id}
                _data: {props.date}
            </div>
            <div className='carButtons'>
                <button onClick={editHandler}>E</button>
                <button onClick={() => props.onDelete(props.id)}>X</button>
            </div>
        </div>
    )
}

export default ShowCar;