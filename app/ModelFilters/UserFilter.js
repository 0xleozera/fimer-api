'use strict'

const ModelFilter = use('ModelFilter')

class UserFilter extends ModelFilter {
  game (id) {
    return this.related('games', 'game_id', +id)
  }

  ranking (id) {
    return this.related('rankings', 'ranking_id', +id)
  }

  position (id) {
    return this.related('positions', 'position_id', +id)
  }

  region (region) {
    return this.where('region', 'LIKE', `${region}%`)
  }

  gender (gender) {
    return this.where('gender', 'LIKE', `${gender}%`)
  }

  currentUser (id) {
    return this.whereNot('id', +id).whereDoesntHave('likees', (builder) => {
      builder.where('liker_id', +id)
    })
  }
}

module.exports = UserFilter
