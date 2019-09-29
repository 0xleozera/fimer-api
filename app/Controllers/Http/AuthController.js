'use strict'

const User = use('App/Models/User')

class AuthController {
  async store ({ request, auth }) {
    const { email, password } = request.all()

    const credentials = await auth.attempt(email, password)

    if (credentials.token) {
      const user = await User.query().where('email', email).with('avatar').fetch()

      return { user, ...credentials }
    }

    return credentials
  }
}

module.exports = AuthController
