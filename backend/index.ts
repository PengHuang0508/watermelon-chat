import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import router from './router';
import { addUser, removeUser, getUser, getUserByRoom } from './handlers';

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.info('Connection established :)');

  socket.on('join', ({ username, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, username, room });
    if (error) {
      return callback && callback(error);
    }

    if (user) {
      socket.emit('message', {
        sender: 'Admin',
        text: `${username} , Welcome to ${room} :)`,
      });

      socket.broadcast.to(user.room).emit('message', {
        sender: 'Admin',
        text: `${username} has joined!`,
      });

      socket.join(user.room);

      callback && callback();

      io.to(user.room).emit('userList', {
        room: user.room,
        users: getUserByRoom(user.room),
      });
    }
  });

  socket.on('sendMessage', (message: string, callback) => {
    const user = getUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', {
        sender: user?.username,
        text: message,
      });

      io.to(user.room).emit('userList', {
        room: user.room,
        users: getUserByRoom(user.room),
      });
    }

    callback && callback();
  });

  socket.on('disconnect', () => {
    console.info('User disconnected :(');

    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', {
        user: 'Admin',
        text: `${user.username} has left.`,
      });
    }
  });
});

app.use(router);

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
