'use strict'

const Model = use('Model')
const Hash = use('Hash')

const UserFilter = use('App/ModelFilters/UserFilter')

class User extends Model {
  static boot () {
    super.boot()

    this.addTrait('@provider:Filterable', UserFilter)

    this.addHook('beforeSave', async userInstance => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  static get hidden () {
    return ['password', 'file_id', 'created_at', 'updated_at']
  }

  likes () {
    return this.hasMany('App/Models/Like')
  }

  matches () {
    return this.hasMany('App/Models/Match')
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
