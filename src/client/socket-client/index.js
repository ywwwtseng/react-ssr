import io from 'socket.io-client';
import config from '../../config';

const socketClient = io(`${location.hostname}:${config.SOCKET_SEVER_PORT}`);

export default socketClient;