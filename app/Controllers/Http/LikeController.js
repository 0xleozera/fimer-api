'use strict'

const User = use('App/Models/User')
const Match = use('App/Models/Match')
const Like = use('App/Models/Like')

class LikeController {
  async store ({ request, auth }) {
    const user = await User.findByOrFail('email', email)

    await user.loadMany(['avatar', 'positions', 'games', 'rankings'])
  }
}

module.exports = LikeController
