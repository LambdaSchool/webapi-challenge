const express = require('express');
const server = express();
const projectRoute = require('./api/projectRoute');
const actionsRoute = require('./api/actionPost');


server.use(express.json())


server.use('/api',logger, projectRoute);
server.use('/actions', logger, actionsRoute );

server.get('/', (req, res) => {
    res.send(`<h2>Root of server</h2>`)
});


// logger
function logger(req, res, next){
    console.log(
        `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get('Origin')}`
);
    next();
}


// localhost:5000/api/projects/:id/actions
// should add projects number based on id param





module.exports = server;