import React, { FC } from 'react';
import TextField from '@mui/material/TextField';
import { InputFieldProps } from './types';

const InputField: FC<InputFieldProps> = ({
  onChange,
  placeholder = '',
  customStyle,
}) => {
  return (
    <TextField
      label={placeholder}
      variant='filled'
      onChange={onChange}
      sx={customStyle}
      fullWidth
    />
  );
};

export default InputField;
