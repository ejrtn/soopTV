
module.exports = {
    user : {
        user_insert: "INSERT INTO soop.`user`("
                    + "user_id"
                    + "user_password"
                    + "user_name"
                    + "user_nickname"
                    + "birth_date"
                    + "gender"
                    + "email"
                    + "phon"
                    + "advertisement_email"
                    + "advertisement_sms"
                    + "advertisement_sms_night"
                    + "add_star_balloon"
                    + "get_star_balloon"
                    + "today_get_star_balloon"
                    + ")VALUES(?,?,?,?,?,?,?,?,?,?,?,0,0,0)",
        
        get_star_ballloon_update : "UPDATE soop.`user` SET get_star_balloon=? WHERE user_id=?",

        add_star_balloon_update : "UPDATE soop.`user` SET add_star_balloon=? WHERE user_id=?",

        today_get_star_balloon_update :  "UPDATE soop.`user` SET today_get_star_balloon=? WHERE user_id=?",

        user_password_update :  "UPDATE soop.`user` SET user_password=? WHERE user_id=?",

        user_nickname_update :  "UPDATE soop.`user` SET user_nickname=? WHERE user_id=?",

        advertisement_email_update :  "UPDATE soop.`user` SET advertisement_email=? WHERE user_id=?",

        advertisement_sms_update :  "UPDATE soop.`user` SET advertisement_sms=? WHERE user_id=?",

        advertisement_email_update :  "UPDATE soop.`user` SET advertisement_email=? WHERE user_id=?",

        user_nickname_select : "SELECT user_nickname from soop.`user` where user_id=?",
    },

    bj_viewers : {
        bj_viewers_star_user_id_insert : "INSERT INTO soop.`bj_viewers` (user_id, star_user_id) VALUES(?,?)",
        
        bj_viewers_hiding_user_id_insert : "INSERT INTO soop.`bj_viewers` (user_id, hiding_user_id) VALUES(?,?)",
        
        bj_viewers_subscribe_user_id_insert : "INSERT INTO soop.`bj_viewers` (user_id, subscribe_user_id, subscribe_nickname) VALUES(?,?,?)",

        bj_viewers_star_user_id_cnt : "select count(*) as cnt from soop.`bj_viewers` where user_id : ? and hiding_user_id : ?",
        
        bj_viewers_hiding_user_id_cnt : "select count(*) as cnt from soop.`bj_viewers` where user_id : ? and star_user_id : ?",
        
        bj_viewers_subscribe_user_id_cnt : "select count(*) as cnt from soop.`bj_viewers` where user_id : ? and subscribe_user_id : ?",
        
        star_user_id_update :  "UPDATE soop.`bj_viewers` SET star_user_id=? WHERE user_id=?",

        hiding_user_id_update :  "UPDATE soop.`bj_viewers` SET hiding_user_id=? WHERE user_id=?",

        subscribe_user_id_update :  "UPDATE soop.`bj_viewers` SET subscribe_user_id=? WHERE user_id=?",

    },

    user_get_note : {
        user_get_note_insert : "INSERT INTO soop.`user_get_note` (user_id, note_title, note_comment, spam_yn) VALUES(?, ?, ?, ?)",

        custody_yn_update :  "UPDATE soop.`user_get_note` SET custody_yn=? WHERE user_id=? and custody_yn=?",

        read_time_update :  "UPDATE soop.`user_get_note` SET read_time=? WHERE user_id=? and custody_yn=?",
    },

    user_put_note : {
        user_put_note_insert : "INSERT INTO soop.`user_put_note` (user_id, note_title, note_comment) VALUES(?, ?, ?)",
    },

    blck_list : {
        black_list_insert : "INSERT INTO soop.`black_list` (user_id, black_user_id) VALUES(?, ?)",

        read_time_update :  "UPDATE soop.`black_list` SET delete_yn=? WHERE user_id=? and black_user_id : ?",
    },

    stop_chating : {
        stop_chating_insert : "INSERT INTO soop.`stop_chating` (user_id, stop_user_id) VALUES(?, ?)",

        stop_chating_delete : "DELETE FROM soop.`stop_chating` WHERE user_id=? AND stop_user_id=?",

        stop_chating_truncate : "TRUNCATE soop.`stop_chating`",
    },

    live_info : {
        live_info_insert : "INSERT INTO soop.`live_info` (live_id, title, tag, category, resolution) VALUES(?+' '+date_format(NOW(), '%Y-%m-%d %T'), ?, ?, ?, ?)",

        live_id_update :  "UPDATE soop.`live_info` SET live_id=? WHERE live_id=?",

        title_update :  "UPDATE soop.`live_info` SET title=? WHERE live_id=?",

        tag_update :  "UPDATE soop.`live_info` SET tag=? WHERE live_id=?",

        category_update :  "UPDATE soop.`live_info` SET category=? WHERE live_id=?",

        resolution_update :  "UPDATE soop.`live_info` SET resolution=? WHERE live_id=?",
    },

    spam_note : {
        spam_note_insert : "INSERT INTO soop.`spam_note` (user_id) VALUES(NULL)",
    },

    void : {
        void_insert : "INSERT INTO soop.`void` (void_id, title, play_cnt, chat_yn) VALUES(?, ?, ?, ?)",

        title_update :  "UPDATE soop.`void` SET title=? WHERE void_id=?",
    },

    vote : {
        vote_insert : "INSERT INTO soop.`vote` (vote_id, user_id, vote_title) VALUES(?, ?, ?)",

        title_update :  "UPDATE soop.`vote` SET vote_title=? WHERE vote_id=?",
    },

    vote_list : {
        vote_list_insert : "INSERT INTO soop.`vote_list` (vote_id, comment) VALUES(?, ?)",

        vote_list_delete : "DELETE FROM soop.`vote_list` WHERE vote_id=?"
    }

}
