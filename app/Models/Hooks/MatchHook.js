'use strict'

const Ws = use('Ws')
const User = use('App/Models/User')
const Match = use('App/Models/Match')

const MatchHook = (exports = module.exports = {})

MatchHook.method = async modelInstance => {}

MatchHook.sendWs = async match => {
  const topicMatcher = Ws.getChannel('matches:*').topic(
    `matches:${match.matcher_id}`
  )

  const topicMatchee = Ws.getChannel('matches:*').topic(
    `matches:${match.matchee_id}`
  )

  const fetchMatch = await Match.query()
    .where('id', match.id)
    .with('matcher')
    .with('matchee')
    .with('messages')
    .with('messages.send')
    .fetch()

  const [newMatch] = fetchMatch.toJSON()

  topicMatcher && topicMatcher.broadcast('new', newMatch)
  topicMatchee && topicMatchee.broadcast('new', newMatch)
}

MatchHook.notifyUsers = async match => {
  const topicMatcher = Ws.getChannel('matches:*').topic(
    `matches:${match.matcher_id}`
  )

  const topicMatchee = Ws.getChannel('matches:*').topic(
    `matches:${match.matchee_id}`
  )

  const matcher = await User.findOrFail(match.matcher_id)
  const matchee = await User.findOrFail(match.matchee_id)

  topicMatcher &&
    topicMatcher.broadcast('match', {
      content: `Opa, ${matchee.nickname} também quer bater uma gameplay com você`
    })
  topicMatchee &&
    topicMatchee.broadcast('match', {
      content: `Opa, ${matcher.nickname} também quer bater uma gameplay com você`
    })
}
