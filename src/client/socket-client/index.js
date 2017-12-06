import io from 'socket.io-client';
import config from '../../config';

const createSocketClient = options => io(`${location.hostname}:${config.SOCKET_SEVER_PORT}`, options);

export default process.env.BROWSER && createSocketClient;