import * as jsonServer from 'json-server';
import { Express } from 'express';

import * as fs from 'fs';
import * as https from 'https';

const server: Express = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
 

server.use(router);

const options = {
  cert: fs.readFileSync('./backend/keys/cert.pem'),
  key: fs.readFileSync('./backend/keys/key.pem')
}

const port = 3001;
https.createServer(options, server).listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}/`);
});
