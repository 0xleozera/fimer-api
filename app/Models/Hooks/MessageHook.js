'use strict'

const Ws = use('Ws')
const Message = use('App/Models/Message')

const MessageHook = (exports = module.exports = {})

MessageHook.method = async modelInstance => {}

MessageHook.sendWs = async message => {
  const topicMatcher = Ws.getChannel('messages:*').topic(
    `messages:${message.matchee_id}`
  )
  const topicMatchee = Ws.getChannel('messages:*').topic(
    `messages:${message.matcher_id}`
  )

  const currentMessage = await Message.findOrFail(message.id)
  await currentMessage.loadMany(['send', 'send.avatar'])

  topicMatcher && topicMatcher.broadcast('message', currentMessage)
  topicMatchee && topicMatchee.broadcast('message', currentMessage)
}
