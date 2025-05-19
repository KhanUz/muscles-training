const express = require('express');

const apiRoutes = express.Router();

apiRoutes.get("/", express.urlencoded({ extended: true }), async (req, res) => {
    try {



        const msg = await fetch(`https://api.api-ninjas.com/v1/exercises?${req.originalUrl.split("?")[1]}`, {
            method: "GET", headers: {
                'X-Api-Key': process.env.API_KEY,
                "accept": "application/json"
            }
        });
        const nodeStream = require('stream').Readable.from(msg.body);
        nodeStream.pipe(res);
        res.status(200)
    } catch (error) {
        console.log("Error occurred when sending info", error);
        res.status(404).send(JSON.stringify({ message: "Error occurred when sending info about muscle" }))
    }
})


module.exports = apiRoutes