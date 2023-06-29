const express = require("express");
const path = require("path");

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const app = express();

module.exports = app;

const dbPath = path.join(__dirname, "cricketTeam.db");

let db = null;

app.get("/players/", async (request, response) => {
  const getPlayersQuery = `
    SELECT
      *
    FROM
      cricket_team;`;
  const playersArray = await db.all(getPlayersQuery);
  console.log(playersArray);
  response.send(playersArray);
});

app.listen(3000);
