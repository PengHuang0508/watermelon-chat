import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { SxStylesProps } from 'src/types';
import { SendMessageProps } from './types';

const SendMessage: FC<SendMessageProps> = ({ onInput, onSend }) => {
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
        placeholder='Type here'
        onChange={onInput}
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
    display: 'flex',
    alignItems: 'center',
    pb: 2,
  },
  inputField: {
    mx: 2,
  },
  btn: {
    mx: 1,
    height: '50%',
  },
};
