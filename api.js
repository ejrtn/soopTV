var express = require('express');
var router = express.Router();
const sql = require("./sql.js")
const conn = require("./db.js");

router.get('/user_nickname_select/:user_id', async function(req, res, next) {
    conn.query(sql['user']['user_nickname_select'],[req.params.user_id],(err,rows) => {
        if(err) res.send({'result':err})
        else res.send({'result':rows})
    })
});

module.exports = router;