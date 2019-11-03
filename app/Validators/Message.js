'use strict'

class Message {
  get rules () {
    return {
      body: 'required',
      user_receive_id: 'required',
      match_id: 'required'
    }
  }
}

module.exports = Message
