import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import socket from 'src/sockets';

const Room = () => {
  const { state: credentials } = useLocation();

  useEffect(() => {
    console.log({ credentials });
    socket.emit('join', credentials);
    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [credentials]);

  return <div>Room here</div>;
};

export default Room;
