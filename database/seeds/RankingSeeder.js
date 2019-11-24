'use strict'

const Ranking = use('App/Models/Ranking')

class RankingSeeder {
  async dependencies () {
    return ['GameSeeder']
  }

  async run () {
    // LOL
    await Ranking.create({
      game_id: 1,
      slug: 'Ferro 4',
      description: 'Ferro 4'
    })
    await Ranking.create({
      game_id: 1,
      slug: 'Ferro 3',
      description: 'Ferro 3'
    })
    await Ranking.create({
      game_id: 1,
      slug: 'Ferro 2',
      description: 'Ferro 2'
    })
    await Ranking.create({
      game_id: 1,
      slug: 'Ferro 1',
      description: 'Ferro 1'
    })

    await Ranking.create({
      game_id: 1,
      slug: 'Bronze 4',
      description: 'Bronze 4'
    })
    await Ranking.create({
      game_id: 1,
      slug: 'Bronze 3',
      description: 'Bronze 3'
    })
    await Ranking.create({
      game_id: 1,
      slug: 'Bronze 2',
      description: 'Bronze 2'
    })
    await Ranking.create({
      game_id: 1,
      slug: 'Bronze 1',
      description: 'Bronze 1'
    })

    await Ranking.create({
      game_id: 1,
      slug: 'Prata 4',
      description: 'Prata 4'
    })
    await Ranking.create({
      game_id: 1,
      slug: 'Prata 3',
      description: 'Prata 3'
    })
    await Ranking.create({
      game_id: 1,
      slug: 'Prata 2',
      description: 'Prata 2'
    })
    await Ranking.create({
      game_id: 1,
      slug: 'Prata 1',
      description: 'Prata 1'
    })

    await Ranking.create({ game_id: 1, slug: 'Ouro 4', description: 'Ouro 4' })
    await Ranking.create({ game_id: 1, slug: 'Ouro 3', description: 'Ouro 3' })
    await Ranking.create({ game_id: 1, slug: 'Ouro 2', description: 'Ouro 2' })
    await Ranking.create({ game_id: 1, slug: 'Ouro 1', description: 'Ouro 1' })

    await Ranking.create({
      game_id: 1,
      slug: 'Platina 4',
      description: 'Platina 4'
    })
    await Ranking.create({
      game_id: 1,
      slug: 'Platina 3',
      description: 'Platina 3'
    })
    await Ranking.create({
      game_id: 1,
      slug: 'Platina 2',
      description: 'Platina 2'
    })
    await Ranking.create({
      game_id: 1,
      slug: 'Platina 1',
      description: 'Platina 1'
    })

    await Ranking.create({
      game_id: 1,
      slug: 'Diamante 4',
      description: 'Diamante 4'
    })
    await Ranking.create({
      game_id: 1,
      slug: 'Diamante 3',
      description: 'Diamante 3'
    })
    await Ranking.create({
      game_id: 1,
      slug: 'Diamante 2',
      description: 'Diamante 2'
    })
    await Ranking.create({
      game_id: 1,
      slug: 'Diamante 1',
      description: 'Diamante 1'
    })

    await Ranking.create({ game_id: 1, slug: 'Mestre', description: 'Mestre' })
    await Ranking.create({
      game_id: 1,
      slug: 'Grão-Mestre',
      description: 'Grão-Mestre'
    })
    await Ranking.create({
      game_id: 1,
      slug: 'Desafiante',
      description: 'Desafiante'
    })

    // Fortnite
    await Ranking.create({
      game_id: 2,
      slug: 'Iniciante',
      description: 'Iniciante'
    })
    await Ranking.create({
      game_id: 2,
      slug: 'Intermediário',
      description: 'Intermediário'
    })
    await Ranking.create({
      game_id: 2,
      slug: 'Avançado',
      description: 'Avançado'
    })
    await Ranking.create({
      game_id: 2,
      slug: 'Profissional',
      description: 'Profissional'
    })

    // CSGO
    await Ranking.create({
      game_id: 3,
      slug: 'Prata 1',
      description: 'Prata 1'
    })
    await Ranking.create({
      game_id: 3,
      slug: 'Prata 2',
      description: 'Prata 2'
    })
    await Ranking.create({
      game_id: 3,
      slug: 'Prata 3',
      description: 'Prata 3'
    })
    await Ranking.create({
      game_id: 3,
      slug: 'Prata 4',
      description: 'Prata 4'
    })
    await Ranking.create({
      game_id: 3,
      slug: 'Prata de Elite',
      description: 'Prata de Elite'
    })
    await Ranking.create({
      game_id: 3,
      slug: 'Prata Mestre',
      description: 'Prata Mestre'
    })

    await Ranking.create({ game_id: 3, slug: 'Ouro 1', description: 'Ouro 1' })
    await Ranking.create({ game_id: 3, slug: 'Ouro 2', description: 'Ouro 2' })
    await Ranking.create({ game_id: 3, slug: 'Ouro 3', description: 'Ouro 3' })
    await Ranking.create({ game_id: 3, slug: 'Ouro 4', description: 'Ouro 4' })

    await Ranking.create({ game_id: 3, slug: 'AK 1', description: 'AK 1' })
    await Ranking.create({ game_id: 3, slug: 'AK 2', description: 'AK 2' })
    await Ranking.create({
      game_id: 3,
      slug: 'AK Cruzada',
      description: 'AK Cruzada'
    })
    await Ranking.create({ game_id: 3, slug: 'Xerife', description: 'Xerife' })

    await Ranking.create({
      game_id: 3,
      slug: 'Águia 1',
      description: 'Águia 1'
    })
    await Ranking.create({
      game_id: 3,
      slug: 'Águia 2',
      description: 'Águia 2'
    })
    await Ranking.create({
      game_id: 3,
      slug: 'Supremo',
      description: 'Supremo'
    })
    await Ranking.create({ game_id: 3, slug: 'Global', description: 'Global' })

    // Dota2
    await Ranking.create({ game_id: 4, slug: 'Herald', description: 'Herald' })
    await Ranking.create({
      game_id: 4,
      slug: 'Guardian',
      description: 'Guardian'
    })
    await Ranking.create({
      game_id: 4,
      slug: 'Crusader',
      description: 'Crusader'
    })
    await Ranking.create({ game_id: 4, slug: 'Archon', description: 'Archon' })
    await Ranking.create({ game_id: 4, slug: 'Legend', description: 'Legend' })
    await Ranking.create({
      game_id: 4,
      slug: 'Ancient',
      description: 'Ancient'
    })
    await Ranking.create({ game_id: 4, slug: 'Divine', description: 'Divine' })
    await Ranking.create({
      game_id: 4,
      slug: 'Immortal',
      description: 'Immortal'
    })
  }
}

module.exports = RankingSeeder
