'use strict'

const Like = use('App/Models/Like')

class LikeController {
  async store ({ request, auth }) {
    const data = request.post()

    const like = await Like.create({ liker_id: auth.user.id, ...data })

    return like
  }
}

module.exports = LikeController
