const tableNames = require('../../src/constants/tableNames');

function addDefaultColums(table) {
  table.timestamps(false, true);
}

function references(table, tableName) {
  table
    .integer(`${tableName}_id`)
    .unsigned()
    .references('id')
    .inTable(tableName)
    .onDelete('cascade');
}

/**
 @param {import('knex')} knex
 */
exports.up = async (knex) => {
  await knex.schema.createTable(tableNames.board, (table) => {
    table.increments().notNullable();
    table.string('name');
  });
  await knex.schema.createTable(tableNames.thread, (table) => {
    table.increments().notNullable();
    table.integer('views');
    references(table, 'board');
  });
  await knex.schema.createTable(tableNames.post, (table) => {
    table.increments().notNullable();
    table.text('subject').notNullable();
    addDefaultColums(table);
    references(table, 'thread');
  });
  await knex.schema.createTable(tableNames.media, (table) => {
    table.increments().notNullable();
    table.text('url').nullable();
    references(table, 'post');
  });
  await knex.schema.createTable(tableNames.poster, (table) => {
    table.increments().notNullable();
    table.text('ip_addr');
    references(table, 'thread');
    references(table, 'post');
  });
};

exports.down = async (knex) => {
  await Promise.all(
    [
      tableNames.board,
      tableNames.thread,
      tableNames.post,
      tableNames.media,
      tableNames.poster,
    ]
      .reverse()
      .map((tableName) => knex.schema.dropTable(tableName))
  );
};
