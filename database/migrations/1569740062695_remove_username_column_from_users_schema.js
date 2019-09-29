'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RemoveUsernameColumnFromUsersSchema extends Schema {
  up () {
    this.table('users', table => {
      table.dropColumn('username')
    })
  }

  down () {
    this.table('users', table => {
      // reverse alternations
    })
  }
}

module.exports = RemoveUsernameColumnFromUsersSchema
