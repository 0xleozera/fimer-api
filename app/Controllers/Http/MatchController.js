'use strict';

const Match = use('App/Models/Match')

class MatchController {
  async index ({ response, auth }) {
    try {
      const matches = await Match.query()
        .where('matcher_id', auth.user.id)
        .orWhere('matchee_id', auth.user.id)
        .with('matcher')
        .with('matcher.avatar')
        .with('matchee.avatar')
        .with('messages')
        .with('messages.send')
        .fetch()

      return matches
    } catch (err) {
      return response.status(err.status).json({
        error: {
          message: 'Não foi possível buscar o match com os jogadores!',
          err_message: err.message
        }
      })
    }
  }
}

module.exports = MatchController
