'use strict'

const Model = use('Model')

class Like extends Model {
  liker () {
    return this.belongsTo('App/Models/User')
  }

  likee () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Like
