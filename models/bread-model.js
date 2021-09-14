const mssql = require('mssql');
const {createConnection} = require('./db-connector');

module.exports = {

    getAll : async () => {
        const db = await createConnection();
        const result = await db.query('SELECT * FROM Bread');
        db.close();

        return result.recordset;
    },

    getById: async (id) => {
        const db = await createConnection();

        const request = new mssql.Request(db);
        request.input('id', mssql.Int, id);
        const result = await request.query('SELECT * FROM Bread WHERE BreadId = @id');

        db.close();

        return result.recordset[0];        
    }

}