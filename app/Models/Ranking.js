'use strict'

const Model = use('Model')

class Ranking extends Model {
  static get hidden () {
    return ['created_at', 'updated_at']
  }

  users () {
    return this.belongsToMany('App/Models/User')
  }

  game () {
    return this.belongsTo('App/Models/Game')
  }
}

module.exports = Ranking
