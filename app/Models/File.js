'use strict'

const Model = use('Model')
const Env = use('Env')

class File extends Model {
  static get hidden () {
    return ['type', 'subtype', 'created_at', 'updated_at']
  }

  static get computed () {
    return ['url']
  }

  getUrl ({ id }) {
    return `${Env.get('APP_URL')}/files/${id}`
  }
}

module.exports = File
