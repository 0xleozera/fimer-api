'use strict'

const Model = use('Model')

class Game extends Model {
  static get hidden () {
    return ['created_at', 'updated_at']
  }

  users () {
    return this.belongsToMany('App/Models/User')
  }

  positions () {
    return this.hasMany('App/Models/Position')
  }

  rankings () {
    return this.hasMany('App/Models/Ranking')
  }
}

module.exports = Game
