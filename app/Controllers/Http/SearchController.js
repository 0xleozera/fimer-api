'use strict'

const User = use('App/Models/User')

class SearchController {
  async index ({ request, auth }) {
    const data = request.all()

    const users = await User.query()
      .filter({ ...data, current_user: auth.user.id })
      .with('avatar')
      .with('games')
      .with('rankings')
      .with('positions')
      .fetch()

    return users
  }
}

module.exports = SearchController
