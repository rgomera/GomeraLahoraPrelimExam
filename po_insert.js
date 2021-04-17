const pool = require('./db'); // load/import the pool libraries that was written on other file

const sql =
    'INSERT INTO "PrelimExam"."GL_purchasedorder"(supp_id, cust_id, po_date, po_status) VALUES ($1,$2,$3,$4) RETURNING *';
const data = [2, 1, '2021-04-07', 'OK'];

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
