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

  // Likes
  Route.post('likes', 'LikeController.store')

  // Matches
  Route.get('matches', 'MatchController.index')

  // Messages
  Route.get('messages/:matchId', 'MessageController.index')
  Route.post('messages', 'MessageController.store')
}).middleware(['auth'])
