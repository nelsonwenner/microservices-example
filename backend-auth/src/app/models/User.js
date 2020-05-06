import Sequelize, { Model } from 'sequelize';

class User extends Model {
    
    static init(sequelize) {
        super.init({
            
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true 
            },
        
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },

            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            
            password: {
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

export default User;