module.exports = {
  SEVER_PORT: process.env.PORT || 3001,
  API_URI: !__DEV__ ? 'API_URI' : 'http://localhost:3001',
  PROXY_REQUEST_HEADER_X_FORWARDED_HOST: !__DEV__ ? 'WEB_URL' : 'http://localhost:3001',
  MONGO_URI: 'MONGO_URI'
};