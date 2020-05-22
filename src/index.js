const enviromentVariables = require('dotenv').config();
const envConfig = require('./envconfig');

const express = require('express');
const routes = require('./routes');

if (enviromentVariables.error) {
    throw enviromentVariables.error;
}

let env = envConfig.checkVariables(enviromentVariables.parsed)

if (env !== true) {
    console.warn(`Favor verificar a env ${env}...`)
}

const app = express();
const port = process.env.DB_PORT

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log('application is running @ port ' + port );
});
