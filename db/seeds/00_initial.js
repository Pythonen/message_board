const tableNames = require('../../src/constants/tableNames');

/**
 @param {import('knex')} knex
 */
exports.seed = async (knex) => {
  await Promise.all(Object.keys(tableNames).map((table) => knex(table).del()));

  const [testBoardId] = await knex(tableNames.board)
    .insert({
      name: 'TestBoard',
    })
    .returning('id');

  const [threadId] = await knex(tableNames.thread)
    .insert({
      views: 0,
      board_id: testBoardId,
    })
    .returning('id');

  const [postID] = await knex(tableNames.post)
    .insert({
      subject: 'Test post!',
      thread_id: threadId,
    })
    .returning('id');

  await knex(tableNames.poster).insert({
    ip_addr: '127.0.0.1',
    thread_id: threadId,
    post_id: postID,
  });
};
