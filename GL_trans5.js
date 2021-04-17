const pool = require('./db');

(async () => {
    const client = await pool.connect();

    try {
        // BEGIN Transaction
        await client.query('BEGIN');

        // customer order 3 productS
        const q1 = 'SELECT * FROM "PrelimExam"."GL_purchasedorder"';
        const res1 = await client.query(q1);

        // display purchase order
        res1.rows.forEach(el =>
            console.log(
                `SUPPLIER ID: ${el.supp_id}, CUSTOMER ID: ${el.cust_id}, DATE: ${el.po_date}, STATUS: ${el.po_status}`
            )
        );

        // COMMIT Transaction
        await client.query('COMMIT');
    } catch (e) {
        // failure state
        await client.query('ROLLBACK');
        throw e;
    } finally {
        // success state
        client.release();
    }
})().catch(e => console.error(e.stack));
