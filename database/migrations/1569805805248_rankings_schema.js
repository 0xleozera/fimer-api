'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RankingsSchema extends Schema {
  up () {
    this.create('rankings', (table) => {
      table.increments()
      table.string('description', 80).notNullable()
      table.integer('game_id').unsigned().references('id').inTable('games').onUpdate('CASCADE').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('rankings')
  }
}

module.exports = RankingsSchema
