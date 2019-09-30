'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    const data = request.all()

    const user = await User.create(data)

    await user.load('avatar')

    return user
  }

  async show ({ params }) {
    const user = await User.findOrFail(params.id)

    await user.load('avatar')

    return user
  }
}

module.exports = UserController
