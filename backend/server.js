const express = require('express');
const path = require('path');
const app = express();


const dbConnect = require('./db/connectDb');

const connectionWdb = dbConnect("mongodb://127.0.0.1:27017");
connectionWdb.connect()

app.locals.collection = connectionWdb.getDb("app").collection("exercises")
const apiRoutes = require("./routes/apiRoutes")

app.use(express.static(path.join(__dirname, '../frontend/public')));
app.use(express.json())







app.use('/api', apiRoutes)

















app.use((req, res) => {
    res.status(404).send("Error 404, page not found");
})










app.listen(3000, () => console.log('Server is up on port http://localhost:3000'));



process.on("SIGINT", () => {
    connectionWdb.disconnect()
    process.exit()
})