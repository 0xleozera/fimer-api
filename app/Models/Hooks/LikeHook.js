'use strict'

const User = use('App/Models/User')
const Match = use('App/Models/Match')

const LikeHook = (exports = module.exports = {})

LikeHook.method = async modelInstance => {}

LikeHook.match = async modelInstance => {
  const [fetchLiker, fetchLikee] = await Promise.all([
    User.query()
      .where('id', modelInstance.liker_id)
      .with('likees')
      .fetch(),
    User.query()
      .where('id', modelInstance.likee_id)
      .with('likees')
      .fetch()
  ])

  const liker = fetchLiker.toJSON()
  const likee = fetchLikee.toJSON()

  const hasLiker =
    liker[0].likees.filter(likee => likee.liker_id === modelInstance.likee_id)
      .length === 1
  const hasLikee =
    likee[0].likees.filter(likee => likee.liker_id === modelInstance.liker_id)
      .length === 1

  if (hasLiker && hasLikee) {
    await Match.create({
      matcher_id: modelInstance.liker_id,
      matchee_id: modelInstance.likee_id
    })
  }
}
