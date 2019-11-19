'use strict';

const Database = use('Database')
const User = use('App/Models/User')

class UserController {
  async store ({ request, response }) {
    try {
      const data = request.post()

      const currentAvatar = {
        Masculino: 1,
        Feminino: 2,
        Outro: 3
      }

      const avatar = currentAvatar[data.gender]
      const user = await User.create({ file_id: avatar, ...data })

      await user.loadMany(['avatar', 'positions', 'games', 'rankings'])

      return user
    } catch (err) {
      return response.status(err.status).json({
        error: {
          message: 'Não foi possível criar o usuário!',
          err_message: err.message
        }
      })
    }
  }

  async show ({ params, response, auth }) {
    try {
      const user = await User.findOrFail(params.id)
      await user.loadMany(['avatar', 'positions', 'games', 'rankings'])

      if (Number(params.id) === auth.user.id) {
        return { status: 'unplayable', user }
      }

      const currentLikees = await user.likees().fetch()
      const likees = currentLikees.toJSON()

      const currentLikeers = await user.likers().fetch()
      const likers = currentLikeers.toJSON()

      const filterLikers = likers.filter(
        liker => liker.likee_id === auth.user.id
      )
      const filterLikees = likees.filter(
        likee => likee.liker_id === auth.user.id
      )

      if (filterLikers.length === 1 && filterLikees.length === 1) {
        return { status: 'matched', user }
      }

      if (filterLikees.length === 1) {
        return { status: 'liked', user }
      }

      return { status: 'playable', user }
    } catch (err) {
      return response.status(err.status).json({
        error: {
          message: 'Não foi buscar o usuário!',
          err_message: err.message
        }
      })
    }
  }

  async update ({ request, response, auth }) {
    try {
      const {
        name,
        nickname,
        birth_date,
        region,
        gender,
        file_id,
        email,
        positions,
        games,
        rankings
      } = request.post()
      const trx = await Database.beginTransaction()
      const user = await User.findOrFail(auth.user.id)

      user.merge({
        name,
        nickname,
        birth_date,
        region,
        gender,
        file_id,
        email
      })

      await user.save(trx)

      if (games && games.length > 0) {
        await user.games().sync(games, trx)
      }

      if (positions && positions.length > 0) {
        await user.positions().sync(positions, trx)
      }

      if (rankings && rankings.length > 0) {
        await user.rankings().sync(rankings, trx)
      }

      await user.loadMany(['avatar', 'positions', 'games', 'rankings'])

      await trx.commit()

      return user
    } catch (err) {
      return response.status(err.status).json({
        error: {
          message: 'Não foi possível atualizar o usuário!',
          err_message: err.message
        }
      })
    }
  }
}

module.exports = UserController
