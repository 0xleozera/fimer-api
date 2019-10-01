'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')

Route.post('auth', 'AuthController.store')

Route.post('files', 'FileController.store')

Route.group(() => {
  // Users
  Route.get('users/:id', 'UserController.show')
  Route.put('users', 'UserController.update')

  // Files
  Route.get('files/:id', 'FileController.show')

  // Games
  Route.get('games', 'GameController.index')

  // Search
  Route.get('search', 'SearchController.index')
}).middleware(['auth'])
