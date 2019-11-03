'use strict'

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
      password: 'required|confirm'
    }
  }
}

module.exports = UserStore
