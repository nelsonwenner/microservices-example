'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('products', { 
      
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
        }
      
      });
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.dropTable('products');

  }
};