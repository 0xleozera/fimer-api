'use strict'

const Message = use('App/Models/Message')

class MessageController {
  async index ({ params }) {
    const messages = Message.query()
      .where('match_id', params.matchId)
      .with('send')
      .fetch()

    return messages
  }

  async store ({ request, auth }) {
    const data = request.post()

    const message = await Message.create({
      user_send_id: auth.user.id,
      ...data
    })

    return message
  }
}

module.exports = MessageController
