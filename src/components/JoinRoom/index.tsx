import React, { FC } from 'react';
// MUI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputField from 'src/components/InputField';
import Typography from '@mui/material/Typography';
// Styles
import { grey } from '@mui/material/colors';
// Types
import { JoinRoomProps } from './types';
import { SxStylesProps } from 'src/types';

const JoinRoom: FC<JoinRoomProps> = ({
  handleNameChange,
  handleRoomChange,
  handleJoin,
}) => {
  return (
    <Box
      sx={styles.container}
      component='form'
      maxWidth='lg'
      autoComplete='off'
      onSubmit={handleJoin}
      noValidate
    >
      <Container sx={styles.headerContainer}>
        <Typography sx={styles.title} variant='h5'>
          Summer, Friends, and Watermelons!
        </Typography>
        <Typography sx={styles.subtitle} variant='subtitle1'>
          Let's talk about it.
        </Typography>
      </Container>

      <Container sx={styles.inputFieldWrapper}>
        <InputField
          placeholder='USERNAME'
          onChange={handleNameChange}
          customStyle={styles.inputField}
        />
        <InputField
          placeholder='ROOM'
          onChange={handleRoomChange}
          customStyle={styles.inputField}
        />
      </Container>

      <Container sx={styles.joinBtnWrapper}>
        <Button
          sx={styles.joinBtn}
          variant='contained'
          color='secondary'
          type='submit'
          fullWidth
        >
          JOIN
        </Button>
      </Container>
    </Box>
  );
};

export default JoinRoom;

const styles: SxStylesProps = {
  container: {
    height: '33%',
    minHeight: 300,
    display: 'flex',
    flexDirection: 'column',
    p: 5,
    backgroundColor: grey[800],
    backgroundSize: 'cover',
    borderRadius: 3,
    boxShadow: 10,
  },
  headerContainer: {
    mb: 2,
  },
  title: {
    color: grey[100],
    fontWeight: 'bold',
  },
  subtitle: {
    color: grey[300],
  },
  inputFieldWrapper: {
    mb: 1,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  inputField: {
    mb: 3,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  joinBtnWrapper: {
    display: 'grid',
    flex: 1,
    placeItems: 'center',
  },
};
