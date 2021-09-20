# Getting started with the node project

This is a sample boiler plate for basic node project using Typescript, We are using Bookshelf in this project which is an ORM built on top of Knex. This can used with multiple databases(PostgreSQL, MySQL, and SQLite3).

### Prerequisites
- Install NodeJS (Latest LTS version - along with npm)
- Install any database (PostgreSQL, MySQL)

### Setup

1. Cone the code from the repo.
2. Run **npm install** to install all the dependencies.
3. Create a Knex file. **_npm run knex_**
4. Create or modify entry for development, with database enteries as per your requirements.

```
// update with your config settings
module.epxorts = {
  development: {
    client: 'mysql',
    connection: {
      host     : '127.0.0.1',
      user     : '-----',
      password : '******',
      database : 'test',
      charset  : 'utf8',
      insecureAuth : true
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}
```
### Running the code

1. `npm run dev` should run the code at this point.

## Available Scripts

In the project directory you can run

### `npm install`

Installs all the dependencies of theproject

### `npm run dev`

Runs the application in development mode using nodemon on port 56645.

### `npm start`

This command will first build the application then will start the build project

### `npm build`

This will build the code

### `npm run test`

This will run all the test cases in your application

### `npm run migrate`

This will run all the migrations of the migrate folder

### `npm run migrate:make`

This is used to create a new migration

### `npm run migrate:rollback`

This is used to revert the last migration

### `npm run seed`

This is used to create seed file

### `npm run seed:make`

This is used to run all the seeds

### `npm run knex`

To create a knex file from scratch


## Features Included ##
1. Node Rest API Boilerplate using typescript
2. Logger
3. Authentication Module
4. MVC Architecture
5. Database Support (PostgreSQL, MySQL, and SQLite3)
6. Testing

