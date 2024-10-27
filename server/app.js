const express = require('express')
const app = express();
const server = require('http').createServer(app);
const port = 3000
const api = require("./api.js")
const bodyParser = require('body-parser')

app.use('/static', express.static('public'));
app.use(bodyParser.json())
app.use("/api",api)


server.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

