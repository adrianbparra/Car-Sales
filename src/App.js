import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import CarList from "./components/CarList";
import CarSelected from './components/CarSelected';

//Router
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"


const App = () => {

  
  

  return (
    <Router>
      <div className="boxes">
        <>
          {/* <Header/> */}
        </>
        {/* <div className="box"> */}
          {/* <AdditionalFeatures/> */}
          {/* <Total/> */}
        {/* </div> */}



        <Switch>
          <Route exact path="/" component={CarList} />
          <Route path="/:id" component={CarSelected} />
        </Switch>
      </div>


    </Router>

    
  );
};

export default App;
