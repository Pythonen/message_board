# Message_board

Testing relational databases with Knex!

 ## To get running

You have to have docker and docker-compose installed on your machine.

Make `.env` file and add your environment variables as they are shown in `.env.sample`

`docker-compose up` to get the database running

`npm install` in root directory of this project to install dependencies

`npm run migrate` to migrate the database

`npm run rollback` to rollback 

`npm run seed` to seed the database with some initial info

`npm run dev` to run the express server on `localhost:5000`

Visual interface for the database should be running in `localhost:8090`
 
