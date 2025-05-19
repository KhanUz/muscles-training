const http = require('http');
const path = require('path');
const fs = require('fs')
const mongodb = require('mongodb');


const url = "mongodb://127.0.0.1:27017/";
const MongoClient = mongodb.MongoClient;
const client = new MongoClient(url);

(async () => {
    try {
        await client.connect();
        console.log("connected to mongo");
    } catch (error) {
        console.error(error)
    }
})();

const db = client.db("app");
createServerWithContext({ db });


function getRequestBody(req) {
    return new Promise((resolve, reject) => {
        let data = [];

        req.on('data', chunk => data.push(chunk));
        req.on('end', () => resolve(Buffer.concat(data).toString()));
        req.on('error', reject);
    });
}


function createServerWithContext(context) {
    return http.createServer(async (req, res) => {
        const filePath = path.join(__dirname, req.url.substring(1))
        console.log(fs.existsSync(filePath), 1, filePath);

        if (fs.existsSync(filePath)) {

            res.write(await fs.promises.readFile(filePath))
            res.end()
        } else if (req.method === "POST" && req.url === "/api/addExercise") {
            const body = await JSON.parse(await getRequestBody(req));
            console.log(body);
            context.db.collection("exercises").insertOne(body);
            res.end()
        } else {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Not Found");
        }
    }).listen(3000, () => {
        console.log("server is running on server http://localhost:3000");
    })
}

process.on("SIGINT", () => {
    console.log("Closing app and db");
    client.close()
    process.exit()
})
