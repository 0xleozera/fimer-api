'use strict'

const Model = use('Model')

class Match extends Model {
  matcher () {
    return this.belongsTo('App/Models/User')
  }

  matchee () {
    return this.belongsTo('App/Models/User')
  }

  messages () {
    return this.hasMany('App/Models/Message')
  }
}

module.exports = Match
