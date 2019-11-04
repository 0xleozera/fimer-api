'use strict'

const Database = use('Database')
const Like = use('App/Models/Like')
const Match = use('App/Models/Match')

class LikeController {
  async store ({ request, auth }) {
    const data = request.post()

    const like = await Like.create({ liker_id: auth.user.id, ...data })

    return like
  }

  async destroy ({ params, response, auth }) {
    const trx = await Database.beginTransaction()

    await Like.query()
      .where('liker_id', auth.user.id)
      .andWhere('likee_id', params.likee_id)
      .delete(trx)

    const fetchMatch = await Match.query()
      .where(builder => {
        builder
          .where('matcher_id', auth.user.id)
          .orWhere('matchee_id', auth.user.id)
      })
      .andWhere(builder => {
        builder
          .where('matchee_id', params.likee_id)
          .orWhere('matcher_id', params.likee_id)
      })
      .fetch()
    const [match] = fetchMatch.toJSON()

    if (match) {
      await await Match.query()
        .where(builder => {
          builder
            .where('matcher_id', auth.user.id)
            .orWhere('matchee_id', auth.user.id)
        })
        .andWhere(builder => {
          builder
            .where('matchee_id', params.likee_id)
            .orWhere('matcher_id', params.likee_id)
        })
        .delete(trx)
    }

    await trx.commit()

    return response.status(200).send({ message: 'Jogar removido com sucesso!' })
  }
}

module.exports = LikeController
