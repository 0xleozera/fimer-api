'use strict'

const Database = use('Database')
const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    const data = request.post()

    const user = await User.create(data)

    await user.loadMany(['avatar', 'positions', 'games', 'rankings'])

    return user
  }

  async show ({ params }) {
    const user = await User.findOrFail(params.id)

    await user.loadMany(['avatar', 'positions', 'games', 'rankings'])

    return user
  }

  async update ({ request, auth }) {
    const {
      name,
      nickname,
      birth_date,
      region,
      gender,
      file_id,
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
      file_id
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
  }
}

module.exports = UserController
