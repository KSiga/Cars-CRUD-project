import React, { useEffect, useState } from 'react';

function SearchCar(props) {
  // console.log(props.cars[1]);console.log(carsArray[0][1].brand);let carsArray = Object.values(props);
  let cars = [];

  for (let i = 0; i < props.cars.length; i++) {
    let singleCar = ({
      _id: props.cars[i]._id,
      brand: props.cars[i].brand,
      model: props.cars[i].model,
      color: props.cars[i].color,
      status: Boolean(props.cars[i].status),
      cost: Number(props.cars[i].cost),
      date: props.cars[i].date,
    })
    cars.push(singleCar);
  }

  const [searchTerm, setSearchTerm] = useState("");

  const handleChangeSearch = e => {
    const value = e.target.value;
    setSearchTerm(value);
  }

  const resultTest = cars.filter(car => car.brand.toLowerCase().includes(searchTerm));

  const searchButton = () => {
    props.onChange(resultTest);
  }

  return (
    <div>
      <p>Wyszukaj</p>
      <input className='inputSearch' type="text" value={searchTerm} onChange={handleChangeSearch} />
      <button onClick={() => searchButton()}>Szukaj</button>
      <ul>
        {resultTest.map(item => (
          <li>{item.brand}</li>
        ))}
      </ul>
    </div >
  )
}

export default SearchCar;
