const express = require('Express');

const routes = express.Router();

routes.get('/', (req, res)=>{
    return res.json({hello: 'World'})
});

module.exports = routes;