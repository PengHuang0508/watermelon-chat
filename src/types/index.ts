import { SxProps } from '@mui/system';
import { Theme } from '@mui/material';

export type SxStyleProps = SxProps<Theme>;
export type SxStylesProps = {
  [key: string]: SxStyleProps;
};
