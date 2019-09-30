'use strict'

const Schema = use('Schema')

class UserGameSchema extends Schema {
  up () {
    this.create('game_user', (table) => {
      table.increments()

      table.integer('user_id').unsigned().index()
      table.foreign('user_id').references('users.id').onUpdate('CASCADE').onDelete('CASCADE')

      table.integer('game_id').unsigned().index()
      table.foreign('game_id').references('games.id').onUpdate('CASCADE').onDelete('CASCADE')
    })
  }

  down () {
    this.drop('game_user')
  }
}

module.exports = UserGameSchema
