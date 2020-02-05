import React from 'react';
import AdditionalFeature from './AdditionalFeature';

import {connect} from "react-redux";

import {addFeature} from "../actions/index"







const AdditionalFeatures = props => {

  const buyItem = (item) => {
    // dipsatch an action here to add an item
    console.log(item)
    // debugger;
    if(props.features.find(fet=> fet.id ===item.id) ===undefined){
      props.addFeature(item)
    }
    
    
  };
  
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyItem={buyItem}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    additionalFeatures: state.additionalFeatures,
    features: state.car.features,
  }
}

export default connect(mapStatetoProps,{
  addFeature,
})(AdditionalFeatures);
