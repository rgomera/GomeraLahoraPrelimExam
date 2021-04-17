const pool = require('./db'); // load/import the pool libraries that was written on other file

const sql = 'UPDATE "PrelimExam"."GL_purchasedorder" SET po_status = $1 WHERE po_id =3 RETURNING *';
const data = ['NOT OK'];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

// end the database connection
pool.end();
