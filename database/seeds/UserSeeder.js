'use strict'

const User = use('App/Models/User')

class UserSeeder {
  async run () {
    const data = {
      name: 'Leonardo Pinheiro',
      nickname: 'Darfus',
      email: 'admin@admin.com',
      gender: 'Masculino',
      birth_date: '06/05/1999',
      password: '123123'
    }

    await User.create(data)
  }
}

module.exports = UserSeeder
