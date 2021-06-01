const express = require("express");
const http = require("http");
const gameOverview = require("./gameOverview");

const app = express();

const server = http.createServer(app);

gameOverview.startServer(server);

app.get("/*", (req, res) => {
    console.log(`Requested: ${req.url}`);
    res.send("Test serwera");
});

server.listen(5000, () => {
    console.log("Server started successfully on port 5000!");
});
