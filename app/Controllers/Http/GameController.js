'use strict'

const Game = use('App/Models/Game')

class GameController {
  async index () {
    const games = Game.query()
      .with('positions')
      .with('rankings')
      .fetch()

    return games
  }
}

module.exports = GameController
