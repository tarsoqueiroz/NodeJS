const config = {}

/**
config.redisStore = {
  url: process.env.REDIS_STORE_URI,
  secret: process.env.REDIS_STORE_SECRET
}
 */

config.redisStore = {
  url: 'redis://localhost:6379',
  secret: ''
}

module.exports = config
