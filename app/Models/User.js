'use strict'

const Model = use('Model')
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  static get hidden () {
    return ['password', 'file_id', 'created_at', 'updated_at']
  }

  games () {
    return this.belongsToMany('App/Models/Game')
  }

  positions () {
    return this.belongsToMany('App/Models/Position')
  }

  rankings () {
    return this.belongsToMany('App/Models/Ranking')
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  avatar () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = User
