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

router.delete('/:id', (req, res) => {
    console.log(req.params)
let reqId = req.params.id;
console.log('Delete request for id', reqId)
const queryText = `SELECT * FROM feedback WHERE id=$1;`;
pool.query(queryText, [reqId])
.then((result) => {
    res.send(result.rows);
}).catch((error) => {
    console.log('Error making database query DELETE', error);
    res.sendStatus(500)
})
})


module.exports = router;