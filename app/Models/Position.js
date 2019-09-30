'use strict'

const Model = use('Model')

class Position extends Model {
  users () {
    return this.belongsToMany('App/Models/User')
  }

  game () {
    return this.belongsTo('App/Models/Game')
  }
}

module.exports = Position
