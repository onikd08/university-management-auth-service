import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { logger, errorLogger } from './shared/logger'
import { Server } from 'http'

let server: Server
/*
Uncaught exception handler:
As the main() function is async, we have to handle uncaught 
exceptions after the main() function call
*/

process.on('uncaughtException', error => {
  errorLogger.error(error)
  process.exit(1)
})

// SIGTERM
process.on('SIGTERM', () => {
  logger.info('SIGTERM is received')
  if (server) {
    server.close()
  }
})
async function main() {
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
    logger.info('Unhandled error detected, closing server')
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
