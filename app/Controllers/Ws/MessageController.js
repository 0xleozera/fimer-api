'use strict'

class MessageController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request

    const [, id] = this.socket.topic.split(':')
    const { match_id } = this.request.post()

    if (Number(id) !== match_id) {
      this.socket.close()
    }
  }
}

module.exports = MessageController
