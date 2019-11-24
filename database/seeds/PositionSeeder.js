'use strict'

const Position = use('App/Models/Position')

class PositionSeeder {
  async dependencies () {
    return ['GameSeeder']
  }

  async run () {
    // LOL
    await Position.create({ game_id: 1, description: 'AD Carry', slug: 'ADC' })
    await Position.create({ game_id: 1, description: 'Support', slug: 'SUP' })
    await Position.create({ game_id: 1, description: 'Top Laner', slug: 'TOP' })
    await Position.create({ game_id: 1, description: 'Mid Laner', slug: 'MID' })
    await Position.create({ game_id: 1, description: 'Jungle', slug: 'JG' })

    // Fortnite
    await Position.create({ game_id: 2, description: 'Agressivo', slug: 'AGR' })
    await Position.create({
      game_id: 2,
      description: 'Intermediário',
      slug: 'INT'
    })
    await Position.create({ game_id: 2, description: 'Passivo', slug: 'PAS' })
    await Position.create({ game_id: 2, description: 'Versátil', slug: 'VER' })

    // CSGO
    await Position.create({
      game_id: 3,
      description: 'Entry Fragger',
      slug: 'ENT'
    })
    await Position.create({ game_id: 3, description: 'Suporte', slug: 'SUP' })
    await Position.create({
      game_id: 3,
      description: 'Lurker/Costinhas',
      slug: 'COS'
    })
    await Position.create({ game_id: 3, description: 'Capitão', slug: 'CAP' })
    await Position.create({
      game_id: 3,
      description: 'Sniper/AWPer',
      slug: 'AWP'
    })

    // Dota2
    await Position.create({ game_id: 4, description: 'Mid', slug: 'Mid' })
    await Position.create({ game_id: 4, description: 'Offlane', slug: 'OFF' })
    await Position.create({ game_id: 4, description: 'Support 4', slug: 'SP4' })
    await Position.create({ game_id: 4, description: 'Support 5', slug: 'SP5' })
    await Position.create({ game_id: 4, description: 'Hard Carry', slug: 'HC' })
  }
}

module.exports = PositionSeeder
