// app/index.js

const express = require('express');
const bodyParser = require('body-parser');
const Blockchain = require('../blockchain');
const P2pServer = require('./p2p-server');

const HTTP_PORT = process.env.HTTP_PORT || 3001; // $ HTTP_PORT=3002 npm run dev

const app = express();
const bc = new Blockchain();
const p2pServer = new P2pServer(bc);

app.use(bodyParser.json());

app.get('/blocks', (req, res) => {
  res.json(bc.chain);
});

app.post('/mine', (req, res) => {
  const block = bc.addBlock(req.body.data);
  console.log(`New block added: ${block.toString()}`);

  p2pServer.syncChains();

  res.redirect('/blocks');
});

app.listen(HTTP_PORT, () => console.log(`Listening on port: ${HTTP_PORT}`));
p2pServer.listen();

/*
On terminal 1$ npm run dev
Run instance 1 on HTTP:3001 e WS:5001

On terminal 2$ HTTP_PORT=3002 P2P_PORT=5002 PEERS=ws://localhost:5001 npm run dev
Run instance 2 on HTTP:3002 e WS:5002

On terminal 3$ HTTP_PORT=3003 P2P_PORT=5003 PEERS=ws://localhost:5001,ws://localhost:5002 npm run dev
Run instance 3 on HTTP:3003 e WS:5003
 */
