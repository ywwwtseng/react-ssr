import io from 'socket.io-client';
import config from '../../config';

const createSocketClient = () => io(`${location.hostname}:${config.SOCKET_SEVER_PORT}`);

export default process.env.BROWSER && createSocketClient();