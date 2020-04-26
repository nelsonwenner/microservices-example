'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('orders', { 
      
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
      
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.dropTable('orders');
  }
};