import React from 'react';
import Food from './Food';
import Nav from './Nav';
import Routes from './Routes'

import './App.css';

function App() {
  return (
    <div className="App">

      <Nav />
      <Routes/>

{/* 
      <Route path="/food/burrito">
      <Food name="burrito"/>
      </Route>

      <Route path="/food/salad">
      <Food name="salad"/>
      </Route>

      <Route path="/food/sushi">
      <Food name="sushi"/>
      </Route>

      <Route path="/food/pasta">
      <Food name="pasta"/>
      </Route> */}


    
    </div>
  );
}

export default App;
