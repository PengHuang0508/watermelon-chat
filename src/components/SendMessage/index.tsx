import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { common, lightBlue } from '@mui/material/colors';
import { SxStylesProps } from 'src/types';
import { SendMessageProps } from './types';
import { SEND_MESSAGE_BAR_HEIGHT } from 'src/assets/constants';

const SendMessage: FC<SendMessageProps> = ({ message, onInput, onSend }) => {
  return (
    <Box
      sx={styles.container}
      component='form'
      noValidate
      autoComplete='off'
      onSubmit={onSend}
      position='fixed'
      bottom={0}
    >
      <TextField
        sx={styles.inputField}
        value={message}
        onChange={onInput}
        placeholder='Type here'
        fullWidth
      />
      <Button
        sx={styles.btn}
        type='submit'
        color='secondary'
        variant='contained'
      >
        SEND
      </Button>
    </Box>
  );
};

export default SendMessage;

const styles: SxStylesProps = {
  container: {
    width: '100%',
    height: SEND_MESSAGE_BAR_HEIGHT,
    display: 'flex',
    alignItems: 'center',
    py: 2,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: lightBlue[50],
  },
  inputField: {
    flex: 1,
    mx: 2,
  },
  btn: {
    height: '50%',
    mr: 2,
    color: common.white,
  },
};
