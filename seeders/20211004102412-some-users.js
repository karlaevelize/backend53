"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Karla",
          email: "karla@karla.com",
          phone: 1234567,
          password: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Anna",
          email: "anna@anna.com",
          phone: 1234567,
          password: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John",
          email: "john@john.com",
          phone: 1234567,
          password: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Erol",
          email: "erol@erol.com",
          phone: 1234567,
          password: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alex",
          email: "alex@alex.com",
          phone: 1234567,
          password: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
