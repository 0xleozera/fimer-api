'use strict'

const User = use('App/Models/User')

class HomeController {
  async index ({ request, auth }) {
    const data = request.all()

    const users = await User.query()
      .filter({ ...data, current_user: auth.user.id })
      .limit(5)
      .with('avatar')
      .with('games')
      .with('rankings')
      .with('positions')
      .fetch()

    return users
  }
}

module.exports = HomeController
