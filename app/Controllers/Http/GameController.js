'use strict'

const Game = use('App/Models/Game')

class GameController {
  async index ({ response }) {
    try {
      const games = Game.query()
        .with('positions')
        .with('rankings')
        .fetch()

      return games
    } catch (err) {
      return response.status(err.status).json({
        error: {
          message: 'Não foi possível buscar os jogos!',
          err_message: err.message
        }
      })
    }
  }
}

module.exports = GameController
