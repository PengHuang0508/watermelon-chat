import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import { JoinRoom } from 'src/components';
import debounce from 'lodash.debounce';
import Paper from '@mui/material/Paper';
import bgImg from 'src/assets/images/home_background.jpg';

const Home = () => {
  const history = useHistory();

  const [username, setUsername] = useState<string>('');
  const [room, setRoom] = useState<string>('');

  const handleNameChange = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
    },
    250
  );

  const handleRoomChange = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRoom(event.target.value);
    },
    250
  );

  const handleJoin = () => {
    console.log("let's join");
    // if (!username.trim())  {

    // }
    // history.push({
    //   pathname: '/room',
    //   state: {username, room},
    // });
  };

  useEffect(() => {
    console.log({ username, room });
  }, [username, room]);

  return (
    <Paper sx={styles.container} elevation={0} square>
      <JoinRoom
        handleNameChange={handleNameChange}
        handleRoomChange={handleRoomChange}
        handleJoin={handleJoin}
      />
    </Paper>
  );
};

export default Home;

const styles = {
  container: {
    height: '100vh',
    display: 'grid',
    placeItems: 'center',
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
  },
};
