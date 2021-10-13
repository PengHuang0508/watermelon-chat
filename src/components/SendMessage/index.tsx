import React from 'react';
import Button from '@mui/material/Button';

const SendMessage = () => {
  const handleSend = () => {};
  return (
    <div>
      <input
        // onChange={handleInput}
        type='text'
        // onKeyPress={(event) =>
        //   event.key === 'Enter' ? handleSendMessage : null
        // }
      />
      <Button onClick={handleSend}>Send</Button>
    </div>
  );
};

export default SendMessage;
