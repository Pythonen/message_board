const db = require('./db');

module.exports = async () => {
  console.log(process.env.NODE_ENV);
  await db.migrate.rollback();
  await db.migrate.latest();
  await db.seed.run();
};
