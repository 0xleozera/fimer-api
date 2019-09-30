'use strict'

const Position = use('App/Models/Position')

class PositionSeeder {
  async dependencies () {
    return [
      'GameSeeder'
    ]
  }

  async run () {
    await Position.create({ game_id: 1, description: 'AD Carry' })
    await Position.create({ game_id: 1, description: 'Suporte' })
    await Position.create({ game_id: 1, description: 'Top Laner' })
    await Position.create({ game_id: 1, description: 'Mid Laner' })
    await Position.create({ game_id: 1, description: 'Jungle' })
  }
}

module.exports = PositionSeeder
