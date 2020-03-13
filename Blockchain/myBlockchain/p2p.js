
const crypto   = require('crypto')
const Swarm    = require('discovery-swarm')
const defaults = require('dat-swarm-defaults')
const getPort  = require('get-port')

const peers = {}
let   connSeq = 0
let   channel = 'myBlockchain'

const myPeerId = crypto.randomBytes(32)
console.log(`myPeerId: ${myPeerId.toString('hex')}`)

const config = defaults({
  id: myPeerId
})

const swarm = Swarm(config);

(async () => {
  const port = await getPort()

  swarm.listen(port)
  console.log(`Listening on port ${port}`)

  swarm.join(channel)
  swarm.on('connection', (conn, info) => {
    const seq = connSeq
    const peerId = info.id.toString('hex')
//    console.log(`Connected #${seq} to peer ${peerId}`)
    console.log(`myPeerId     : ${myPeerId.toString('hex')}`)
    console.log(`othersPeerIds: ${Object.keys(peers)}`)

    if (info.initiator) {
      try {
        conn.setKeepAlive(true, 600)
      } catch (exception) {
        console.log(`*** exception ${exception}`)
      }
    }

    conn.on('data', data => {
      let message = JSON.parse(data)
      console.log('--- Received Message start ---')
      console.log(`  from: ${peerId.toString('hex')}`)
      console.log(`  to  : ${peerId.toString(message.to)}`)
      console.log(`  my  : ${myPeerId.toString('hex')}`)
      console.log(`  type: ${JSON.stringify(message.type)}`)
      console.log('--- Received Message end ---')
    })

    conn.on('close', () => {
//      console.log(`Connection ${seq} closed, peerId: ${peerId}`)
      if (peers[peerId].seq === seq) {
        delete peers[peerId]
      }
    })

    if (!peers[peerId]) {
      peers[peerId] = {}
    }
    peers[peerId].conn = conn
    peers[peerId].seq  = seq
    connSeq++
  })
})()


setTimeout(() => {
  writeMessageToPeers('hello', null)
}, 10000)

writeMessageToPeers = (type, data) => {
  for (let id in peers) {
    console.log('--- writeMessageToPeers start ---')
    console.log(`  type: ${type}, to: ${id}`)
    console.log('--- writeMessageToPeers start ---')
    sendMessage(id, type, data)
  }
}

writeMessageToPeerToId = (toId, type, data) => {
  for (let id in peers) {
    if (id === toId) {
      console.log('--- writeMessageToPeerToId start ---')
      console.log(`  type: ${type}, to: ${id}`)
      console.log('--- writeMessageToPeerToId start ---')
      sendMessage(id, type, data) 
    }
  }
}

sendMessage = (id, type, data) => {
  peers[id].conn.write(JSON.stringify({
    to: id,
    from: myPeerId,
    type: type,
    data: data
  }))
}
