import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import socket from 'src/sockets';
// MUI
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { RoomDrawer, Chat, SendMessage } from 'src/components';

import { indigo, lightBlue } from '@mui/material/colors';

import { SxStylesProps } from 'src/types';
type MessageProps = {
  sender: string;
  text: string;
};

type RoomCredentialProp = {
  username: string;
  room: string;
};

const Room = () => {
  const { state: credentials } = useLocation<RoomCredentialProp>();
  const { username = '', room } = credentials;
  const [newMessage, setNewMessage] = useState<string>('');
  const [messages, setMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    socket.emit('join', credentials, () => {
      console.info(`[System] User ${username} joined room ${room}`);
    });

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [credentials]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (newMessage) {
      socket.emit('sendMessage', newMessage, () => setNewMessage(''));
    }
  };

  return (
    <Paper sx={styles.container} elevation={0} square>
      {/* <RoomDrawer /> */}

      <Chat messages={messages} username={username} />
      <SendMessage
        message={newMessage}
        onInput={handleInput}
        onSend={handleSendMessage}
      />
    </Paper>
  );
};

export default Room;

const styles: SxStylesProps = {
  container: {
    height: '100vh',
    backgroundColor: lightBlue.A100,
  },
};
