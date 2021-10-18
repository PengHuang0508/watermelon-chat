import React, { FC, useRef, useEffect } from 'react';
// MUI
import List from '@mui/material/List';
import ChatMessage from './ChatMessage';
// types
import { SxStylesProps } from 'src/types';
import { ChatProps } from './types';
// constants
import { SEND_MESSAGE_BAR_HEIGHT } from 'src/assets/constants';
import Typography from '@mui/material/Typography';

const mock = [
  { sender: 'vincent', text: 'vincent , Welcome to js :)' },
  { sender: 'vincent', text: 'vincent' },
  {
    sender: 'Admin3',
    text: 'vincentvincent , Welcome to js :)vincent , Welcome to js :)',
  },
];
const Chat: FC<ChatProps> = ({ messages = [], username = '' }) => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <List sx={styles.container}>
      {messages.map((message, index) => (
        <ChatMessage
          key={`chat-message-${index}`}
          message={message}
          isSender={username === message.sender}
        />
      ))}
      <div ref={messagesEndRef} />
    </List>
  );
};

export default Chat;

const styles: SxStylesProps = {
  container: {
    height: '100%',
    maxHeight: `calc(100% - ${SEND_MESSAGE_BAR_HEIGHT}px)`,
    overflow: 'auto',
  },
};
