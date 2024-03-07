const redis = require('redis')

require('dotenv').config()

const redisClient = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST)

redisClient.on('connect', () => {
    console.log('REDIS CONNECTED')
})

redisClient.on('error', (err) => {
    console.log(`Redis error: ${err}`)
})

const app = require('./app')

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port','host'), () =>{
    console.log('SERVER STARTADO')
})