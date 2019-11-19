'use strict';

const Database = use('Database')
const Like = use('App/Models/Like')
const Match = use('App/Models/Match')

class LikeController {
  async store ({ request, response, auth }) {
    try {
      const data = request.post()

      const like = await Like.create({ liker_id: auth.user.id, ...data })

      return like
    } catch (err) {
      return response.status(err.status).json({
        error: {
          message: 'Não foi possível curtir o jogador!',
          err_message: err.message
        }
      })
    }
  }

  async destroy ({ params, response, auth }) {
    try {
      const trx = await Database.beginTransaction()

      await Like.query()
        .where('liker_id', auth.user.id)
        .andWhere('likee_id', params.likee_id)
        .delete(trx)

      const match = await Match.query()
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
        .first()

      if (match) {
        await match.delete(trx)
      }

      await trx.commit()

      return response
        .status(200)
        .send({ message: 'Jogar removido com sucesso!' })
    } catch (err) {
      return response.status(err.status).json({
        error: {
          message: 'Não foi possível excluir o curtir com o jogador!',
          err_message: err.message
        }
      })
    }
  }
}

module.exports = LikeController
