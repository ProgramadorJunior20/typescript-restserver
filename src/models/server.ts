import express, { Application } from 'express';
import userRoutes from '../routes/usuario.routes';

import cors from 'cors';
import morgan from 'morgan';



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
        this.middlewares();
        this.routes();
    }

    //TODO: conectar base de datos

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