"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_routes_1 = __importDefault(require("../routes/usuario.routes"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios'
        };
        this.app = express_1.default();
        this.port = process.env.PORT || '8000';
        // Metodos Iniciales
        this.middlewares();
        this.routes();
    }
    //TODO: conectar base de datos
    middlewares() {
        // CONFIG CORS
        this.app.use(cors_1.default());
        // Config Lectura Del Body
        this.app.use(express_1.default.json());
        // Config Carpeta Publica
        this.app.use(express_1.default.static('public'));
        // CONFIG MORGAN
        this.app.use(morgan_1.default('dev'));
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriento en puerto ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map