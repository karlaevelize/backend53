"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "Vacation List",
          createdAt: new Date(),
          updatedAt: new Date(),  
        },
        {
          name: "Grocery List",
          createdAt: new Date(),
          updatedAt: new Date(),  
        }, 
        {
          name: "Study List",
          createdAt: new Date(),
          updatedAt: new Date(),  
        }, 
        {
          name: "Shopping List",
          createdAt: new Date(),
          updatedAt: new Date(),  
        }, 
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};
