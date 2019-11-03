'use strict'

const Antl = use('Antl')

class UserUpdate {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required',
      nickname: 'required',
      birth_date: 'required',
      email: 'required|email',
      gender: 'required',
      games: 'array',
      rankings: 'array',
      positions: 'array'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = UserUpdate
