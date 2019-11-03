'use strict'

class MatchController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request

    const [, id] = this.socket.topic.split(':')
    const { matchee_id, matcher_id } = this.request.post()

    if (Number(id) !== matchee_id && Number(id) !== matcher_id) {
      this.socket.close()
    }
  }
}

module.exports = MatchController
