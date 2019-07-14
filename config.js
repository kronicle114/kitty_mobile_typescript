import {
  JWT_SECRET,
  JWT_EXPIRY,
  DEVICE_IP,
  PORT_ENV,
} from 'react-native-dotenv'

// DEVICE_IP has to be the same as the one that expo is using at the time if using LAN
// more info here: https://docs.expo.io/versions/v33.0.0/workflow/debugging/
module.exports = {
  PORT: PORT_ENV || 8085,
  JWT_SECRET: JWT_SECRET,
  JWT_EXPIRY: JWT_EXPIRY,
  API_BASE_URL: `http://${DEVICE_IP}:8085`,
}
