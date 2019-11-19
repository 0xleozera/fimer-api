'use strict';

const Message = use('App/Models/Message')

class MessageController {
  async index ({ response, params }) {
    try {
      const messages = Message.query()
        .where('match_id', params.matchId)
        .with('send')
        .with('send.avatar')
        .fetch()

      return messages
    } catch (err) {
      return response.status(err.status).json({
        error: {
          message: 'Não foi possível buscar as mensagens!',
          err_message: err.message
        }
      })
    }
  }

  async store ({ request, response, auth }) {
    try {
      const data = request.post()

      const message = await Message.create({
        user_send_id: auth.user.id,
        ...data
      })

      return message
    } catch (err) {
      return response.status(err.status).json({
        error: {
          message: 'Não foi possível enviar a mensagem!',
          err_message: err.message
        }
      })
    }
  }
}

module.exports = MessageController
