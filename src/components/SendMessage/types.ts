export type SendMessageProps = {
  message: string;
  onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: (event: React.SyntheticEvent) => void;
};
