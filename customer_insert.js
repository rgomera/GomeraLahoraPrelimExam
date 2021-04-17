const pool = require('./db'); // load/import the pool libraries that was written on other file

const sql = 'INSERT INTO "PrelimExam"."GL_customer"(cust_name, cust_address) VALUES ($1,$2) RETURNING *';
const data = ['Andre, John K.', 'Panacan Davao City'];

// use the pool's query method
pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

// end the database connection
pool.end();
