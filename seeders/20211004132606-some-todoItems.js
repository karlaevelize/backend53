"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Pack",
          deadline: "Friday",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),  
        },
        {
          task: "Get tomatoes",
          deadline: "Today",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),  
        },
        {
          task: "Learn React",
          deadline: "Last Week",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),  
        },
        {
          task: "Buy Winter clothes",
          deadline: "November",
          important: false,
          createdAt: new Date(),
          updatedAt: new Date(),  
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
