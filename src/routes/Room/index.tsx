import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import socket from 'src/sockets';
// MUI
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { RoomDrawer, Chat, SendMessage } from 'src/components';

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
  const { username = '' } = credentials;
  const [newMessage, setNewMessage] = useState<string>('');
  const [messages, setMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    socket.emit('join', credentials, () => {
      console.log('Joined room!');
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

  // // TODO: update type
  // const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
  //   return event.key === 'Enter' ? handleSendMessage() : null;
  // };

  const handleSendMessage = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (newMessage) {
      console.log('sending');
      // socket.emit('sendMessage', newMessage, () => setNewMessage(''));
      console.log({ newMessage });
    }
  };

  console.log({ messages });
  return (
    <Paper
      //  sx={styles.container}
      elevation={0}
      square
    >
      {/* <RoomDrawer /> */}

      <Chat messages={messages} username={username} />
      <SendMessage
        onInput={handleInput}
        // onKeyPress={handleKeyPress}
        onSend={handleSendMessage}
      />
    </Paper>
  );
};

export default Room;
