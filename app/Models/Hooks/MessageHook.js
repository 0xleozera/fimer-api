'use strict'

const Ws = use('Ws')
const Message = use('App/Models/Message')

const MessageHook = (exports = module.exports = {})

MessageHook.method = async modelInstance => {}

MessageHook.sendWs = async message => {
  const topic = Ws.getChannel('messages:*').topic(
    `messages:${message.match_id}`
  )

  const currentMessage = await Message.findOrFail(message.id)
  await currentMessage.loadMany(['send', 'send.avatar'])

  topic && topic.broadcast('message', currentMessage)
}
