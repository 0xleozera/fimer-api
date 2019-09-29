'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddUserColumnsSchema extends Schema {
  up () {
    this.alter('users', table => {
      table.string('name', 80).notNullable()
      table.string('nickname', 40)
      table.string('birth_date', 20)
      table.string('localization', 80)
      table.string('gender', 20)
    })
  }

  down () {
    this.alter('users', table => {
      // reverse alternations
    })
  }
}

module.exports = AddUserColumnsSchema
