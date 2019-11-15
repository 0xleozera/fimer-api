'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddFileColumnFromUsersSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.integer('file_id').unsigned().references('id').inTable('files').onUpdate('CASCADE').onDelete('SET NULL')
    })
  }

  down () {
    this.table('users', (table) => {
      table.dropColumn('file_id')
    })
  }
}

module.exports = AddFileColumnFromUsersSchema
