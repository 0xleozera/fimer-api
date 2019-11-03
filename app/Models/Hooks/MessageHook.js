'use strict'

const Ws = use('Ws')

const MessageHook = (exports = module.exports = {})

MessageHook.method = async modelInstance => {}

MessageHook.sendWs = async message => {
  const topic = Ws.getChannel('messages:*').topic(
    `messages:${message.match_id}`
  )

  topic && topic.broadcast('message', message)
}
