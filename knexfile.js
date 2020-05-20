module.exports = {
    development: {
        client: 'mysql',
        version: '5.7',
        connection: {
            host : process.env.DB_HOST,
            user : process.env.DB_USER,
            password : process.env.DB_PASS,
            database : 'sysfar'
  }
    }
};