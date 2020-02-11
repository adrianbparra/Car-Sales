import React from 'react';
import {connect} from "react-redux";

import {Link} from "react-router-dom";

const CarItem = props => {
  console.log(props)
  return (
    <div className="box">
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <Link to={`${props.car.id}`}  className="button">Select</Link>
      <h1>{props.car.name}</h1>
      <p>Amount: ${props.car.price}</p>

      <h1>Additional Features</h1>

      {props.car.features.map(feat=> <p key={feat.id}>{feat.name}</p>)}

    </div>
  );
};

const mapStatetoProps = state => {
  return {
    
  };
};

export default connect(mapStatetoProps, {

})(CarItem);
