import React from "react";
import CarItem from "./CarItem";

import {connect} from "react-redux";


const CarList = props => {
    return (
      <>
      {
        props.cars.map(car => {
          return <CarItem key={car.id} car ={car}/>
        })
      }
      
      </>
    );
  };
  
  const mapStatetoProps = state => {
    return {
      cars: state.cars,
    };
  };
  
  export default connect(mapStatetoProps, {
    
  })(CarList);
  