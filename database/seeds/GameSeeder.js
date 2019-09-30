'use strict'

const Game = use('App/Models/Game')

class GameSeeder {
  async run () {
    await Game.create({ name: 'League of Legends' })
  }
}

module.exports = GameSeeder
