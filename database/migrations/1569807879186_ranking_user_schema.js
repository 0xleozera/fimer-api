'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserRankingSchema extends Schema {
  up () {
    this.create('ranking_user', (table) => {
      table.integer('user_id').unsigned().index()
      table.foreign('user_id').references('users.id').onUpdate('CASCADE').onDelete('CASCADE')

      table.integer('ranking_id').unsigned().index()
      table.foreign('ranking_id').references('rankings.id').onUpdate('CASCADE').onDelete('CASCADE')
    })
  }

  down () {
    this.drop('ranking_user')
  }
}

module.exports = UserRankingSchema
