import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Room } from './routes';

const App = () => (
  <Router>
    <Route path='/' exact component={Home} />
    <Route path='/room' component={Room} />
  </Router>
);

export default App;
