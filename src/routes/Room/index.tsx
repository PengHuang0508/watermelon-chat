import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import socket from 'src/sockets';
import Button from '@mui/material/Button';

type MessageProps = {
  sender: string;
  text: string;
};

const Room = () => {
  const { state: credentials } = useLocation();
  const [input, setInput] = useState<string>('');
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
    setInput(event.target.value);
  };

  // TODO: update type
  const handleKeyPress = (event: any) => {
    event.preventDefault();
    return event.key === 'Enter' ? handleSendMessage() : null;
  };

  const handleSendMessage = () => {
    if (input) {
      console.log('sending');
      socket.emit('sendMessage', input, () => setInput(''));
    }
  };

  console.log({ messages });
  return (
    <div>
      Room here
      <div>
        <input
          onChange={handleInput}
          type='text'
          onKeyPress={(event) =>
            event.key === 'Enter' ? handleSendMessage : null
          }
        />
      </div>
      <Button onClick={handleSendMessage}>Send</Button>
    </div>
  );
};

export default Room;
