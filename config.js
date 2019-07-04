module.exports = {
  PORT: process.env.PORT || 3050,
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  JWT_EXPIRY: process.env.JWT_EXPIRY || '7d',
  API_BASE_URL: process.env.API_URL || 'http://192.168.1.15:8085',
}
