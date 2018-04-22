module.exports = {
  SEVER_PORT: process.env.PORT || 3001,
  API_URI: 'http://localhost:3001',
  PROXY_REQUEST_HEADER_X_FORWARDED_HOST: 'localhost:3000',
  MONGO_URI: 'mongodb://yiwei:tseng@ds247759.mlab.com:47759/chatroom'
};