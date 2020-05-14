import React from 'react';
import './App.css';
import NewYearCounter from './NewYearCounter';
import DateCounter from './DateCounter';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
        <ul>
          <li key='newyear'>
            <Link to="/NewYearCounter">NewYearCounter</Link>
          </li>
          <li key='date'>
            <Link to="/DateCounter">DateCounter</Link>
          </li>
        </ul>
        <Route exact path="/" component={NewYearCounter} />

        <Route path="/NewYearCounter" component={NewYearCounter} />

        <Route path="/DateCounter" component={DateCounter} />
      </Router>
    </div>
  );
};
export default App;
