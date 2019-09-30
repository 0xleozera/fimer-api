'use strict'

const Ranking = use('App/Models/Ranking')

class RankingSeeder {
  async dependencies () {
    return [
      'GameSeeder'
    ]
  }

  async run () {
    await Ranking.create({ game_id: 1, description: 'Ferro' })
    await Ranking.create({ game_id: 1, description: 'Bronze' })
    await Ranking.create({ game_id: 1, description: 'Prata' })
    await Ranking.create({ game_id: 1, description: 'Ouro' })
    await Ranking.create({ game_id: 1, description: 'Platina' })
    await Ranking.create({ game_id: 1, description: 'Diamante' })
    await Ranking.create({ game_id: 1, description: 'Mestre' })
    await Ranking.create({ game_id: 1, description: 'Grão-Mestre' })
    await Ranking.create({ game_id: 1, description: 'Desafiante' })
  }
}

module.exports = RankingSeeder
