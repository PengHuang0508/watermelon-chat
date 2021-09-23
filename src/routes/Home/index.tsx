import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

type CredentialsProps = {
  username: string | null;
  room: string | null;
};

const Home = () => {
  const history = useHistory();
  const [credentials, setCredentials] = useState<CredentialsProps>({
    username: null,
    room: null,
  });

  // TODO: change after finish typing debounce
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      username: event.target.value,
    });
  };

  const handleRoomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      room: event.target.value,
    });
  };

  const handleJoin = () => {
    console.log("let's join");
    history.push({
      pathname: '/room',
      state: credentials,
    });
  };
  useEffect(() => {
    console.log({ credentials });
  }, [credentials]);

  return (
    <div>
      <h1>Lobby</h1>
      <div>
        <input placeholder='Username' type='text' onChange={handleNameChange} />
        <input placeholder='Room' type='text' onChange={handleRoomChange} />
        <button type='submit'>Sign In</button>
      </div>
      <Button variant='contained' onClick={handleJoin}>
        JOIN
      </Button>
    </div>
  );
};

export default Home;
