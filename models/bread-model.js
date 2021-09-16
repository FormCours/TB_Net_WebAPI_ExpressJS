const mssql = require('mssql');
const { createConnection } = require('./db-connector');

module.exports = {

    getAll: async () => {
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
    },

    insert: async ({ name, price, weight, category }) => {
        let db;
        try {
            db = await createConnection();

            const querySQL = 'INSERT INTO Bread (name, price, weight, category)'
                + ' OUTPUT inserted.*'
                + ' VALUES (@name, @price, @weight, @category)'

            const request = new mssql.Request(db);
            request.input('name', mssql.NVarChar, name);
            request.input('price', mssql.Decimal, price);
            request.input('weight', mssql.Decimal, weight);
            request.input('category', mssql.NVarChar, category);

            const result = await request.query(querySQL);

            console.log(result);
            return result.recordset[0].BreadId;
        }
        finally {
            db?.close();
        }
    },

    update: async (breadId, { name, price, weight, category }) => {
        let db;

        try {
            db = await createConnection();

            const queryUpdate = 'UPDATE Bread'
                + ' SET name = @name,'
                + '     price = @price,'
                + '     weight = @weight,'
                + '     category = @category'
                + ' WHERE BreadId = @breadId';

            const request = new mssql.Request(db);
            request.input('breadId', mssql.Int, breadId);
            request.input('name', mssql.NVarChar, name);
            request.input('price', mssql.Decimal, price);
            request.input('weight', mssql.Decimal, weight);
            request.input('category', mssql.NVarChar, category);

            const result = await request.query(queryUpdate);

            return result.rowsAffected[0] === 1;
        }
        finally {
            db?.close();
        }
    },

    delete: async (breadId) => {
        let db;

        try {
            db = await createConnection();
        
            const queryDelete = 'DELETE FROM Bread WHERE BreadId = @breadId';

            const request = new mssql.Request(db);
            request.input('breadId', mssql.Int, breadId);

            const result = await request.query(queryDelete);
            return result.rowsAffected[0] === 1;
        }
        finally {
            db?.close();
        }

    }

}