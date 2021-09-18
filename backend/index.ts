import express from 'express';
import { Server } from 'socket.io';
import http from 'http';
import router from './router';

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('User connected :)');

  socket.on('disconnect', () => {
    console.log('User disconnected :(');
  });
});

app.use(router);

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
