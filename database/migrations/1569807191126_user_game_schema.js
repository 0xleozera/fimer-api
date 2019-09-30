'use strict'

const Schema = use('Schema')

class UserGameSchema extends Schema {
  up () {
    this.create('user_game', (table) => {
      table.integer('user_id').unsigned().index()
      table.foreign('user_id').references('users.id').onUpdate('CASCADE').onDelete('CASCADE')

      table.integer('game_id').unsigned().index()
      table.foreign('game_id').references('games.id').onUpdate('CASCADE').onDelete('CASCADE')
    })
  }

  down () {
    this.drop('user_game')
  }
}

module.exports = UserGameSchema
