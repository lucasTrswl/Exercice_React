import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EXERCICE1 from './EXERCICE1/EXERCICE1';
import EXERCICE2 from './EXERCICE2/EXERCICE2';
import EXERCICE4 from './EXERCICE4/EXERCICE4';



function App() {
  return (
    <div className="App">
      {/* <EXERCICE1/>
      <EXERCICE2/> */}
      <EXERCICE4/>
    </div>
  );
}

export default App;
