'use strict'

const Ws = use('Ws')
const Message = use('App/Models/Message')

const MessageHook = (exports = module.exports = {})

MessageHook.method = async modelInstance => {}

MessageHook.sendWs = async message => {
  const topicSender = Ws.getChannel('messages:*').topic(
    `messages:${message.user_send_id}`
  )
  const topicReceiver = Ws.getChannel('messages:*').topic(
    `messages:${message.user_receive_id}`
  )

  const currentMessage = await Message.findOrFail(message.id)
  await currentMessage.loadMany(['send', 'send.avatar'])

  topicSender && topicSender.broadcast('message', currentMessage)
  topicReceiver && topicReceiver.broadcast('message', currentMessage)
}
