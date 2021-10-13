export type MessageProps = {
  sender: string;
  text: string;
};

export type ChatProps = {
  messages: MessageProps[];
  username?: string;
};

export type ChatMessageProps = {
  message: MessageProps;
  isSender?: Boolean;
};
