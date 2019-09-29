'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('auth', 'AuthController.store')

Route.post('files', 'FileController.store')

Route.group(() => {
  Route.get('users/:id', 'UserController.show')
  Route.get('files/:id', 'FileController.show')
}).middleware(['auth'])
