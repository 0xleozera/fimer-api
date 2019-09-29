'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('auth', 'AuthController.store')

Route.get('files/:id', 'FileController.show')
Route.post('files', 'FileController.store')

Route.group(() => {

}).middleware(['auth'])
