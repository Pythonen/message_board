const db = require('../../db');
const tableNames = require('../../constants/tableNames');

const fields = ['id', 'name'];

module.exports = {
  find() {
    return db(tableNames.board).select(fields);
  },
  get(name) {
    return db(tableNames.board).select(fields).where({ name }).first();
  },
};
