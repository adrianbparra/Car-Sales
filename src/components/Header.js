import React from 'react';
import {connect} from "react-redux";
import AddedFeatures from './AddedFeatures';



const Header = props => {
  return (
    <div className="box">
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
      <AddedFeatures />
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    car : state.car,
  };
};

export default connect(mapStatetoProps, {

})(Header);
