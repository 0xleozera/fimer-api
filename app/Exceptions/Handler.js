"use strict";

const Sentry = require("@sentry/node");

const Config = use("Config");
const Env = use("Env");
//const Youch = use('Youch')
const BaseExceptionHandler = use("BaseExceptionHandler");

class ExceptionHandler extends BaseExceptionHandler {
  async handle(error, { request, response }) {
    if (error.name === "ValidationException") {
      return response.status(error.status).send(error.messages);
    }

    // if (Env.get('NODE_ENV') === 'development') {
    //   const youch = new Youch(error, request.request)
    //   const errorJSON = await youch.toJSON()

    //   return response.status(error.status).send(errorJSON)
    // }

    return response.status(error.status);
  }

  async report(error, { request }) {
    if (Env.get("NODE_ENV") === "production") {
      Sentry.init({
        dsn: Config.get("services.sentry.dsn")
      });
      Sentry.captureException(error);
    }
  }
}

module.exports = ExceptionHandler;
