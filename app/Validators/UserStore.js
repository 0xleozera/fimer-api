'use strict'

const Antl = use('Antl')

class UserStore {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required',
      nickname: 'required',
      birth_date: 'required',
      email: 'required|email|unique:users',
      gender: 'required',
      password: 'required'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = UserStore
