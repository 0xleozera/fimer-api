'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MessagesSchema extends Schema {
  up () {
    this.create('messages', table => {
      table.increments()
      table
        .integer('match_id')
        .unsigned()
        .references('id')
        .inTable('matches')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('user_send_id')
        .unsigned()
        .references('id')
        .inTable('users')
      table
        .integer('user_receive_id')
        .unsigned()
        .references('id')
        .inTable('users')
      table.text('body', 'longtext')
      table.timestamps()
    })
  }

  down () {
    this.drop('messages')
  }
}

module.exports = MessagesSchema
