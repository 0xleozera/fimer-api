'use strict'

const Model = use('Model')

class Position extends Model {
  game () {
    return this.belongsTo('App/Models/Game')
  }
}

module.exports = Position
