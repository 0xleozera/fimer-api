'use strict'

const Model = use('Model')

class Match extends Model {
  matcher () {
    return this.belongsTo('App/Models/User')
  }

  matchee () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Match
