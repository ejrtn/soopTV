const express = require('express')
const app = express();
const server = require('http').createServer(app);
const port = 3000
const api = require("./api.js")
const bodyParser = require('body-parser')
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const sessionStore = new MySQLStore({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port:process.env.DB_PORT
});                    
app.use(session({                                             
    secret:"my_secret",
    resave:false,
    saveUninitialized:true,
    store: sessionStore                                         
}))


app.use('/static', express.static('public'));
app.use(bodyParser.json())
app.use("/api",api)

server.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

