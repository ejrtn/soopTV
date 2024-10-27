
module.exports = {
    user : {
        user_insert: "INSERT INTO soop.`user`("
                    + "user_id,"
                    + "user_password,"
                    + "user_nickname,"
                    + "channel_comment,"
                    + "user_name,"
                    + "birth_date,"
                    + "gender,"
                    + "email,"
                    + "advertisement_email,"
                    + "advertisement_sms,"
                    + "advertisement_sms_night"
                    + ")VALUES(?,?,?,?,?,?,?,?,?,?,?)",

                    
        
        get_star_ballloon_update : "UPDATE soop.`user` SET get_star_balloon=? WHERE user_id=?",

        add_star_balloon_update : "UPDATE soop.`user` SET add_star_balloon=? WHERE user_id=?",

        today_get_star_balloon_update :  "UPDATE soop.`user` SET today_get_star_balloon=? WHERE user_id=?",

        user_password_update :  "UPDATE soop.`user` SET user_password=? WHERE user_id=?",

        user_nickname_update :  "UPDATE soop.`user` SET user_nickname=? WHERE user_id=?",

        advertisement_email_update :  "UPDATE soop.`user` SET advertisement_email=? WHERE user_id=?",

        advertisement_sms_update :  "UPDATE soop.`user` SET advertisement_sms=? WHERE user_id=?",

        advertisement_email_update :  "UPDATE soop.`user` SET advertisement_email=? WHERE user_id=?",

        user_nickname_check : "SELECT user_nickname from soop.`user` where user_nickname=?",

        user_channel_info : "SELECT"
                            + " *"
                            + " from("
                            +   " SELECT"
                            +       " user_id,"
                            +       " user_nickname,"
                            +       " channel_name,"
                            +       " channel_comment,"
                            +       " CONCAT(star_cnt,'명') as star_cnt,"
                            +       " CONCAT(subscribe_cnt,'명') as subscribe_cnt,"
                            +       " CONCAT(fan_cnt,'명') as fan_cnt,"
                            +       " CONCAT(suport_cnt,'명') as suport_cnt,"
                            +       " DATE_FORMAT(create_date,'%Y-%m-%d') as create_date,"
                            +       " CONCAT(total_play_cnt_talk+total_play_cnt_game+total_play_cnt_sport+total_play_cnt_mobile,'시간') as total_play_cnt,"
                            +       " CONCAT(total_in_user_cnt,'명') as total_in_user_cnt,"
                            +       " cast(total_up_cnt as char) as total_up_cnt,"
                            +       " cast(today_up_cnt as char) as today_up_cnt,"
                            +       " cast(total_visit_cnt as char) as total_visit_cnt,"
                            +       " cast(today_visit_cnt as char) as today_visit_cnt,"
                            +       " DATE_FORMAT(last_play_date,'%Y-%m-%d %H:%m') as last_play_date ,"
                            +       " CASE"
                            +           " WHEN total_play_cnt_mobile = 0"
                            +           " THEN ''"
                            +           "else CONCAT(cast(rank() over(ORDER BY total_play_cnt_mobile desc) as char),'위')"
                            +       "END as total_play_cnt_mobile_rank,"
                            +       " CASE"
                            +           " WHEN total_play_cnt_talk = 0"
                            +           " THEN ''"
                            +           "else CONCAT(cast(rank() over(ORDER BY total_play_cnt_talk desc) as char),'위')"
                            +       "END as total_play_cnt_talk_rank,"
                            +       " CASE"
                            +           " WHEN total_play_cnt_game = 0"
                            +           " THEN ''"
                            +           "else CONCAT(cast(rank() over(ORDER BY total_play_cnt_game desc) as char),'위')"
                            +       "END as total_play_cnt_game_rank,"
                            +       " CASE"
                            +           " WHEN total_play_cnt_sport = 0"
                            +           " THEN ''"
                            +           "else CONCAT(cast(rank() over(ORDER BY total_play_cnt_sport desc) as char),'위')"
                            +       "END as total_play_cnt_sport_rank,"
                            +       " CONCAT(cast(rank() over(ORDER BY total_up_cnt desc) as char),'위') as total_up_cnt_rank ,"
                            +       " CONCAT(cast(rank() over(ORDER BY star_cnt desc) as char),'위') as star_cnt_rank ,"
                            +       " CONCAT(cast(rank() over(ORDER BY total_play_cnt_talk+total_play_cnt_game+total_play_cnt_sport+total_play_cnt_mobile desc) as char),'위') total_play_cnt_rank,"
                            +       " CONCAT(cast(rank() over(ORDER BY ad_balloon desc) as char),'위') as ad_balloon_rank"
                            +   " from soop.`user`"
                            + " )a"
                            + " where user_id=?",

        user_id_check : "SELECT user_id from soop.`user` where user_id=? or user_nickname=? or channel_name=?",

        user_login_check : "SELECT user_id from soop.`user` where user_id=? and user_password=?",

        user_channel_comment : "UPDATE soop.`user` SET channel_comment = ? where user_id = ?"
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

    user_note : {
        user_get_note_insert : "INSERT INTO soop.`user_get_note` (user_id, note_title, note_content, spam_yn) VALUES(?, ?, ?, ?)",

        custody_yn_update :  "UPDATE soop.`user_get_note` SET custody_yn=? WHERE user_id=? and custody_yn=?",

        read_time_update :  "UPDATE soop.`user_get_note` SET read_time=? WHERE user_id=? and custody_yn=?",
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

    vod : {
        vod_insert : "INSERT INTO soop.`vod` (vod_id, vod_title, play_cnt, chat_yn) VALUES(?, ?, ?, ?)",

        title_update :  "UPDATE soop.`vod` SET vod_title=? WHERE vod_id=?",
    },

    vote : {
        vote_insert : "INSERT INTO soop.`vote` (vote_id, user_id, vote_title) VALUES(?, ?, ?)",

        title_update :  "UPDATE soop.`vote` SET vote_title=? WHERE vote_id=?",
    },

    vote_list : {
        vote_list_insert : "INSERT INTO soop.`vote_list` (vote_id, comment) VALUES(?, ?)",

        vote_list_delete : "DELETE FROM soop.`vote_list` WHERE vote_id=?"
    },

    passionate_user_list : {
        passionate_user_list_select : 'SELECT'
                            +   ' a.passionate_user_id,'
                            +   ' a.user_rank,'
                            +   ' b.user_name,' 
                            +   ' user from'
                            + ' soop.passionate_user_list a'
                            + ' inner join soop.`user` b'
                            + ' on a.passionate_user_id = b.user_id'
                            + ' where a.user_id = ?'
    }  
}
