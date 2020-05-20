require('dotenv').config();
const express = require('express');
const routes = require('./routes');

const app = express();
const port = process.env.DB_PORT

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log('application is running @ port ' + port );
});