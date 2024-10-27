var express = require('express');
var router = express.Router();
const sql = require("./sql.js")
const conn = require("./db.js");

router.get('/user_id_check/:user_id', function(req, res, next) {
    conn.query(sql['user']['user_id_check'],[req.params.user_id,req.params.user_id,req.params.user_id],(err,rows) => {
        res.send({'result':rows})
    })
});

router.post('/user_insert', function(req, res, next) {
    conn.query(sql['user']['user_insert'],[
        req.body.user_id,
        req.body.user_password,
        req.body.user_nickname,
        req.body.channel_comment,
        req.body.user_name,
        req.body.birth_date,
        req.body.gender,
        req.body.email,
        req.body.advertisement_email,
        req.body.advertisement_sms,
        req.body.advertisement_sms_night
    ],(err,rows) => {
        res.send({'result':rows.statusText})
    })
});

router.post('/user_login_check', function(req, res, next) {
    conn.query(sql['user']['user_login_check'],[req.body.user_id,req.body.user_password],(err,rows) => {
        res.send({'result':rows})
    })
});


router.get('/user_channel_info/:user_id', function(req, res, next) {
    conn.query(sql['user']['user_channel_info'],[req.params.user_id],(err,rows) => {
        res.send({'result':rows})
    })
});

router.post('/user_channel_comment', function(req, res, next) {
    conn.query(sql['user']['user_channel_comment'],[
        req.body.channel_comment
        , req.body.user_id
    ],(err,rows) => {
        res.send({'result': rows.status})
    })
});

router.get('/passionate_user_list/:user_id', function(req,res,next) {
    conn.query(sql['passionate_user_list']['passionate_user_list_select'],[req.params.user_id],(err,rows) => {
        res.send({'result':rows})
    })
})

router.get("/gift_balloon/:user_id", function(req,res,next) {
    
    conn.query(sql['user']['gift_balloon'],[req.params.user_id],(err,rows) => {
        res.send({'result':rows})
    })
})

module.exports = router;