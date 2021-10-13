import React, { FC } from 'react';
import TextField from '@mui/material/TextField';
import { InputFieldProps } from './types';
import { grey } from '@mui/material/colors';

const InputField: FC<InputFieldProps> = ({
  onChange,
  placeholder = '',
  customStyle,
}) => {
  return (
    <TextField
      sx={customStyle}
      label={placeholder}
      onChange={onChange}
      variant='filled'
      color='secondary'
      fullWidth
      InputProps={{
        style: {
          color: grey[200],
        },
      }}
      InputLabelProps={{
        style: {
          color: grey[400],
        },
      }}
    />
  );
};

export default InputField;
