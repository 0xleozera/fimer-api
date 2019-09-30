'use strict'

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
      localization,
      gender,
      file_id,
      positions,
      games,
      rankings
    } = request.post()

    const user = await User.findOrFail(auth.user.id)

    user.merge({
      name,
      nickname,
      birth_date,
      localization,
      gender,
      file_id
    })

    await user.save()

    if (games && games.length > 0) {
      await user.games().detach()
      await user.games().attach(games)
    }

    if (positions && positions.length > 0) {
      await user.positions().detach()
      await user.positions().attach(positions)
    }

    if (rankings && rankings.length > 0) {
      await user.rankings().detach()
      await user.rankings().attach(rankings)
    }

    await user.loadMany(['avatar', 'positions', 'games', 'rankings'])

    return user
  }
}

module.exports = UserController
