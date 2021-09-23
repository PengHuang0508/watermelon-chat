import { io } from 'socket.io-client';
import { SERVER_ENDPOINT } from 'src/config';

const socket = io(SERVER_ENDPOINT, {
  transports: ['websocket'],
});
export default socket;
