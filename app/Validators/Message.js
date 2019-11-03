'use strict'

const Antl = use('Antl')

class Message {
  get rules () {
    return {
      body: 'required',
      user_receive_id: 'required',
      match_id: 'required'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Message
