'use strict'

const Antl = use('Antl')

class Like {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      likee_id: 'required'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Like
