const loadConfig = require('../config')
const mssql = require('mssql');

const {dbConnection} = loadConfig();

module.exports = {

    createConnection : async () => {
        const db = await mssql.connect(dbConnection);
        return db
    },

    testConnection: async () => {
        try {
            const db = await mssql.connect(dbConnection);
            db.close()
        }
        catch(err) {
            console.error('SQL Error : ' + err.message);
            process.exit();
        }
    }

}