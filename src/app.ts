import dotenv from 'dotenv';
import Server from './models/server';

// Comfigurando doc.env
dotenv.config();

const server = new Server();



server.listen();