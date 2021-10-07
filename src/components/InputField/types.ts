import { SxStyleProps } from 'src/types';

export type InputFieldProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  customStyle?: SxStyleProps;
};
