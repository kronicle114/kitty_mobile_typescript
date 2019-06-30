module.exports = {
  PORT: process.env.PORT || 3000,
  DATABASE_URL:
    process.env.DATABASE_URL ||
    'mongodb+srv://admin:Kittyserver123%26@kittymobilecluster-5vu4d.mongodb.net/test?retryWrites=true&w=majority',
  // 'mongodb+srv://admin:Kittyserver123%26@kittymobilecluster-5vu4d.mongodb.net/',
  TEST_DATABASE_URL:
    process.env.TEST_DATABASE_URL ||
    'mongodb+srv://admin:Kittyserver123%26@kittymobilecluster-5vu4d.mongodb.net/test?retryWrites=true&w=majority',
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY || '7d',
  // API_BASE_URL: process.env.API_URL || 'http://localhost:8085/api',
  // use line 9 if working locally, line 7 if deploying
  API_BASE_URL: 'http://localhost:8085/api',
}
