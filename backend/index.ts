import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import router from './router';
import { addUser, removeUser, getUser, getUserByRoom } from 'handlers/users';

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('Connection established :)');

  socket.on('join', ({ username, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, username, room });
    if (error) {
      console.log({ error });
      // return callback(error);
    }

    socket.emit('systemMessage', {
      user: 'Admin',
      text: `${username} , Welcome to ${room} :)`,
    });

    socket.broadcast.to(user.room).emit('systemMessage', {
      user: 'Admin',
      text: `${username} has joined!`,
    });

    socket.join(user.room);

    callback();
  });

  socket.on('message', () => {});

  socket.on('disconnect', () => {
    console.log('User disconnected :(');
  });
});

app.use(router);

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
