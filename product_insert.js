const pool = require('./db'); // load/import the pool libraries that was written on other file

const sql = 'INSERT INTO "PrelimExam"."GL_product"(supp_id, prod_name, prod_price) VALUES ($1,$2,$3) RETURNING *';
const data = [2, 'Bag', 200];

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
