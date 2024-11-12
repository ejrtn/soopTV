var express = require('express');
var router = express.Router();
const sql = require("./sql.js")
const mariadb = require("mariadb");

require('dotenv').config();
pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port:process.env.DB_PORT,
    connectionLimit: 100,
    charset:'utf8mb4',
    multipleStatements : true
});
async function queryDatabase(sql,parameter,res) {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query(sql,parameter)
        const jsonString = JSON.stringify(rows, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
        );
        res.send(jsonString)
    } catch (err) {
        console.error("Error: ", err);
    } finally {
        if (conn) conn.release();
    }
}

router.get('/user_id_check/:user_id', async function(req, res, next) {
    const rows = queryDatabase(sql['user']['user_id_check'], [
        req.params.user_id,
        req.params.user_id,
        req.params.user_id
    ],res);
});

router.post('/user_insert', async function(req, res, next) {
    const rows = queryDatabase(sql['user']['user_insert'],[
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
    ],res);
});

router.post('/user_login_check', async function(req, res, next) {
    
    const rows = queryDatabase(sql['user']['user_login_check'], [
        req.body.user_id,
        req.body.user_password
    ],res);
});
router.post('/login_ok', async function(req, res, next) {
    req.session.user = req.body.user_id
    res.send(req.session.user)
});


router.get('/user_channel_info/:user_id', async function(req, res, next) {
    const rows = queryDatabase(sql['user']['user_channel_info'], [
        req.params.user_id,
        req.params.user_id,
        req.params.user_id
    ],res);
});

router.post('/user_channel_comment', async function(req, res, next) {
    const rows = queryDatabase(sql['user']['user_channel_comment'],[
        req.body.channel_comment
        , req.body.user_id
    ],res);

});

router.get('/passionate_user_list/:user_id', async function(req,res,next) {
    const rows = queryDatabase(sql['passionate_user_list']['passionate_user_list_select'],[
        req.params.user_id
    ],res);
})

router.get("/gift_balloon/:user_id", async function(req,res,next) {
    req.session.user = req.params.user_id == 'test1' ? 'test2' : 'test1'
    const rows = queryDatabase(sql['user']['gift_balloon'],[
        req.params.user_id,
        req.session.user
    ],res);
})

router.post("/gift_balloon_action", async function(req,res,next) {
    
    const rows = queryDatabase(sql['user']['minus_add_star_balloon']
        +sql['user']['update_get_star_balloon']
        +sql['live_star_balloon_open_list']['insert_live_star_balloon_open_list'],[
            req.body.star_balloon,
            req.session.user,
            req.body.star_balloon,
            req.body.get_user_id,
            req.session.user,
            req.body.get_user_id,
            req.body.star_balloon,
        ],res);
    
})

router.post("/bj_viewers_chat", async function(req,res,next) {
    const rows = queryDatabase(sql['bj_viewers']['bj_viewers_chat'],[req.body.user_id,req.session.user],res);

})

router.post("/live_user_info", async function(req,res,next) {
    const rows = queryDatabase(sql['user']['live_user_info'],[req.body.user_id,req.body.user_id],res);

})

router.post("/star_balloon_plus", async function(req,res,next) {
    const rows = queryDatabase(sql['user']['plus_add_star_balloon'],[req.body.star_balloon,req.session.user],res);
})

router.post("/select_challenge", async function(req,res,next) {
    const rows = queryDatabase(sql['challenge']['select_challenge'],[req.session.user,req.body.user_id],res);
})

router.post("/insert_challenge", async function(req,res,next) {
    const rows = queryDatabase(sql['challenge']['insert_challenge'],[
        req.session.user,
        req.body.content,
        req.body.bj_user_id,
        req.body.star_balloon,
        req.body.limit_time,
    ],res);
})

module.exports = router;