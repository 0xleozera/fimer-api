'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddUrlAndContentTypeFromFileSchema extends Schema {
  up () {
    this.alter('files', table => {
      table.dropColumn('file')
      table.dropColumn('type')
      table.dropColumn('subtype')
      table.string('url')
      table.string('key')
      table.string('content_type')
    })
  }

  down () {
    this.table('files', table => {
      table.dropColumn('url')
      table.dropColumn('key')
      table.dropColumn('content_type')
    })
  }
}

module.exports = AddUrlAndContentTypeFromFileSchema
