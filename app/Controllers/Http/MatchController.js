'use strict'

const Match = use('App/Models/Match')

class MatchController {
  async index ({ auth }) {
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
  }
}

module.exports = MatchController
