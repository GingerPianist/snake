const WebSocket = require("ws");

let currentGameIndex = 0;
let currentClientIndex = 0;
const gameOverview = {};
const clients = {};

const updateState = () => {
    for (client of Object.values(clients)) {
        client.send(
            JSON.stringify({ type: "stateUpdate", value: gameOverview })
        );
    }
};

const addGame = () => {
    const newGameIndex = currentGameIndex;

    gameOverview[newGameIndex] = {
        name: "Monisiowa gra",
        playerCount: 10,
    };

    updateState();

    currentGameIndex++;
};

const addClient = (newClient) => {
    const newClientIndex = currentClientIndex;
    clients[newClientIndex] = newClient;
    newClient.send(JSON.stringify({ type: "clientId", value: newClientIndex }));
    newClient.send(
        JSON.stringify({ type: "stateUpdate", value: gameOverview })
    );

    newClient.on("close", () => {
        removeClient(newClientIndex);
    });

    console.log("added", currentClientIndex, Object.keys(clients));
    currentClientIndex++;
};

const removeClient = (clientIndex) => {
    delete clients[clientIndex];
    console.log("removed", clientIndex, Object.keys(clients));
};

const startServer = (mainServer) => {
    const server = new WebSocket.Server({
        server: mainServer,
        path: "/gameOverview",
    });

    server.on("connection", (newClient) => {
        addClient(newClient);
    });

    setInterval(() => addGame(), 5000);
};

module.exports = {
    startServer,
};
