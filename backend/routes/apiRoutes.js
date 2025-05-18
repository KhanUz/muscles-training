const express = require("express")

const apiRoutes = express.Router();

apiRoutes.get("/muscle/:muscle", async (req, res) => {
    try {
        const muscle = req.params["muscle"]
        const resfromDb = await req.app.locals.collection.find({ muscle: muscle }).toArray()
        res.status(200).send(JSON.stringify(resfromDb))
    } catch (error) {
        console.log("Error occurred when sending info", error);
        res.status(404).send(JSON.stringify({ message: "Error occurred when sending info about muscle" }))
    }
})

module.exports = apiRoutes