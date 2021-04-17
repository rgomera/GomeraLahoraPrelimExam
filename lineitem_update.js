const pool = require('./db'); // load/import the pool libraries that was written on other file

const sql = 'UPDATE "PrelimExam"."GL_lineitem" SET li_quantity = $1, li_price = $2 WHERE po_id =1 RETURNING *';
const data = [6, 6000];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

// end the database connection
pool.end();
