'use strict'

const User = use('App/Models/User')

class SearchController {
  async index ({ request, response, auth }) {
    try {
      const data = request.all()

      const users = await User.query()
        .filter({ ...data, current_user: auth.user.id })
        .with('avatar')
        .with('games')
        .with('rankings')
        .with('positions')
        .fetch()

      return users
    } catch (err) {
      return response.status(err.status).json({
        error: {
          message: 'Não foi possível buscar os jogadores!',
          err_message: err.message
        }
      })
    }
  }
}

module.exports = SearchController
