var express = require('express');
var router = express.Router();
const sql = require("./sql.js")
const conn = require("./db.js");

router.get('/user_id_check/:user_id', async function(req, res, next) {
    conn.query(sql['user']['user_id_check'],[req.params.user_id],(err,rows) => {
        res.send({'result':rows})
    })
});

router.post('/user_insert', async function(req, res, next) {
    conn.query(sql['user']['user_insert'],[
        req.body.user_id,
        req.body.user_password,
        req.body.user_name,
        req.body.birth_date,
        req.body.gender,
        req.body.email,
        req.body.advertisement_email,
        req.body.advertisement_sms,
        req.body.advertisement_sms_night
    ],(err,rows) => {
        res.send({'result':rows})
    })
});

router.post('/user_login_check', async function(req, res, next) {
    conn.query(sql['user']['user_login_check'],[req.body.user_id,req.body.user_password],(err,rows) => {
        res.send({'result':rows})
    })
});


router.get('/user_channel_info/:user_id', async function(req, res, next) {
    conn.query(sql['user']['user_channel_info'],[req.params.user_id],(err,rows) => {
        res.send({'result':rows})
    })
});


module.exports = router;