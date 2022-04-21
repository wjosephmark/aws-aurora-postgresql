// IMPORTS
require("dotenv").config();
const { Client } = require("pg");

const queryCentric = async (query) => {
  var response = {};

  var clientOptions = {
    host: process.env.CENTRIC_HOST,
    user: process.env.CENTRIC_USER,
    password: process.env.CENTRIC_PASSWORD,
    database: process.env.CENTRIC_DATABASE,
    port: process.env.CENTRIC_PORT,
  };

  const client = new Client(clientOptions);

  client.connect();

  await new Promise((resolve, reject) => {
    client.query(query, (err, res) => {
      if (err) {
        console.log(err);
        client.end();
        reject("Error pushing data to aurora");
      } else {
        response = res;
        client.end();
        resolve("Query passed to aurora successfully");
      }
    });
  });

  return response;
};

const handler = async () => {
  var query = "SELECT * FROM staging.staging_ariba_testing";

  var centricResponse = await queryCentric(query);

  console.log(centricResponse);
};

handler();
