const express = require('express');

const router =  express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('in get route')
    let queryText = 'SELECT * FROM feedback;';
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('Error making query', err);
        res.sendStatus(500);
    })
})


module.exports = router;