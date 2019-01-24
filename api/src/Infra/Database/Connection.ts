import mongoose from 'mongoose';
import Logger from '@mmartan/App/Core/Logger';
import { IConnectOptions } from '@mmartan/Domains/Interfaces/ServerInterface';

const logger = new Logger();

const connectOptions: IConnectOptions = {
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 1000,
  useNewUrlParser: true
};

const user = env('MONGODB_USER', '');
const password = env('MONGODB_PASSWORD', '');
const host = env('MONGODB_HOST', 'localhost');
const port = env('MONGODB_PORT', 27017);
const database = env('MONGODB_DATABASE', 'mmartan');

let MONGO_URI: string = `mongodb://${host}:${port}/${database}`;

if (user) {
  MONGO_URI = `mongodb://${user}:${password}@${host}:${port}/${database}`;
}

console.log(MONGO_URI);
mongodb: mongoose.connect(
  MONGO_URI,
  connectOptions
);

export const db: mongoose.Connection = mongoose.connection;

// handlers
db.on('connecting', () => {
  logger.info('MongoDB::conectando');
});

db.on('error', error => {
  logger.info(`MongoDB::conexão ${error}`);
  mongoose.disconnect();
});

db.on('connected', () => {
  logger.info('MongoDB::conectado');
});

db.once('open', () => {
  logger.info('MongoDB::conexão aberta');
});

db.on('reconnected', () => {
  logger.info('MongoDB::reconectado');
});

db.on('reconnectFailed', () => {
  logger.info('MongoDB::reconectar falhou');
});

db.on('disconnected', () => {
  logger.info('MongoDB::desconectado');
});

db.on('fullsetup', () => {
  logger.info('MongoDB::reconectando... %d');
});
