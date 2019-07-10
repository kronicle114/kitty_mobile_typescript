import {
  JWT_SECRET,
  JWT_EXPIRY,
  DEVICE_IP,
  PORT_ENV,
} from 'react-native-dotenv'
module.exports = {
  PORT: PORT_ENV || 3050,
  JWT_SECRET: JWT_SECRET,
  JWT_EXPIRY: JWT_EXPIRY,
  API_BASE_URL: `http://${DEVICE_IP}:8085`,
}

