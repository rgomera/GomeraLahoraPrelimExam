const pool = require('./db'); // load/import the pool libraries that was written on other file

// use the pool's query method
pool.query('SELECT * FROM "PrelimExam"."GL_customer"', (err, res) => {
    try {
        console.log(res.rows);
    } catch (err) {
        console.log(err.message);
    }
});

// end the database connection
pool.end();
