-- soop.get_star_balloon_list definition

CREATE TABLE `get_star_balloon_list` (
  `to_user_id` varchar(255) DEFAULT NULL COMMENT '받은 사용자 아이디',
  `from_user_id` varchar(255) DEFAULT NULL COMMENT '보낸 사용자 아이디',
  `star_balloon_cnt` int(11) DEFAULT 0 COMMENT '별풍선 개수'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- soop.passionate_user_list definition

CREATE TABLE `passionate_user_list` (
  `user_id` varchar(255) DEFAULT NULL COMMENT '사용자 아이디',
  `passionate_user_id` varchar(255) DEFAULT NULL COMMENT '열혈 사용자 아이디',
  `passionate_user_rank` int(11) DEFAULT NULL COMMENT '열혈 사용자 랭크',
  `total_put_star_balloon` int(11) DEFAULT NULL COMMENT '후원한 별풍선 총 개수'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- soop.suport_user_list definition

CREATE TABLE `suport_user_list` (
  `user_id` varchar(255) DEFAULT NULL COMMENT '사용자 아이디',
  `suport_user_id` varchar(255) DEFAULT NULL COMMENT '서포터 사용자 아이디',
  `user_rank` int(11) DEFAULT NULL COMMENT '서포터 사용자 랭크'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- soop.`user` definition

CREATE TABLE `user` (
  `user_id` varchar(255) NOT NULL COMMENT '사용자 아이디',
  `user_name` varchar(255) DEFAULT NULL COMMENT '사용자 이름',
  `user_nickname` varchar(255) DEFAULT NULL COMMENT '사용자 닉네임',
  `birth_date` varchar(255) DEFAULT NULL COMMENT '사용자 생년월일',
  `gender` varchar(255) DEFAULT NULL COMMENT '사용자 성별',
  `email` varchar(255) DEFAULT NULL COMMENT '사용자 이메일',
  `advertisement_email` varchar(1) DEFAULT NULL COMMENT '광고 이메일 여부',
  `advertisement_sms` varchar(1) DEFAULT NULL COMMENT '광고 sns 여부',
  `advertisement_sms_night` varchar(1) DEFAULT NULL COMMENT '광고 sns 야간 여부',
  `add_star_balloon` int(11) DEFAULT 0 COMMENT '충전한 별풍선',
  `get_star_balloon` int(11) DEFAULT 0 COMMENT '받은 별풍선',
  `add_ad_balloon` int(11) DEFAULT 0 COMMENT '보유 애드벌룬',
  `get_ad_balloon` int(11) DEFAULT 0 COMMENT '받은 애드벌룬',
  `today_get_star_balloon` int(11) DEFAULT 0 COMMENT '오늘 받은 별풍선',
  `profile_path` varchar(255) DEFAULT 'default_profile.png' COMMENT '프로필 이미지',
  `star_cnt` int(11) DEFAULT 0 COMMENT '즐겨찾기 수',
  `suport_cnt` int(11) DEFAULT 0 COMMENT '서포터 수',
  `channel_name` varchar(255) DEFAULT NULL COMMENT '채널 이름',
  `channel_comment` varchar(255) DEFAULT NULL COMMENT '채널 코멘트',
  `create_date` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '채널 개설일',
  `fan_cnt` int(11) DEFAULT 0 COMMENT '팬가입 수',
  `subscribe_cnt` int(11) DEFAULT 0 COMMENT '구독자 수',
  `total_in_user_cnt` int(11) DEFAULT 0 COMMENT '누적 유저',
  `total_up_cnt` int(11) DEFAULT 0 COMMENT '누적 UP 수',
  `today_up_cnt` int(11) DEFAULT 0 COMMENT '오늘 UP 수',
  `total_visit_cnt` int(11) DEFAULT 0 COMMENT '누적 방문 수',
  `today_visit_cnt` int(11) DEFAULT 0 COMMENT '오늘 방문 수',
  `last_play_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '최근 방송일',
  `total_play_cnt_talk` int(11) DEFAULT 0 COMMENT '총 토크/캠방 방송 시간',
  `total_play_cnt_game` int(11) DEFAULT 0 COMMENT '총 게임 방송 시간',
  `total_play_cnt_sport` int(11) DEFAULT 0 COMMENT '총 스포츠 방송 시간',
  `total_play_cnt_mobile` int(11) DEFAULT 0 COMMENT '총 모바일 방송 시간',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- soop.vote_list definition

CREATE TABLE `vote_list` (
  `vote_id` varchar(255) DEFAULT NULL COMMENT '투표 고유값',
  `comment` varchar(255) DEFAULT NULL COMMENT '투표 내용',
  `vote_select_cnt` int(11) DEFAULT NULL COMMENT '득표수'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- soop.bj_viewers definition

CREATE TABLE `bj_viewers` (
  `user_id` varchar(255) DEFAULT NULL COMMENT '채금한 사용자 아이디',
  `star_user_id` varchar(255) DEFAULT NULL COMMENT '즐겨찾기한 사용자 아이디',
  `hiding_user_id` varchar(255) DEFAULT NULL COMMENT '숨긴 사용자 아이디',
  `subscribe_user_id` varchar(255) DEFAULT NULL COMMENT '구독한 사용자 아이디',
  KEY `bj_viewers_FK` (`user_id`),
  CONSTRAINT `bj_viewers_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- soop.black_list definition

CREATE TABLE `black_list` (
  `user_id` varchar(255) DEFAULT NULL COMMENT '블랙한 사용자 아이디',
  `black_user_id` varchar(255) DEFAULT NULL COMMENT '블랙당한 사용자 아이디',
  `delete_yn` varchar(1) DEFAULT NULL COMMENT '삭제 여부',
  KEY `black_list_FK` (`user_id`),
  CONSTRAINT `black_list_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- soop.live_info definition

CREATE TABLE `live_info` (
  `user_id` varchar(255) DEFAULT NULL COMMENT '사용자 아이디',
  `live_id` varchar(255) DEFAULT NULL COMMENT '라이브 고유값',
  `live_title` varchar(255) DEFAULT NULL COMMENT '라이브 제목',
  `start_time` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '라이브 시작 시간',
  `category` varchar(255) DEFAULT NULL COMMENT '라이브 카테고리',
  `live_title_change_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '라이브 제목 변경 시간',
  KEY `live_info_FK` (`user_id`),
  CONSTRAINT `live_info_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- soop.spam_nete definition

CREATE TABLE `spam_nete` (
  `user_id` varchar(255) DEFAULT NULL COMMENT '블랙한 사용자 아이디',
  `add_time` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '추가 시간',
  KEY `spam_nete_FK` (`user_id`),
  CONSTRAINT `spam_nete_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- soop.stop_chating definition

CREATE TABLE `stop_chating` (
  `user_id` varchar(255) DEFAULT NULL COMMENT '채금한 사용자 아이디',
  `stop_user_id` varchar(255) DEFAULT NULL COMMENT '채금당한 사용자 아이디',
  KEY `stop_chating_FK` (`user_id`),
  CONSTRAINT `stop_chating_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- soop.user_note definition

CREATE TABLE `user_note` (
  `user_id` varchar(255) DEFAULT NULL COMMENT '보내는 사용자 아이디',
  `note_title` varchar(255) DEFAULT NULL COMMENT '메세지 제목',
  `note_content` varchar(255) DEFAULT NULL COMMENT '메세지 내용',
  `note_time` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '보낸/받은 시간',
  `read_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '읽은 시간',
  `custoday_yn` varchar(255) DEFAULT NULL COMMENT '저장 여부',
  `spam_yn` varchar(255) DEFAULT NULL COMMENT '스팸 여부',
  KEY `user_note_FK` (`user_id`),
  CONSTRAINT `user_note_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- soop.vod definition

CREATE TABLE `vod` (
  `user_id` varchar(255) DEFAULT NULL COMMENT '사용자 아이디',
  `vod_id` varchar(255) DEFAULT NULL COMMENT '영상 고유값',
  `vod_title` varchar(255) DEFAULT NULL COMMENT '영상 제목',
  `vod_play_cnt` int(11) DEFAULT NULL COMMENT '영상 길이',
  `upload_time` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '영상 업로드 시간',
  `chat_yn` varchar(1) DEFAULT NULL COMMENT '채팅 존재 여부',
  KEY `vod_FK` (`user_id`),
  CONSTRAINT `vod_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- soop.vote definition

CREATE TABLE `vote` (
  `user_id` varchar(255) DEFAULT NULL COMMENT '투표 개최자',
  `vote_title` varchar(255) DEFAULT NULL COMMENT '투표 제목',
  `start_time` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '시작시간',
  KEY `vote_FK` (`user_id`),
  CONSTRAINT `vote_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;