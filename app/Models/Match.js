'use strict'

const Model = use('Model')

class Match extends Model {
  static boot () {
    super.boot()

    this.addHook('afterCreate', ['MatchHook.sendWs', 'MatchHook.notifyUsers'])
  }

  matcher () {
    return this.belongsTo('App/Models/User', 'matcher_id', 'id')
  }

  matchee () {
    return this.belongsTo('App/Models/User', 'matchee_id', 'id')
  }

  messages () {
    return this.hasMany('App/Models/Message')
  }
}

module.exports = Match
