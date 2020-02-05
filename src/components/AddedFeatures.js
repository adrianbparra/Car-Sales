import React from 'react';

import AddedFeature from './AddedFeature';

import {connect} from "react-redux";

import {removeFeature} from "../actions/index";





const AddedFeatures = props => {

  const handleRemoveFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item)
  };

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature key={item.id} feature={item} handleRemoveFeature={handleRemoveFeature}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    features: state.car.features,

  }
}

export default connect(mapStatetoProps, {
  removeFeature,
})(AddedFeatures);
