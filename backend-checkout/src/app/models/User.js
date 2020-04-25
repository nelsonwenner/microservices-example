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

    static associate (models) {

        /* Relations (1, N) User -> Checkout */
        this.hasMany(models.Checkout, {as: 'checkouts', foreignKey: 'user_id', onDelete: 'CASCADE'});
    }
}

export default User;