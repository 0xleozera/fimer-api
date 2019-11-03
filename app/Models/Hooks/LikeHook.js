'use strict'

const User = use('App/Models/User')
const Match = use('App/Models/Match')

const LikeHook = (exports = module.exports = {})

LikeHook.method = async modelInstance => {}

LikeHook.match = async like => {
  const [fetchLiker, fetchLikee] = await Promise.all([
    User.query()
      .where('id', like.liker_id)
      .with('likees')
      .fetch(),
    User.query()
      .where('id', like.likee_id)
      .with('likees')
      .fetch()
  ])

  const liker = fetchLiker.toJSON()
  const likee = fetchLikee.toJSON()

  const hasLiker =
    liker[0].likees.filter(likee => likee.liker_id === like.likee_id).length ===
    1
  const hasLikee =
    likee[0].likees.filter(likee => likee.liker_id === like.liker_id).length ===
    1

  if (hasLiker && hasLikee) {
    await Match.create({
      matcher_id: like.liker_id,
      matchee_id: like.likee_id
    })
  }
}
