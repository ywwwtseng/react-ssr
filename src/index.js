import apiSocketServer from './api-socket-server';
import webServer from './web-server/index';
import config from './config';

// test

apiSocketServer.listen(config.SOCKET_SEVER_PORT);
webServer.listen(config.WEB_SEVER_PORT);