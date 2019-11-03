'use strict'

const Sentry = require('@sentry/node')

const Config = require('Config')
const Env = use('Env')
// const Youch = use('Youch')
const BaseExceptionHandler = use('BaseExceptionHandler')

class ExceptionHandler extends BaseExceptionHandler {
  async handle (error, { request, response }) {
    if (error.name === 'ValidationException') {
      return response.status(error.status).send(error.messages)
    }

    if (Env.get('NODE_ENV') === 'development') {
      return response.status(error.status).send(error)
    }

    return response.status(error.status)
  }

  async report (error, { request }) {
    Sentry.init({
      dsn: Config.get('services.sentry.dsn')
    })
    Sentry.captureException(error)
  }
}

module.exports = ExceptionHandler
