import React, { FC } from 'react';
// MUI
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
// Utils
import { capitalizeFirstLetter } from 'src/utils';
// Types
import { ChatMessageProps } from './types';
import { SxStylesProps } from 'src/types';
import { grey } from '@mui/material/colors';

//{sender: 'Admin', text: 'vincent , Welcome to js :)'}

const ChatMessage: FC<ChatMessageProps> = ({ message, isSender = false }) => {
  const { sender = '', text = '' } = message;
  const nameToDisplay = capitalizeFirstLetter(sender);

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>{sender[0].toUpperCase()}</Avatar>
      </ListItemAvatar>
      <ListItemText
        sx={styles.textWrapper}
        primary={nameToDisplay}
        secondary={text}
        secondaryTypographyProps={{ sx: styles.msg }}
      />
    </ListItem>
  );
};

export default ChatMessage;

const styles: SxStylesProps = {
  textWrapper: {},
  msg: {
    p: 1,
    backgroundColor: grey[400],
    borderRadius: 3,
  },
};
