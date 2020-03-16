
const crypto   = require('crypto')
const Swarm    = require('discovery-swarm')
const defaults = require('dat-swarm-defaults')
const getPort  = require('get-port')
const chain    = require('./chain')

const peers = {}
let   connSeq = 0
let   channel = 'myBlockchain'

let   MessageType = {
  REQUEST_BLOCK: 'requestBlock',
  RECEIVE_NEXT_BLOCK: 'receiveNextBlock'
}

const myPeerId = crypto.randomBytes(32)
console.log(`myPeerId: ${myPeerId.toString('hex')}`)

const config = defaults({
  id: myPeerId
})

const swarm = Swarm(config);

(async () => {
  const port = await getPort({ port: getPort.makeRange(5000, 5100) });

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
      // console.log(`  data: ${data}`)
      console.log(`  from: ${peerId.toString('hex').substring(0,6)}\n  to  : ${myPeerId.toString('hex').substring(0,6)}\n  type: ${JSON.stringify(message.type)}`)
      console.log('--- Received Message end ---')

      switch (message.type) {
        case MessageType.REQUEST_BLOCK:
          let requestedIndex = (JSON.parse(JSON.stringify(message.data))).index;
          let requestedBlock = chain.getBlock(requestedIndex);
          console.log('-----------REQUEST_BLOCK-------------');
          if (requestedBlock) {
            writeMessageToPeerToId(peerId.toString('hex'), MessageType.RECEIVE_NEXT_BLOCK, requestedBlock);
          }
          else {
            console.log(`No block found @ index: ${requestedIndex}`);
          }
          console.log('-----------REQUEST_BLOCK-------------');
          break;

        case MessageType.RECEIVE_NEXT_BLOCK:
          let nextBlockIndex = chain.getLatestBlock().index+1;
          console.log('-----------RECEIVE_NEXT_BLOCK-------------');
          chain.addBlock(JSON.parse(JSON.stringify(message.data)));
          console.log(JSON.stringify(chain.blockchain));
          console.log(`-- request next block @ index: ${nextBlockIndex}`);
          writeMessageToPeers(MessageType.REQUEST_BLOCK, {index: nextBlockIndex});
          console.log('-----------RECEIVE_NEXT_BLOCK-------------');
          break;
      }
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

writeMessageToPeers = (type, data) => {
  for (let id in peers) {
    console.log('--- writeMessageToPeers start ---')
    console.log(`  from: ${myPeerId.toString('hex').substring(0,6)}\n  to  : ${id.toString('hex').substring(0,6)}\n  type: ${type}`)
    console.log('--- writeMessageToPeers start ---')
    sendMessage(id, type, data)
  }
}

writeMessageToPeerToId = (toId, type, data) => {
  for (let id in peers) {
    if (id === toId) {
      console.log('--- writeMessageToPeerToId start ---')
      console.log(`  from: ${myPeerId.toString('hex').substring(0,6)}\n  to  : ${id.toString('hex').substring(0,6)}\n  type: ${type}`)
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

setTimeout(() => {
  writeMessageToPeers(MessageType.REQUEST_BLOCK, { index: chain.getLatestBlock().index + 1})
}, 5000)
