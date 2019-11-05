'use strict'

class MessageController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }
}

module.exports = MessageController
