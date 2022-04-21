import React from 'react';
import { Link } from 'react-router-dom';

function FilteredCar(props) {

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
            <div className='carAllInfo'>
                <div className='carPicture'></div>
                <div className='carInformation'>
                    <div className='carId'>{props._id}</div>
                    <h3>
                        <Link
                            to={`/list/${props._id}`}
                            state={{
                                model: props.model,
                                brand: props.brand,
                                color: props.color,
                                status: Boolean(props.status),
                                cost: Number(props.cost),
                                _id: Number(props._id),
                                date: props.date,
                            }}
                        >{props.model}</Link>
                    </h3>
                    <small>Stan:</small> {props.brand} <small>Kolor:</small> {props.color} <small>Status:</small> {String(props.status)} <br />
                    <strong>{props.cost} zł</strong><br />

                    <small>Data dodania:</small> {props.date} <br />
                    <small>Data zakończenia:</small> {props.date}

                </div>
            </div>
            <div className='carButtons'>
                <button onClick={editHandler}>E</button>
                <button onClick={() => props.onDelete(props.id)}>X</button>
            </div>
        </div >
    )
}

export default FilteredCar;