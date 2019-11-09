'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store').validator('UserStore')

Route.post('auth', 'AuthController.store').validator('Auth')

Route.post('files', 'FileController.store')
Route.get('files/:id', 'FileController.show')

Route.group(() => {
  // Users
  Route.get('users/:id', 'UserController.show')
  Route.put('users', 'UserController.update').validator('UserUpdate')

  // Games
  Route.get('games', 'GameController.index')

  // Search
  Route.get('search', 'SearchController.index')

  // Search
  Route.get('home', 'HomeController.index')

  // Likes
  Route.post('likes', 'LikeController.store').validator('Like')
  Route.delete('likes/:likee_id', 'LikeController.destroy')

  // Matches
  Route.get('matches', 'MatchController.index')

  // Messages
  Route.get('messages/:matchId', 'MessageController.index')
  Route.post('messages', 'MessageController.store').validator('Message')
}).middleware(['auth'])
