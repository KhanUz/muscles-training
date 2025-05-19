require('dotenv').config()

const express = require('express');
const path = require('path');
const app = express();


const dbConnect = require('./db/connectDb');
const connectionWdb = dbConnect(process.env.DB_URL);
connectionWdb.connect()

app.locals.collection = connectionWdb.getDb("app").collection("exercises")

const apiRoutes = require("./routes/apiRoutes")
const API3rdParty = require("./routes/3rdPartApi")


app.use(express.static(path.join(__dirname, '../frontend/public')));
app.use(express.json())







app.use('/api', apiRoutes)


app.use("/3rdPartyAPI", API3rdParty)














app.use((req, res) => {
    res.status(404).send("Error 404, page not found");
})










app.listen(process.env.PORT, () => console.log('Server is running'));



process.on("SIGINT", () => {
    connectionWdb.disconnect()
    process.exit()
})