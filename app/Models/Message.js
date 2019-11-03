'use strict'

const Model = use('Model')

class Message extends Model {
  static boot () {
    super.boot()

    this.addHook('afterCreate', 'MessageHook.sendWs')
  }

  static get hidden () {
    return ['user_send_id', 'user_receive_id']
  }

  match () {
    return this.belongsTo('App/Models/Match')
  }

  send () {
    return this.belongsTo('App/Models/User', 'user_send_id', 'id')
  }

  receive () {
    return this.belongsTo('App/Models/User', 'user_receive_id', 'id')
  }
}

module.exports = Message
