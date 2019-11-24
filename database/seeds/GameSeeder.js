'use strict'

const Game = use('App/Models/Game')

class GameSeeder {
  async run () {
    await Game.create({ name: 'League of Legends', slug: 'LOL' })
    await Game.create({ name: 'Fortnite', slug: 'FORT' })
    await Game.create({ name: 'Counter-Strike', slug: 'CSGO' })
    await Game.create({ name: 'Dota2', slug: 'DOTA' })
  }
}

module.exports = GameSeeder
