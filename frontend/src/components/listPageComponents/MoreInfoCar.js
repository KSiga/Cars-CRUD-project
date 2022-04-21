import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

function MoreInfoCar(props) {
    let data = useLocation();
    return (
        <div className='moreInfoCar'>
            <ul>
                <li>
                    <div>
                        <div className='name'><strong>Model:</strong></div>
                        <div className='value'>{data.state.model}</div>
                    </div>
                </li>
                <li>
                    <div>
                        <div className='name'><strong>Brand:</strong></div>
                        <div className='value'>{data.state.brand}</div>
                    </div>
                </li>
                <li>
                    <div>
                        <div className='name'><strong>Color:</strong></div>
                        <div className='value'>{data.state.color}</div>
                    </div>
                </li>
                <li>
                    <div>
                        <div className='name'><strong>Status:</strong></div>
                        <div className='value'>{String(data.state.status)}</div>
                    </div>
                </li>
                <li>
                    <div>
                        <div className='name'><strong>Cost:</strong></div>
                        <div className='value'>{data.state.cost}</div>
                    </div>
                </li>
                <li>
                    <div>
                        <div className='name'><strong>ID:</strong></div>
                        <div className='value'>{data.state._id}</div>
                    </div>
                </li>
                <li>
                    <div>
                        <div className='name'><strong>Data dodania:</strong></div>
                        <div className='value'>{data.state.date}</div>
                    </div>
                </li>
                <li>
                    <div>
                        <div className='name'><strong>Data zakończenia:</strong></div>
                        <div className='value'>{data.state.date}</div>
                    </div>
                </li>
            </ul>
            <Link to="/list" className='return'>Powrót</Link>
        </div>
    )
}

export default MoreInfoCar;