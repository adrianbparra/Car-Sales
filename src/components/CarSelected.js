import React from 'react';
import {connect} from "react-redux";
import AddedFeatures from './AddedFeatures';
import { useParams } from 'react-router-dom';



const CarSelected = props => {

    let {id} = useParams();

    console.log(id);

    const selectedCar = props.cars.filter(car=> {
      console.log(typeof id)
      if(car.id === Number(id)){
        return car
      }
      // return id === car.id 
    })

    console.log(selectedCar)

    const {name,image, price, features} = selectedCar[0];


  return (
    <div className="box">
      <figure className="image is-128x128">
        <img src={image} alt={name} />
      </figure>
      <h1 className="title">{name}</h1>
      <p>Amount: ${price}</p>
      {/* <AddedFeatures /> */}
      <div className="content">
        <h3>Features:</h3>
        <ol>
          {features.map(feat =>{
            return <li>{feat.name}</li>
          })}
        </ol>
      </div>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    cars : state.cars,
  };
};

export default connect(mapStatetoProps, {

})(CarSelected);
