type UserProps = {
  id: string;
  username: string;
  room: string;
};

type UsersProps = UserProps[];

let users: UsersProps = [];

// TODO: move to utils
const sanitizeString = (str: string) => {
  return str.trim().toLowerCase();
};

const addUser = ({ id, username, room }: UserProps) => {
  const sanitizedUsername = sanitizeString(username);
  const sanitizedRoom = sanitizeString(room);

  const isExistingUser = users.find(
    (user) => user.username === sanitizedUsername && user.room === sanitizedRoom
  );

  if (isExistingUser) {
    return { error: 'Username already taken in the room' };
  }

  const newUser = {
    id,
    username: sanitizedUsername,
    room: sanitizedRoom,
  };

  users.push(newUser);

  return { user };
};

const removeUser = (id: string) => {
  const targetUserIndex = users.findIndex((user) => user.id === id);

  if (targetUserIndex !== -1) {
    return users.slice(targetUserIndex, 1)[0];
  }
};

const getUser = (id: string) => users.find((user) => user.id === id);

const getUserByRoom = (room: string) =>
  users.filter((user) => user.room === room);

export { addUser, removeUser, getUser, getUserByRoom };
