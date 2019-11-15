'use strict'

const User = use('App/Models/User')

class UserSeeder {
  async run () {
    await User.create({
      name: 'Leonardo Pinheiro',
      nickname: 'Darfus',
      email: 'admin@admin.com',
      gender: 'Masculino',
      region: 'Rio Grande do Sul',
      birth_date: '06/05/1999',
      password: '123123'
    })

    await User.create({
      name: 'Vitória Alves',
      nickname: 'Vicaz',
      email: 'vicaz@admin.com',
      gender: 'Feminino',
      region: 'Rio Grande do Sul',
      birth_date: '23/09/1997',
      password: '123123'
    })

    await User.create({
      name: 'Guilherme Monteiro',
      nickname: 'Shouden',
      email: 'gui@admin.com',
      gender: 'Masculino',
      region: 'Rio Grande do Sul',
      birth_date: '31/01/1998',
      password: '123123'
    })

    await User.create({
      name: 'Mateus Ribeiro',
      nickname: 'Hakeu',
      email: 'mathy@admin.com',
      gender: 'Masculino',
      region: 'São Paulo',
      birth_date: '16/12/1998',
      password: '123123'
    })
  }
}

module.exports = UserSeeder
