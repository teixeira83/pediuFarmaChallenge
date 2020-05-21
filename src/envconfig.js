require('dotenv').config();

function checkVariables() {
    if (process.env.DB_DATABASE === undefined ||
        process.env.DB_HOST === undefined ||
        process.env.DB_PORT === undefined ||
        process.env.DB_USER === undefined ||
        process.env.DB_PASS === undefined) {
        return false;
    } else {
        return true;
    }
}

checkVariables() === false &&
    console.log(`> Configuration ERROR\n===> Favor verificar as variavéis de ambiente...`);