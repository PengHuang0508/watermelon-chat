import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Room } from 'src/routes';
import withNavBar from './routes/withNavBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './assets/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Route path='/' exact component={withNavBar(Home)} />
      <Route path='/room' component={withNavBar(Room)} />
    </Router>
  </ThemeProvider>
);

export default App;
