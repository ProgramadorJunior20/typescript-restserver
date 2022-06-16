import express, { Application } from 'express';
import userRoutes from '../routes/usuario.routes';

import cors from 'cors';
import morgan from 'morgan';
import db from '../database/connection';



class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || '8000';


        // Metodos Iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {

        try {
            
            await db.authenticate();
            console.log("Database omline");

        } catch (err) {
            throw new Error(`${ err }`);
        }
    }

    middlewares() {

        // CONFIG CORS
        this.app.use( cors() );

        // Config Lectura Del Body
        this.app.use( express.json() );

        // Config Carpeta Publica
        this.app.use( express.static('public') );

        // CONFIG MORGAN
        this.app.use( morgan('dev') );

    }

    routes() {
        
        this.app.use( this.apiPaths.usuarios, userRoutes );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log( 'Servidor corriento en puerto ' + this.port );
        })
    }
}

export default Server;