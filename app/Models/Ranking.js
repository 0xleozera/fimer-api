'use strict'

const Model = use('Model')

class Ranking extends Model {
  game () {
    return this.belongsTo('App/Models/Game')
  }
}

module.exports = Ranking
