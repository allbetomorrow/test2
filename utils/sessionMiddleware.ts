import { initMiddleware } from './init-middleware'
import session from 'express-session'
import connectRedis from 'connect-redis'
import Redis from 'ioredis'

export const redis = new Redis(process.env.REDIS_URL as string)

const RedisStore = connectRedis(session)

const sessionMiddleware = initMiddleware(session({
  store: new RedisStore({ client: redis, disableTouch: true }),
  name: 'qid',
  secret: "sgasgagsag",
  resave: false,
  proxy: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
    path: '/',
    sameSite: "lax",
    secure: (process.env.NODE_ENV as string) === 'production'
  },
  saveUninitialized: false
}))

export default sessionMiddleware