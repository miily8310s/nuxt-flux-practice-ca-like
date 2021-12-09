import express from 'express';
// TODO: @types/corsインストールする
const cors = require('cors');

const server = express();
server.use(cors());

server.listen(8881, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 8881');
});
