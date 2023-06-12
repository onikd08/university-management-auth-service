import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { logger, errorLogger } from './shared/logger'
import { Server } from 'http'

/*
Uncaught exception handler:
As the main() function is async, we have to handle uncaught 
exceptions after the main() function call
*/

process.on('uncaughtException', () => {
  console.log('Uncaught exception detected')
  process.exit(1)
})

async function main() {
  let server: Server
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database connection successful')
    server = app.listen(config.port, () => {
      logger.info('Server is running on port', config.port)
    })
  } catch (error) {
    errorLogger.error(error)
  }

  process.on('unhandledRejection', error => {
    console.log('Unhandled error detected, closing server')
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

main()

//testing uncaught exception

//console.log(x)
