import Sequelize, { Model } from 'sequelize';

class Checkout extends Model {
    
    static init(sequelize) {
        super.init({
            
            checkout_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true 
            },

            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'users', key: 'user_id'},
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            
            product_id: {
                type: Sequelize.STRING,
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

export default Checkout;