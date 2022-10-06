const mongoose = require('mongoose');

const { DB_HOST, DB_PASSWORD, DB_USER } = process.env;

/**
 * @function connect
 * @description used to connect app to the mongodb
 */
async function connect() {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`,
    );
    console.log('mongodb connected successfully');
  } catch (error) {
    console.error(error);
  }
}

connect();
