const express = require("express")

const apiRoutes = express.Router();

apiRoutes.get("/muscle/:muscle", async (req, res) => {
    console.log(JSON.stringify({ message: req.params['muscle'] }));
    res.send(JSON.stringify({ message: req.params['muscle'] }))
})

module.exports = apiRoutes