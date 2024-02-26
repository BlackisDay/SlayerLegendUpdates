const db = require('../config/connection');
const {Users} = require('../models');
const cleanDB = require('./cleanDB');
const userNames = require('./userNames');

db.once('open', async () => {

  await cleanDB();

  await Users.insertMany(userNames);

  console.log('Database seeded!');
  process.exit(0);

});
