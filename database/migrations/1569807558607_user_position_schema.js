'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserPositionSchema extends Schema {
  up () {
    this.create('user_position', (table) => {
      table.integer('user_id').unsigned().index()
      table.foreign('user_id').references('users.id').onUpdate('CASCADE').onDelete('CASCADE')

      table.integer('position_id').unsigned().index()
      table.foreign('position_id').references('positions.id').onUpdate('CASCADE').onDelete('CASCADE')
    })
  }

  down () {
    this.drop('user_position')
  }
}

module.exports = UserPositionSchema
