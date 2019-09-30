'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PositionsSchema extends Schema {
  up () {
    this.create('positions', (table) => {
      table.increments()
      table.string('description', 80).notNullable()
      table.integer('game_id').unsigned().references('id').inTable('games').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('positions')
  }
}

module.exports = PositionsSchema
