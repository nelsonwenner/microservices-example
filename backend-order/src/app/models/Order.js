import Sequelize, { Model } from 'sequelize';

class Order extends Model {
    
    static init(sequelize) {
        super.init({
            
            order_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true 
            },
        
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            
            product_id: {
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

export default Order;