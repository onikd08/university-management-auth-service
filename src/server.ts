import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { logger, errorLogger } from './shared/logger'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database connection successful')
    app.listen(config.port, () => {
      logger.info('Server is running on port', config.port)
    })
  } catch (error) {
    errorLogger.error(error)
  }
}

main()
