const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient


function createConnection(url) {
    const client = new MongoClient(url);
    let isConnected = false;
    async function connect() {
        try {

            if (isConnected) {
                console.log("Already connected");
                return;
            }
            await client.connect()
            isConnected = true

            console.log("Connected to db");

        } catch (error) {
            console.log("Error occurrder when opening connection", error);
        }
    }
    async function disconnect() {
        try {
            if (!isConnected) {
                console.log("Not connected yet");
                return
            }
            await client.close()
            isConnected = false
            console.log("Disconnected from db");

        } catch (error) {
            console.log("Error occurrder when closing connection", error);
        }
    }

    function getDb(dbName) {
        return client.db(dbName)
    }
    return { client, connect, disconnect }
}


module.exports = createConnection