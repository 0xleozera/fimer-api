'use strict'

const User = use('App/Models/User')

class AuthController {
  async store ({ request, auth }) {
    const { email, password } = request.all()

    const credentials = await auth.attempt(email, password)

    if (credentials.token) {
      const user = await User.findByOrFail('email', email)

      return { user, ...credentials }
    }

    return credentials
  }
}

module.exports = AuthController
