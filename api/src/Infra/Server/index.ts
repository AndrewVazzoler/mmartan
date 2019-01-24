import debug from 'debug';
import http from 'http';
import Server from './Server';
import * as serverHandlers from './ServerHandlers';

debug('mmartan:server');

const port: string | number | boolean = serverHandlers.normalizePort(
  env('PORT', '3000')
);

const host: string = env('HOST', 'localhost');

Server.set('port', port);
Server.set('host', host);

const server: http.Server = http.createServer(Server);

// server listen
server.listen({
  port,
  host
});

// server handlers
server.on('error', (error: Error) => serverHandlers.onError(error, port));
server.on('listening', serverHandlers.onListening.bind(server));
