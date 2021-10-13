import React, { FC } from 'react';
// MUI
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ChatMessage from './ChatMessage';
import { ChatProps } from './types';
import { SxStylesProps } from '../../types/index';

// TODO: delete later
const mock = [
  {
    sender: 'Bob',
    text: 'Happy accident',
  },
  {
    sender: 'Bob2',
    text: 'Happy accident2',
  },
  {
    sender: 'Bob3',
    text: 'Happy accident3',
  },
  {
    sender: 'Bob4',
    text: 'Happy accident4',
  },
  {
    sender: 'Bob5',
    text: 'Happy accident5',
  },
];

const Chat: FC<ChatProps> = ({ messages = mock, username = '' }) => {
  console.log({ chat: messages });
  return (
    <List sx={styles.container}>
      {/* {messages.map((message, index) => ( */}
      {mock.concat(messages).map((message, index) => (
        <ChatMessage
          key={`chat-message-${index}`}
          message={message}
          isSender={username === message.sender}
        />
      ))}
    </List>
  );
};

export default Chat;

const styles: SxStylesProps = {
  container: {
    maxHeight: 300,
    overflow: 'auto',
  },
};
