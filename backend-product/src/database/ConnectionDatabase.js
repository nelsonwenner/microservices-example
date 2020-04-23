import Product from '../app/models/Product';
import { success } from 'consola';
import Sequelize from 'sequelize';

const models = [Product];

class ConnectionDatabase {
    constructor() {
        this.init();
    }
    
    init() {
        
        this.connection = new Sequelize(databaseConfig);
      
        models
        .map(model => model.init(this.connection))
        .map(model => model.associate && model.associate(this.connection.models));

        this.connection.authenticate().then((msg) => {
            success({message: `\nDatabase started with successfully!\n`, badge: true})
        });
    }
}

export default new ConnectionDatabase();