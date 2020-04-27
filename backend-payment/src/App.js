import './app/controllers/ConsumerController';
import { config } from 'dotenv';
import Express from 'express';
import cors from 'cors';

config();

class App {
    constructor() {
        this.server = Express();
        this.middlewares();
    }

    middlewares() {
        this.server.use(Express.json());
        this.server.use(cors());
    }
}

export default new App().server;