import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  const handle = (params) => {
    
  }
  return (
    <div>
      <h1>Lobby</h1>
      <div>
        <input placeholder='Username' type='text' />
        <input placeholder='Room' type='text' />
        <button type='submit'>Sign In</button>
      </div>
    </div>
  );
};

export default Home;
