'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MatchesSchema extends Schema {
  up () {
    this.create('matches', table => {
      table.increments()
      table
        .integer('matcher_id')
        .unsigned()
        .references('id')
        .inTable('users')
      table
        .integer('matchee_id')
        .unsigned()
        .references('id')
        .inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('matches')
  }
}

module.exports = MatchesSchema
