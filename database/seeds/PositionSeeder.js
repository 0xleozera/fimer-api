'use strict'

const Position = use('App/Models/Position')

class PositionSeeder {
  async dependencies () {
    return ['GameSeeder']
  }

  async run () {
    await Position.create({ game_id: 1, description: 'AD Carry', slug: 'ADC' })
    await Position.create({ game_id: 1, description: 'Suporte', slug: 'Supp' })
    await Position.create({ game_id: 1, description: 'Top Laner', slug: 'Top' })
    await Position.create({ game_id: 1, description: 'Mid Laner', slug: 'Mid' })
    await Position.create({ game_id: 1, description: 'Jungle', slug: 'JG' })
  }
}

module.exports = PositionSeeder
