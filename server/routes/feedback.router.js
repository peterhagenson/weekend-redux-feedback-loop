const express = require('express');

const router =  express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log("req.body", req.body)
    const newEntry = req.body;
    const queryText = `INSERT INTO feedback (feeling, understanding, support, comments)
                        VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newEntry.feeling, newEntry.understanding, newEntry.support, newEntry.comments])
    .then((result) => {
        res.sendStatus(201);
    }).catch((err) => {
        console.log('Error making query', err);
        res.sendStatus(500);
    })
})


module.exports = router;


