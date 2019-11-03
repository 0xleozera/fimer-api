'use strict'

const Model = use('Model')

class Message extends Model {
  match () {
    return this.belongsTo('App/Models/Match')
  }

  send () {
    return this.belongsTo('App/Models/User')
  }

  receive () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Message
