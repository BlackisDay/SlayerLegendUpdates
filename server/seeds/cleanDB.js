const models = require('../models');
const db = require('../config/connection');

module.exports = //Deleting all Products in the database
  async () => {
    await db.once('open', async () => {
      await models.Product.deleteMany({});
      console.log('Database cleaned!');
      process.exit(0);
    });
  };
