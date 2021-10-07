import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputField from 'src/components/InputField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import bgImg from 'src/assets/images/join_background.jpg';
import { common } from '@mui/material/colors';
import { SxStylesProps } from 'src/types';

type JoinRoomProps = {
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRoomChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleJoin: () => void;
};

const JoinRoom: FC<JoinRoomProps> = ({
  handleNameChange,
  handleRoomChange,
  handleJoin,
}) => {
  const welcomeDict = ['Welcome', '你好', '안녕'];
  const randomWelcome =
    welcomeDict[Math.floor(Math.random() * welcomeDict.length)];

  return (
    <Box maxWidth='lg' sx={styles.container}>
      <Typography sx={styles.title} variant='h3' align='center' gutterBottom>
        {randomWelcome}
      </Typography>

      <Container sx={styles.inputFieldWrapper}>
        <InputField
          placeholder='Username'
          onChange={handleNameChange}
          customStyle={styles.inputField}
        />
      </Container>

      <Container sx={styles.inputFieldWrapper}>
        <InputField
          placeholder='Room'
          onChange={handleRoomChange}
          customStyle={styles.inputField}
        />
      </Container>

      <Container sx={styles.joinBtnWrapper}>
        <Button
          sx={styles.joinBtn}
          onClick={handleJoin}
          variant='contained'
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
    display: 'flex',
    flexDirection: 'column',
    p: 5,

    backgroundColor: 'rgba(255, 255, 255, 0.33)',
    // backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    borderRadius: 3,
    boxShadow: 10,
  },
  title: {
    mb: 3,
    // color: common.white,
    color: '#007944',
    // color: '#71a95a',
    fontWeight: 'bold',
  },
  inputFieldWrapper: {
    mb: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  inputField: {
    // backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  joinBtnWrapper: {
    flex: 1,
    // backgroundColor: 'green',
    // display: 'flex',
    // alignItems: 'flex-end',
    // justifyContent: 'center',
    display: 'grid',
    placeItems: 'center',
  },
  joinBtn: {
    backgroundColor: '#71a95a',
  },
};
