'use strict'

const User = use('App/Models/User')

class AuthController {
  async store ({ request, response, auth }) {
    try {
      const { email, password } = request.all()

      const credentials = await auth.attempt(email, password)

      if (credentials.token) {
        const user = await User.findByOrFail('email', email)

        await user.loadMany(['avatar', 'positions', 'games', 'rankings'])

        return { user, ...credentials }
      }

      return credentials
    } catch (err) {
      return response.status(err.status).json({
        error: {
          message: 'Credenciais inválidas!',
          err_message: err.message
        }
      })
    }
  }
}

module.exports = AuthController
