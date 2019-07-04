require('dotenv').config()
module.exports = {
  PORT: process.env.PORT || 3050,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY,
  API_BASE_URL: process.env.API_URL || `http://${process.env.DEVICE_IP}:8085`,
}
