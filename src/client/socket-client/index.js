import io from 'socket.io-client';
import config from '../../config';

const createSocketClient = options => io(config.API_URI, { secure: true, reconnect: true, rejectUnauthorized : false, ...options });

export default process.env.BROWSER && createSocketClient;