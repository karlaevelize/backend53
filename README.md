## Backend

### Setup:

1. Install the tools:

- `sequelize`
- `sequelize-cli`
- `pg` (driver so sequelize knows how to talk to postgres)

2. Init sequelize: `npx sequelize-cli init`

3. Modify config.json (to point to our new database).

4. Modify models/index.js (later).
  - change line 15 to: `sequelize = new Sequelize(config.url, config);`

## Creating a model

Command:
`npx sequelize-cli model:generate --name user --attributes name:string,email:string,password:string`

## Running the migrations so the tables get created:

Run migrations: `npx sequelize-cli db:migrate`

Undo migrations: `npx sequelize-cli db:migrate:undo:all`

## Seed files

Create a seed file: `npx sequelize-cli seed:generate --name some-users`

Run seed files `npx sequelize-cli db:seed:all`

## Queries

- We write queries to test if we can get data out 
- It's mostly useful when testing our relations
- Check if you can "findAll()" and "findByPk()"
- If everything is good, you are ready to start your server

## Start an Express Server

- `npm i express`
- 