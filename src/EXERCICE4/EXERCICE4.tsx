// NavigationTabs.tsx
import React from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EXERCICE1 from '../EXERCICE1/EXERCICE1';
import EXERCICE2 from '../EXERCICE2/EXERCICE2';


const Home: React.FC = () => <div>Home </div>;


const NavigationTabs: React.FC = () => {
  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/EXERCICE1">EXERCICE 1</Link>
            </li>
            <li>
              <Link to="/EXERCICE2">EXERCICE 2</Link>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/EXERCICE1" element={<EXERCICE1 />} />
          <Route path="/EXERCICE2" element={<EXERCICE2 />} />
          
        </Routes>
      </Router>
  );
};

export default NavigationTabs;
