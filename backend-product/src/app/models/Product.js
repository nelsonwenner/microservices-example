import Sequelize, { Model } from 'sequelize';

class Product extends Model {
    
    static init(sequelize) {
        super.init({

            product_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true 
            },
        
            product: {
                type: Sequelize.STRING,
                allowNull: false
            },
            
            price: {
                type: Sequelize.STRING,
                allowNull: false
            },

            stock: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
        }, 
        {
            sequelize
        }
        );

        return this;
    }
}

export default Product;