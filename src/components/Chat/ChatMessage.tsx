import React, { FC } from 'react';
// MUI
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
// Utils
import { capitalizeFirstLetter } from 'src/utils';
// Types
import { ChatMessageProps } from './types';
import { SxStylesProps } from 'src/types';
import { common, grey, blue } from '@mui/material/colors';

const ChatMessage: FC<ChatMessageProps> = ({ message, isSender = false }) => {
  const { sender = '', text = '' } = message;
  const nameToDisplay = isSender ? '' : capitalizeFirstLetter(sender);

  return (
    <ListItem>
      {!isSender && (
        <ListItemAvatar>
          <Avatar>{sender[0].toUpperCase()}</Avatar>
        </ListItemAvatar>
      )}

      <ListItemText
        sx={isSender ? styles.userMsgWrapper : styles.msgWrapper}
        primary={nameToDisplay}
        primaryTypographyProps={{
          sx: styles.usernameTxt,
        }}
        secondary={text}
        secondaryTypographyProps={{
          sx: isSender ? styles.userMsg : styles.msg,
        }}
      />
    </ListItem>
  );
};

export default ChatMessage;

const styles: SxStylesProps = {
  msgWrapper: {
    flex: '0 1 100%',
  },
  userMsgWrapper: {
    flex: '0 1 100%',
    textAlign: 'right',
  },
  usernameTxt: {
    fontWeight: 'bold',
    color: grey[800],
  },
  msg: {
    display: 'inline-block',
    p: 1.5,
    color: common.black,
    backgroundColor: grey[50],
    borderRadius: 3,
    borderTopLeftRadius: 0,
  },
  userMsg: {
    display: 'inline-block',
    p: 1.5,
    color: common.white,
    backgroundColor: blue[800],
    borderRadius: 3,
    borderBottomRightRadius: 0,
  },
};
