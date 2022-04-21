// IMPORTS
require("dotenv").config();
const { Client } = require("pg");

const queryCentric = async (query) => {
  var response = {};

  const client = new Client({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
  });

  client.connect();

  await new Promise((resolve, reject) => {
    client.query(query, (err, res) => {
      if (err) {
        console.log(err);
        client.end();
        reject("Error pushing data to aurora");
      } else {
        console.log(res);
        client.end();
        resolve("Data pushed to aurora successfully");
      }
    });
  });
};

const handler = async () => {
  queryCentric();
};

handler();
