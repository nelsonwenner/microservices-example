import router from './routes/index.router';
import './database/ConnectionDataBase';
import { config } from 'dotenv';
import Express from 'express';
import cors from 'cors';

config();

class App {
    constructor() {
        this.server = Express();
        
        this.middlewares();
        this.routes();
    }

    routes() {
        this.server.use(router);
    }

    middlewares() {
        this.server.use(Express.json());
        this.server.use(cors());
    }
}

export default new App().server;