//indicate that the code should be executed in "strict mode"
'use strict';
//importing of essentials
//Express is a node js web application framework that provides broad features for building web and mobile applications.
const express = require('express');
//provides path
const path = require('path');
//Cross-Origin Resource Sharing
//it allows us to relax the security applied to an API
const cors = require('cors');
//Node.js body parsing middleware.
// parsing the incoming request bodies in a middleware before you handle it.
const bodyParser = require('body-parser');
//router
const fileRoutes = require('./routes/file-uploads-routes');

const port = process.env.PORT || 8080;
const app = express();  //express instance
//importing database
require('./database')();
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));
app.use('/api',fileRoutes.routes);
//server running port
app.listen(port, () => console.log(`server is listening on url http://localhost: ${port}`));

