'use strict'

class Like {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      likee_id: 'required'
    }
  }
}

module.exports = Like
