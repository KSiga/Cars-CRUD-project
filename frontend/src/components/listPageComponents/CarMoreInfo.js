import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

function CarMoreInfo(props) {
    let data = useLocation();
    return (
        <div className='moreInfoCar'>
            <p>{data.state.model}</p>
            <p>{data.state.brand}</p>
            <p>{data.state.color}</p>
            <p>{data.state.status}</p>
            <p>{data.state.cost}</p>
            <p>{data.state._id}</p>
            <p>{data.state.date}</p>
            <Link to="/list">Powrót</Link>
        </div>
    )
}

export default CarMoreInfo;