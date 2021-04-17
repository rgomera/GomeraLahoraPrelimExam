const pool = require('./db'); // load/import the pool libraries that was written on other file

const sql = 'UPDATE "PrelimExam"."GL_customer" SET cust_name = $1, cust_address = $2 WHERE cust_id =3 RETURNING *';
const data = ['ANDRE, JOHN K.', 'SASA DAVAO CITY'];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

// end the database connection
pool.end();
