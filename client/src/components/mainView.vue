<template>
    <div class="mainView">
        <header>
            <div class="btn_flexible"><button></button></div>
            <div class="logo_wrap">
                <a href="#" target="_self">
                    <img src="/soop_logo.svg">
                </a>
            </div>
            <div class="top_searcharea_wrap">
                <div>
                    <input id="search-inp" type="text" autocomplete="off">
                    <button class="del_text"></button>
                    <button class="submit"></button>
                </div>
            </div>
            <div class="serviceUtil">
                <div><button class="btn-broadcast"></button></div>
                <div><button class="btn-notice"></button></div>
                <div><img src="/profile_coffee.JPG" class="profile-img" alt="test1"></div>
                <div><button class="btn-allMenu"></button></div>
            </div>
        </header>
        <div class="main_body">
            <div class="serviceLnb">
                <div class="side-conts">
                    <a href="#" class="page_move">
                        <img src="ico_lnb_live.svg">
                        <p>LIVE</p>
                    </a>
                    <a href="#" class="page_move">
                        <img src="ico_lnb_cate.svg">
                        <p>탐색</p>
                    </a>
                    <a href="#" class="page_move">
                        <img src="ico_lnb_my.svg">
                        <p>MY</p>
                    </a>
                    <a href="#" class="page_move">
                        <img src="ico_lnb_catch.svg">
                        <p>Catch</p>
                    </a>
                </div>

                <div class="side-conts">
                    <h5 class="">즐겨찾기</h5>
                    <a href="#">
                        <img src="profile_coffee.JPG" class="star_profile">
                        <p>Catch</p>
                    </a>
                    <a href="#">
                        <img src="profile_coffee.JPG" class="star_profile">
                        <p>Catch</p>
                    </a>
                    <a href="#">
                        <img src="profile_coffee.JPG" class="star_profile">
                        <p>Catch</p>
                    </a>
                    <a href="#">
                        <img src="profile_coffee.JPG" class="star_profile">
                        <p>Catch</p>
                    </a>
                    <a href="#">
                        <img src="profile_coffee.JPG" class="star_profile">
                        <p>Catch</p>
                    </a>
                    <button class="btn_more">
                        더보기
                    </button>
                </div>
                
                <div class="side-conts">
                    <h5 class="">추천</h5>
                    <a href="#">
                        <img src="profile_coffee.JPG" class="recommend_profile">
                        <p>
                            <strong>기뉴다</strong>
                            <label>스타크래프트</label>
                        </p>
                        <em>
                            <div></div>
                            <span>100</span>
                        </em>
                    </a>
                    <a href="#">
                        <img src="profile_coffee.JPG" class="recommend_profile">
                        <p>
                            <strong>채무!</strong>
                            <label>토크/캠방</label>
                        </p>
                        <em>
                            <div></div>
                            <span>100</span>
                        </em>
                    </a>
                    <a href="#">
                        <img src="profile_coffee.JPG" class="recommend_profile">
                        <p>
                            <strong>기뉴다</strong>
                            <label>토크/캠방</label>
                        </p>
                        <em>
                            <div></div>
                            <span>100</span>
                        </em>
                    </a>
                    <a href="#">
                        <img src="profile_coffee.JPG" class="recommend_profile">
                        <p>
                            <strong>기뉴다</strong>
                            <label>토크/캠방</label>
                        </p>
                        <em>
                            <div></div>
                            <span>100</span>
                        </em>
                    </a>
                    <a href="#">
                        <img src="profile_coffee.JPG" class="recommend_profile">
                        <p>
                            <strong>기뉴다</strong>
                            <label>토크/캠방</label>
                        </p>
                        <em>
                            <div></div>
                            <span>100</span>
                        </em>
                    </a>
                    <button class="btn_more">
                        더보기
                    </button>
                </div>

                <div class="side-conts">
                    <a href="#" class="page_move">
                        <img src="ico_lnb_esports.svg">
                        <p>e스포츠</p>
                    </a>
                    <a href="#" class="page_move">
                        <img src="ico_lnb_shop.svg">
                        <p>숲토어</p>
                    </a>
                    <a href="#" class="page_move">
                        <img src="ico_lnb_sotong.svg">
                        <p>소통센터</p>
                    </a>
                    <a href="#" class="page_move">
                        <img src="ico_lnb_rank.svg">
                        <p>랭킹</p>
                    </a>
                    <a href="#" class="page_move">
                        <img src="ico_lnb_event.svg">
                        <p>이벤트</p>
                    </a>
                </div>
            </div>
            <div class="live_list">
                <div class="player_wrap">
                    <div class="poster">
                        <video></video>
                    </div>
                    <div class="swiper">
                        <div class="swiper-slide">
                            <img src="277829392.jfif">
                            <label>
                                <p>양팡</p>
                                <p>586명 참여 중</p>
                            </label>
                        </div>
                        <div class="swiper-slide">
                            <img src="277829392.jfif">
                            <label>
                                <p>양팡</p>
                                <p>586명 참여 중</p>
                            </label>
                        </div>
                        <div class="swiper-slide">
                            <img src="277829392.jfif">
                            <label>
                                <p>양팡</p>
                                <p>586명 참여 중</p>
                            </label>
                        </div>
                        <div class="swiper-slide">
                            <img src="277829392.jfif">
                            <label>
                                <p>양팡</p>
                                <p>586명 참여 중</p>
                            </label>
                        </div>
                    </div>
                </div>
                <h3>LIVE</h3>
                <div>
                    <div class="cBox-list">
                        <div class="cBox">
                            <img src="277829392.jfif" class="thumbnail">
                            <div class="streamer_info">
                                <img src="profile_coffee.JPG">
                                <span class="streamer_text">
                                    <p><span>최군형</span><button></button></p>
                                    <p>최가네 전체M.T 서바이벌</p>
                                    <p class="tag"><span>토크/캠방</span></p>
                                </span>
                            </div>
                        </div>
                        <div class="cBox">
                            <img src="277829392.jfif" class="thumbnail">
                            <div class="streamer_info">
                                <img src="profile_coffee.JPG">
                                <span class="streamer_text">
                                    <p><span>최군형</span><button></button></p>
                                    <p>최가네 전체M.T 서바이벌</p>
                                    <p class="tag"><span>토크/캠방</span></p>
                                </span>
                            </div>
                        </div>
                        <div class="cBox">
                            <img src="277829392.jfif" class="thumbnail">
                            <div class="streamer_info">
                                <img src="profile_coffee.JPG">
                                <span class="streamer_text">
                                    <p><span>최군형</span><button></button></p>
                                    <p>최가네 전체M.T 서바이벌</p>
                                    <p class="tag"><span>토크/캠방</span></p>
                                </span>
                            </div>
                        </div>
                        <div class="cBox">
                            <img src="277829392.jfif" class="thumbnail">
                            <div class="streamer_info">
                                <img src="profile_coffee.JPG">
                                <span class="streamer_text">
                                    <p><span>최군형</span><button></button></p>
                                    <p>최가네 전체M.T 서바이벌</p>
                                    <p class="tag"><span>토크/캠방</span></p>
                                </span>
                            </div>
                        </div>
                        <div class="cBox">
                            <img src="277829392.jfif" class="thumbnail">
                            <div class="streamer_info">
                                <img src="profile_coffee.JPG" class="streamer_profile">
                                <span class="streamer_text">
                                    <p><span>최군형</span><button></button></p>
                                    <p>최가네 전체M.T 서바이벌</p>
                                    <p class="tag"><span>토크/캠방</span></p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="cBox-list">
                        <div class="cBox">
                            <img src="277829392.jfif" class="thumbnail">
                            <div class="streamer_info">
                                <img src="profile_coffee.JPG">
                                <span class="streamer_text">
                                    <p><span>최군형</span><button></button></p>
                                    <p>최가네 전체M.T 서바이벌</p>
                                    <p class="tag"><span>토크/캠방</span></p>
                                </span>
                            </div>
                        </div>
                        <div class="cBox">
                            <img src="277829392.jfif" class="thumbnail">
                            <div class="streamer_info">
                                <img src="profile_coffee.JPG">
                                <span class="streamer_text">
                                    <p><span>최군형</span><button></button></p>
                                    <p>최가네 전체M.T 서바이벌</p>
                                    <p class="tag"><span>토크/캠방</span></p>
                                </span>
                            </div>
                        </div>
                        <div class="cBox">
                            <img src="277829392.jfif" class="thumbnail">
                            <div class="streamer_info">
                                <img src="profile_coffee.JPG">
                                <span class="streamer_text">
                                    <p><span>최군형</span><button></button></p>
                                    <p>최가네 전체M.T 서바이벌</p>
                                    <p class="tag"><span>토크/캠방</span></p>
                                </span>
                            </div>
                        </div>
                        <div class="cBox">
                            <img src="277829392.jfif" class="thumbnail">
                            <div class="streamer_info">
                                <img src="profile_coffee.JPG">
                                <span class="streamer_text">
                                    <p><span>최군형</span><button></button></p>
                                    <p>최가네 전체M.T 서바이벌</p>
                                    <p class="tag"><span>토크/캠방</span></p>
                                </span>
                            </div>
                        </div>
                        <div class="cBox">
                            <img src="277829392.jfif" class="thumbnail">
                            <div class="streamer_info">
                                <img src="profile_coffee.JPG">
                                <span class="streamer_text">
                                    <p><span>최군형</span><button></button></p>
                                    <p>최가네 전체M.T 서바이벌</p>
                                    <p class="tag"><span>토크/캠방</span></p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="show_more"><button>더보기</button></div>
                <div class="category_title">
                    <h3>카테고리</h3>
                    <a href="#">전체보기</a>
                </div>
                <div class="category">
                    <a href="#">
                        <span>
                            <em></em>
                        </span>
                        <div class="category_thumb"><img src="7849670d90c7abaa8.png"><em>69,227</em></div>
                        <label>토크/캠방</label>
                    </a>
                    <a href="#">
                        <span>
                            <em></em>
                        </span>
                        <div class="category_thumb"><img src="3568670d900e5fe3c.jpg"><em>1,227</em></div>
                        <label>스타크래프트</label>
                    </a>
                    <a href="#">
                        <span>
                            <em></em>
                        </span>
                        <div class="category_thumb"><img src="3781670d900509a1e.png"><em>23,227</em></div>
                        <label>취미</label>
                    </a>
                    <a href="#">
                        <span>
                            <em></em>
                        </span>
                        <div class="category_thumb"><img src="9526670d901fea149.jpg"><em>5,227</em></div>
                        <label>그랜드 테프트 오토 V</label>
                    </a>
                    <a href="#">
                        <span>
                            <em></em>
                        </span>
                        <div class="category_thumb"><img src="5706670d915d067cb.png"><em>127</em></div>
                        <label>버추얼</label>
                    </a>
                    <a href="#">
                        <span>
                            <em></em>
                        </span>
                        <div class="category_thumb"><img src="7599670d901178533.jpg"><em>29,227</em></div>
                        <label>서든어택</label>
                    </a>
                    <a href="#">
                        <span>
                            <em></em>
                        </span>
                        <div class="category_thumb"><img src="4487670d90e7c8791.png"><em>19,227</em></div>
                        <label>먹방/쿡방</label>
                    </a>
                </div>
                <div class="main_banner">
                    <div>
                        <img src="7358670e27a1805c1.png">
                        <span>
                            <p>10/16(수) 저녁 7시</p>
                            <p>엘시의 캠파 노래방</p>
                            <p>
                                상금을 얻고 싶은자,<br>
                                쟁반의 무게를 견뎌라!
                            </p>
                        </span>
                        <button>LIVE</button>
                    </div>
                    <div>
                        <img src="3584670e0c8e26e2d.png">
                        <span>
                            <p>10/16(수) 저녁 8시</p>
                            <p>최깨비 x 정수빈</p>
                            <p>
                                신입 스트리머를 위한<br>
                                토크쇼 수퍼루키 1회!
                            </p>
                        </span>
                        <button>LIVE</button>
                    </div>
                    <div>
                        <img src="7945670df74bc6147.png">
                        <span>
                            <p>10/16(수) 저녁 7시</p>
                            <p>창과방패 [아이콘 매치]</p>
                            <p>아이콘 TM 10카 공개!</p>
                        </span>
                        <button>LIVE</button>
                    </div>
                </div>
                <div class="popularity_catch_list_text">
                    <span>인기</span>
                    <span>Catch</span>
                    <span>모아보기</span>
                </div>
                <div class="popularity_catch_list">
                    <div class="catch_video">
                        <div class="catch_thum"><img src="6956835_l.jpg"></div>
                        <span>[캐치]땡미널 모음 ㄷㄷㄷ132213213123ㄷㄷ</span>
                        <label>1000</label>
                    </div>
                    <div class="catch_video">
                        <div class="catch_thum"><img src="6956835_l.jpg"></div>
                        <span>[캐치]땡</span>
                        <label>1000</label>
                    </div>
                    <div class="catch_video">
                        <div class="catch_thum"><img src="6956835_l.jpg"></div>
                        <span>[캐치]땡미널 모음 ㄷㄷㄷㄷㄷ</span>
                        <label>1000</label>
                    </div>
                    <div class="catch_video">
                        <div class="catch_thum"><img src="6956835_l.jpg"></div>
                        <span>[캐치]땡미널 모음 ㄷㄷㄷㄷㄷ</span>
                        <label>1000</label>
                    </div>
                    <div class="catch_video">
                        <div class="catch_thum"><img src="6956835_l.jpg"></div>
                        <span>[캐치]땡미널 모음 ㄷㄷㄷㄷㄷ</span>
                        <label>1000</label>
                    </div>
                    <div class="catch_video">
                        <div class="catch_thum"><img src="6956835_l.jpg"></div>
                        <span>[캐치]땡미널 모음 ㄷㄷㄷㄷㄷ</span>
                        <label>1000</label>
                    </div>
                    <div class="catch_video">
                        <div class="catch_thum"><img src="6956835_l.jpg"></div>
                        <span>[캐치]땡미널 모음 ㄷㄷㄷㄷㄷ</span>
                        <label>1000</label>
                    </div>
                </div>
                <h3>VOD</h3>
                <div class="vod_list">
                    <div class="vod_list_line">
                        <div>
                            <img src="vod.jpeg" class="vod_thum">
                            <div class="vod_info">
                                <img src="profile_coffee.JPG">
                                <div>
                                    <p class="vod_nickname">
                                        <span>최군형</span>
                                        <button></button>
                                    </p>
                                    <p class="vod_title">최가네 신입생환영회 란란 참교육</p>
                                    <p class="vod_play">
                                        <span class="play_cnt">64</span>
                                        <span class="upload_time">27분전</span>
                                    </p>
                                    <p class="vod_tag">
                                        <span class="vod_category">스타크래프트</span>
                                        <span class="vod_in_tag">최가네</span>
                                        <span class="vod_in_tag">웰컴</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="vod.jpeg" class="vod_thum">
                            <div class="vod_info">
                                <img src="profile_coffee.JPG">
                                <div>
                                    <p class="vod_nickname">
                                        <span>최군형</span>
                                        <button></button>
                                    </p>
                                    <p class="vod_title">최가네 신입생환영회 란란 참교육</p>
                                    <p class="vod_play">
                                        <span class="play_cnt">64</span>
                                        <span class="upload_time">27분전</span>
                                    </p>
                                    <p class="vod_tag">
                                        <span class="vod_category">스타크래프트</span>
                                        <span class="vod_in_tag">최가네</span>
                                        <span class="vod_in_tag">웰컴</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="vod.jpeg" class="vod_thum">
                            <div class="vod_info">
                                <img src="profile_coffee.JPG">
                                <div>
                                    <p class="vod_nickname">
                                        <span>최군형</span>
                                        <button></button>
                                    </p>
                                    <p class="vod_title">최가네 신입생환영회 란란 참교육</p>
                                    <p class="vod_play">
                                        <span class="play_cnt">64</span>
                                        <span class="upload_time">27분전</span>
                                    </p>
                                    <p class="vod_tag">
                                        <span class="vod_category">스타크래프트</span>
                                        <span class="vod_in_tag">최가네</span>
                                        <span class="vod_in_tag">웰컴</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="vod.jpeg" class="vod_thum">
                            <div class="vod_info">
                                <img src="profile_coffee.JPG">
                                <div>
                                    <p class="vod_nickname">
                                        <span>최군형</span>
                                        <button></button>
                                    </p>
                                    <p class="vod_title">최가네 신입생환영회 란란 참교육</p>
                                    <p class="vod_play">
                                        <span class="play_cnt">64</span>
                                        <span class="upload_time">27분전</span>
                                    </p>
                                    <p class="vod_tag">
                                        <span class="vod_category">스타크래프트</span>
                                        <span class="vod_in_tag">최가네</span>
                                        <span class="vod_in_tag">웰컴</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="vod.jpeg" class="vod_thum">
                            <div class="vod_info">
                                <img src="profile_coffee.JPG">
                                <div>
                                    <p class="vod_nickname">
                                        <span>최군형</span>
                                        <button></button>
                                    </p>
                                    <p class="vod_title">최가네 신입생환영회 란란 참교육</p>
                                    <p class="vod_play">
                                        <span class="play_cnt">64</span>
                                        <span class="upload_time">27분전</span>
                                    </p>
                                    <p class="vod_tag">
                                        <span class="vod_category">스타크래프트</span>
                                        <span class="vod_in_tag">최가네</span>
                                        <span class="vod_in_tag">웰컴</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="vod_list_line">
                        <div>
                            <img src="vod.jpeg" class="vod_thum">
                            <div class="vod_info">
                                <img src="profile_coffee.JPG">
                                <div>
                                    <p class="vod_nickname">
                                        <span>최군형</span>
                                        <button></button>
                                    </p>
                                    <p class="vod_title">최가네 신입생환영회 란란 참교육</p>
                                    <p class="vod_play">
                                        <span class="play_cnt">64</span>
                                        <span class="upload_time">27분전</span>
                                    </p>
                                    <p class="vod_tag">
                                        <span class="vod_category">스타크래프트</span>
                                        <span class="vod_in_tag">최가네</span>
                                        <span class="vod_in_tag">웰컴</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="vod.jpeg" class="vod_thum">
                            <div class="vod_info">
                                <img src="profile_coffee.JPG">
                                <div>
                                    <p class="vod_nickname">
                                        <span>최군형</span>
                                        <button></button>
                                    </p>
                                    <p class="vod_title">최가네 신입생환영회 란란 참교육</p>
                                    <p class="vod_play">
                                        <span class="play_cnt">64</span>
                                        <span class="upload_time">27분전</span>
                                    </p>
                                    <p class="vod_tag">
                                        <span class="vod_category">스타크래프트</span>
                                        <span class="vod_in_tag">최가네</span>
                                        <span class="vod_in_tag">웰컴</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="vod.jpeg" class="vod_thum">
                            <div class="vod_info">
                                <img src="profile_coffee.JPG">
                                <div>
                                    <p class="vod_nickname">
                                        <span>최군형</span>
                                        <button></button>
                                    </p>
                                    <p class="vod_title">최가네 신입생환영회 란란 참교육</p>
                                    <p class="vod_play">
                                        <span class="play_cnt">64</span>
                                        <span class="upload_time">27분전</span>
                                    </p>
                                    <p class="vod_tag">
                                        <span class="vod_category">스타크래프트</span>
                                        <span class="vod_in_tag">최가네</span>
                                        <span class="vod_in_tag">웰컴</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="vod.jpeg" class="vod_thum">
                            <div class="vod_info">
                                <img src="profile_coffee.JPG">
                                <div>
                                    <p class="vod_nickname">
                                        <span>최군형</span>
                                        <button></button>
                                    </p>
                                    <p class="vod_title">최가네 신입생환영회 란란 참교육</p>
                                    <p class="vod_play">
                                        <span class="play_cnt">64</span>
                                        <span class="upload_time">27분전</span>
                                    </p>
                                    <p class="vod_tag">
                                        <span class="vod_category">스타크래프트</span>
                                        <span class="vod_in_tag">최가네</span>
                                        <span class="vod_in_tag">웰컴</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="vod.jpeg" class="vod_thum">
                            <div class="vod_info">
                                <img src="profile_coffee.JPG">
                                <div>
                                    <p class="vod_nickname">
                                        <span>최군형</span>
                                        <button></button>
                                    </p>
                                    <p class="vod_title">최가네 신입생환영회 란란 참교육</p>
                                    <p class="vod_play">
                                        <span class="play_cnt">64</span>
                                        <span class="upload_time">27분전</span>
                                    </p>
                                    <p class="vod_tag">
                                        <span class="vod_category">스타크래프트</span>
                                        <span class="vod_in_tag">최가네</span>
                                        <span class="vod_in_tag">웰컴</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="show_more"><button>더보기</button></div>
                <h3 class="user_interest_story_text">
                    <span class="interest_nickname">몽키D.Luffy</span>
                    <span class="interest_text">님의 관심</span>
                    <span class="interest_stroy_blue_color">스토리</span>
                </h3>
                <div class="user_interest_story">
                    <div class="interest_info">
                        <div class="interest_info_img">
                            <img src="interest_img.jpg">
                            <label class="interest_story_text">스토리</label>
                            <div class="interest_profile"><img src="profile_coffee.JPG"></div>    
                        </div>
                        <div class="interest_info_text">
                            <p class="interest_nickname">
                                [FV]박퍼니
                            </p>
                            <p class="interest_date">
                                10월 17일 스토리
                            </p>
                        </div>
                    </div>
                    <div class="interest_info">
                        <div class="interest_info_img">
                            <img src="interest_img.jpg">
                            <label class="interest_story_text">스토리</label>
                            <div class="interest_profile"><img src="profile_coffee.JPG"></div>    
                        </div>
                        <div class="interest_info_text">
                            <p class="interest_nickname">
                                [FV]박퍼니
                            </p>
                            <p class="interest_date">
                                10월 17일 스토리
                            </p>
                        </div>
                    </div>
                    <div class="interest_info">
                        <div class="interest_info_img">
                            <img src="interest_img.jpg">
                            <label class="interest_story_text">스토리</label>
                            <div class="interest_profile"><img src="profile_coffee.JPG"></div>    
                        </div>
                        <div class="interest_info_text">
                            <p class="interest_nickname">
                                [FV]박퍼니
                            </p>
                            <p class="interest_date">
                                10월 17일 스토리
                            </p>
                        </div>
                    </div>
                    <div class="interest_info">
                        <div class="interest_info_img">
                            <img src="interest_img.jpg">
                            <label class="interest_story_text">스토리</label>
                            <div class="interest_profile"><img src="profile_coffee.JPG"></div>    
                        </div>
                        <div class="interest_info_text">
                            <p class="interest_nickname">
                                [FV]박퍼니
                            </p>
                            <p class="interest_date">
                                10월 17일 스토리
                            </p>
                        </div>
                    </div>
                    <div class="interest_info">
                        <div class="interest_info_img">
                            <img src="interest_img.jpg">
                            <label class="interest_story_text">스토리</label>
                            <div class="interest_profile"><img src="profile_coffee.JPG"></div>    
                        </div>
                        <div class="interest_info_text">
                            <p class="interest_nickname">
                                [FV]박퍼니
                            </p>
                            <p class="interest_date">
                                10월 17일 스토리
                            </p>
                        </div>
                    </div>
                    <div class="interest_info">
                        <div class="interest_info_img">
                            <img src="interest_img.jpg">
                            <label class="interest_story_text">스토리</label>
                            <div class="interest_profile"><img src="profile_coffee.JPG"></div>    
                        </div>
                        <div class="interest_info_text">
                            <p class="interest_nickname">
                                [FV]박퍼니
                            </p>
                            <p class="interest_date">
                                10월 17일 스토리
                            </p>
                        </div>
                    </div>
                    <div class="interest_info">
                        <div class="interest_info_img">
                            <img src="interest_img.jpg">
                            <label class="interest_story_text">스토리</label>
                            <div class="interest_profile"><img src="profile_coffee.JPG"></div>    
                        </div>
                        <div class="interest_info_text">
                            <p class="interest_nickname">
                                [FV]박퍼니
                            </p>
                            <p class="interest_date">
                                10월 17일 스토리
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import axios from "axios";
    import { io } from "socket.io-client";
    import { onMounted, defineProps, inject } from "vue";
    const props = defineProps({
        live_id:String,
    })
    onMounted(()=>{

    })
</script>

<style scope>
    .mainView{
        height: 100%;
    }
    header{
        background: #0c0d0e;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 64px;
        box-sizing: border-box;
        z-index: 1500;
        display: flex;
        align-items: center;
    }
    
    header .btn_flexible button{
        margin-left: 25px;
        background: url("/public/left_menu.svg") 50% 50% no-repeat;
        height: 40px;
        width: 40px;
        border: none;
        cursor: pointer;
    }
    header .logo_wrap{
        margin-left: 5px;
    }
    header .top_searcharea_wrap{
        flex-grow:1;
    }
    header .top_searcharea_wrap div{
        position: relative;
        width: 400px;
        height: 45px;
        margin: 0 auto;
    }
    header .top_searcharea_wrap input{
        position: absolute;
        width: 330px;
        outline: none;
        border: none;
        font-size: 14px;
        background: #f6f6f6;
        border-radius: 30px;
        height: 45px;
        padding-left: 15px;
        padding-right: 70px;
    }
    header .top_searcharea_wrap .del_text{
        background: url("/public/x_btn.svg") 50% 50% no-repeat;
        height: 18px;
        width: 18px;
        border: none;
        position: absolute;
        right: 30px;
        top: 15px;
        cursor: pointer;
    }
    header .top_searcharea_wrap .submit{
        background: url("/public/search_btn.svg") 50% 50% no-repeat;
        height: 23px;
        width: 23px;
        border: none;
        position: absolute;
        right: 0px;
        top: 13px;
        cursor: pointer;
    }
    header .serviceUtil{
        margin-right: 20px;
        display: flex;
        align-items: center;
    }
    header .serviceUtil div{
        margin-left: 20px;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    header .serviceUtil div:hover{
        background: #464a53;
    }
    header .serviceUtil button{
        height: 25px;
        width: 25px;
        border: none;
        cursor: pointer;
    }
    header .serviceUtil .btn-broadcast{
        background: url("/public/live.svg") 50% 50% no-repeat;
    }
    header .serviceUtil .btn-notice{
        background: url("/public/alarm.svg") 50% 50% no-repeat;
    }
    header .serviceUtil .btn-allMenu{
        background: url("/public/right_menu.svg") 50% 50% no-repeat;
    }
    header .serviceUtil img{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        cursor: pointer;
        padding: 10px;
    }
    .mainView h3{
        margin: 30px 0px;
    }
    .mainView .main_body{
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: row;
    }
    .mainView .serviceLnb{
        position: fixed;
        height: 100%;
        left: 0;
        margin-top: 64px;
        width: 218px;
        padding: 16px 0px 0px 20px;
        flex-shrink: 0;
        font-weight: bold;
        overflow-y: auto;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        background: #0c0d0e;
    }
    .mainView .serviceLnb::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
    .mainView .serviceLnb .side-conts{
        border-bottom: 1px solid #252323;
    }
    .mainView .serviceLnb .side-conts:nth-child(4){
        border: none;
        padding-top: 20px;
        padding-bottom: 100px;
    }
    .mainView .serviceLnb .side-conts a{
        color: #e2e4e9;
        text-decoration: none;
        display: flex;
        flex-flow: row; /* column */
        align-items: center; /* flex-start */
        width: 100%;
        padding: 3px 0px 3px 0px;
        border-radius: 10px;

        /* flex-flow: column;
        align-items: flex-start;
        width: 50px; */

    }
    .mainView .serviceLnb .side-conts .page_move{
        margin-bottom: 10px;
    }
    .mainView .serviceLnb .side-conts .page_move:hover{
        background: #007aff;
    }
    .mainView .serviceLnb .side-conts a:not(.page_move):hover{
        background: rgba(117, 123, 138, 0.1);
    }
    .mainView .serviceLnb .side-conts a img{
        border-radius: 50%;
    }
    .mainView .serviceLnb .btn_more{
        display: flex;
        align-items: center;
        width: 100%;
        height: 38px;
        padding-left: 7px;
        color: #d5d7dc;
        font-size: 14px;
        transition: all .2s;
        background: #0c0d0e;
        border: none;
        outline: none;
        cursor: pointer;
    }
    .mainView .serviceLnb .btn_more::before{
        content: "";
        background: url("/public/arrow_bottom.svg") 50% 50% no-repeat;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 13px;
        height: 8px;
        margin-right: 20px;
    }
    
    .mainView .serviceLnb img{
        width: 24px;
        height: 24px;
        margin-right: 15px;
    }
    .mainView .serviceLnb .recommend_profile, .serviceLnb .star_profile{
        width: 30px;
        height: 30px;
    }
    .mainView .serviceLnb p{
        font-size: 15px;
        padding: 0;
        margin: 0;
        display: flex;
        flex-flow: column;
        flex-grow: 1;
        /* margin: 0 auto;
        font-size: 12px; */
    }
    .mainView .serviceLnb em{
        font-size: 10px;
        color: #9196a1;
        display: flex;
        align-items: center;
        margin-right: 15px;
    }
    .mainView .serviceLnb em::before{
        content: "";
        background: #ff2f00;
        width: 4px;
        height: 4px;
        margin-right: 6px;
        border-radius: 50%;
    }
    .mainView .serviceLnb h5{
        margin: 20px 0px 20px 0px;
    }
    .mainView .serviceLnb .side-conts{
        display: flex;
        flex-flow: column;
        padding: 0px 10px 20px 13px;
    }
    .mainView .serviceLnb .side-conts label{
        font-size: 10px;
        color: #9196a1;
    }
    .mainView .live_list{
        margin-left: 265px;
        flex-grow: 1;
        margin-top: 80px;
        margin-right: 20px;
        width: 100%;
    }


    .mainView .player_wrap{
        border-radius: 50px 20px 50px 20px;
        height: 350px;
        width: 100%;
        display: flex;
    }
    .mainView .player_wrap .poster{
        width: 80%;
        background: #f6f6f6;
        height: 100%;
        border-radius: 50px 0px 0px 20px;
        cursor: pointer;
        overflow: hidden;
    }
    .mainView .player_wrap .poster video{
        width: 100%;
        height: 100%;
    }
    .mainView .player_wrap .swiper{
        width: 20%;
        background: #0c0d0e;
        height: 100%;
        border-radius: 0px 20px 50px 0px;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
    .mainView .swiper-slide{
        height: 70px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .mainView .swiper-slide img{
        height: 60px;
        width: 106px;
        margin-right: 15px;
        cursor: pointer;
    }
    .mainView .swiper-slide p{
        margin: 0;
        cursor: pointer;
    }
    .mainView .swiper-slide p:nth-child(1){
        font-size: 14px;
        color: #fff;
    }
    .mainView .swiper-slide p:nth-child(2){
        font-size: 12px;
        color: red;
    }

    .mainView .cBox-list{
        display: flex;
        justify-content: space-between;
        gap: 0 20px;
    }
    .mainView .cBox{
        width: 20%;
        margin-bottom: 40px;
    }
    .mainView .cBox p{
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 13px;
        font-weight: bold;
        margin-top: 5px;
    }
    .mainView .cBox .tag span{
        background: rgba(1, 130, 255, .2);
        color: rgba(111,185,255,.8);
        border-radius: 10px;
        padding: 3px 8px;
        font-size: 11px;
    }
    .mainView .cBox button{
        background: transparent;
        height: 12px;
        border:none;
        outline: none;
    }
    .mainView .cBox:hover button{
        background: url("/public/dot_3.svg") 50% 50% no-repeat;
    }
    .mainView .cBox .thumbnail{
        width: 100%;
        border-radius: 15px;
        cursor: pointer;
    }
    .mainView .cBox .streamer_info{
        display: flex;
    }
    .mainView .cBox .streamer_info .streamer_text{
        flex-grow: 1;
    }
    .mainView .cBox .streamer_info .streamer_text p span{
        cursor: pointer;
    }
    .mainView .cBox .streamer_info .streamer_text p button{
        cursor: pointer;
    }
    .mainView .cBox .streamer_info .streamer_text p:nth-child(2){
        cursor: pointer;
    }
    .mainView .cBox .streamer_info img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
        margin-top: 5px;
        cursor: pointer;
    }

    .mainView .show_more{
        display: flex;
        width: 100%;
        height: 1px;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }
    .mainView .show_more::before{
        content: "";
        background: #2f3137;
        width: 100%;
        height: 1px;
    }
    .mainView .show_more::after{
        content: "";
        background: #2f3137;
        width: 100%;
        height: 1px;
    }
    .mainView .show_more button{
        display: flex;
        align-items: center;
        flex: 0 0 auto;
        height: 32px;
        margin: 0 16px;
        padding: 0 8px;
        border-radius: 8px;
        color: #757b8a;
        font-size: 14px;
        transition: all .2s;
        outline: none;
        border: none;
        cursor: pointer;
        background: #0c0d0e;
    }
    .mainView .show_more button::after{
        background: url("/public/arrow_bottom.svg") 50% 50% no-repeat;
        content: "";
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 12px;
        height: 7px;
        margin: 0 0 0 4px;
        transition: all .2s;
    }
    .mainView .show_more button:hover{
        background: rgba(117, 123, 138, 0.1);
    }

    .mainView .category_title{
        display: flex;
        align-items: center;
        font-size: large;
        justify-content: space-between;
        
    }
    .mainView .category_title a{
        text-decoration: none;
        color: #d5d7dc;
        font-size: 14px;
        display: flex;
        justify-content: center;
    }
    .mainView .category_title a::after{
        background: url("/public/arrow_right.svg") 50% 50% no-repeat;
        content: "";
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: 6px 12px;
        width: 20px;
        height: 20px;
    }
    .mainView .category{
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 0 20px;
    }
    .mainView .category a{
        display: flex;
        flex-flow: column;
        position: relative;
        width: 20%;
        text-decoration: none;
    }
    .mainView .category a .category_thumb{
        border-radius: 10px;
        flex-grow: 1;
        display: flex;
    }
    .mainView .category a:hover .category_thumb{
        box-shadow: 0 0 0 4px #007aff inset;
        padding: 10px 10px 10px 10px;
        box-sizing: border-box;
    }
    .mainView .category a .category_thumb em{
        position: absolute;
        display: flex;
        align-items: center;
        font-size: 13px;
        color: #fff;
        background: rgba(0,0,0,.6);
        top: 5px;
        left: 5px;
        border-radius: 10px;
        padding: 2px 7px 2px 7px;
        font-family: "맑은 고딕";
    }
    .mainView .category a .category_thumb em::before{
        content: "";
        display: block;
        background: #ff2424;
        width: 6px;
        height: 6px;
        margin-right: 6px;
        border-radius: 50%;
    }
    .mainView .category a label{
        color: #e2e4e9;
        cursor: pointer;
        height: 43px;
    }
    .mainView .category img{
        border-radius: 10px;
        width: 100%;
    }
    .mainView .main_banner{
        height: 110px;
        display: flex;
        position: relative;
        gap: 0 20px;
        justify-content: space-between;
        margin-top: 50px;
        padding-bottom: 50px;
        border-bottom: 1px solid #2f3137;
    }
    .mainView .main_banner div{
        display: flex;
        border-radius: 20px;
        background: #232529;
        flex-grow: 1;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: relative;
    }
    .mainView .main_banner div button{
        cursor: pointer;
    }
    .mainView .main_banner div img{
        margin-right: 10px;
    }
    .mainView .main_banner div p{
        margin: 0;
    }
    .mainView .main_banner div p:nth-child(1){
        font-size: 13px;
        margin-bottom: 5px;
    }
    .mainView .main_banner div p:nth-child(2){
        font-size: 15px;
        font-weight: bold;
    }
    .mainView .main_banner div p:nth-child(3){
        font-size: 14px;
    }
    .mainView .main_banner button{
        position: absolute;
        background: red;
        outline: none;
        border: none;
        color: #fff;
        border-radius: 10px;
        padding: 3px 8px 3px 8px;
        font-size: 11px;
        top:10px;
        left: 10px;
    }

    .mainView .popularity_catch_list_text{
        padding: 40px 0px 40px 0px;
        font-weight: bold;
        font-size: 20px;
    }
    .mainView .popularity_catch_list_text span:nth-child(1){
        margin-right: 10px;
    }
    .mainView .popularity_catch_list_text span:nth-child(2){
        margin-right: 10px;
        color: #0182ff;
    }

    .mainView .popularity_catch_list{
        height: 336px;
        display: flex;
        justify-content: space-between;
        gap: 0 20px;
        border-bottom: 1px solid #2f3137;
        padding-bottom: 30px;
    }
    .mainView .popularity_catch_list .catch_video{
        flex-grow: 1;
        display: flex;
        flex-flow: column;
        align-items: center;
        overflow: hidden;
        cursor: pointer;
    }
    
    .mainView .popularity_catch_list .catch_video label{
        display: flex;
        align-items: center;
        font-size: 13px;
        width: 100%;
        color: #9196a1;
    }
    .mainView .popularity_catch_list .catch_video label::before{
        background: url("/public/triangle.svg") 50% 50% no-repeat;
        content: "";
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 9px;
        height: 9px;
        margin: 0 2px 0 0px;
        transition: all .2s;
    }
    .mainView .popularity_catch_list .catch_video span{
        height: 45px;
        padding: 0px 14px 0px 0px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        align-self: flex-start;
        position: relative;
        width: 100%;
        box-sizing: border-box;
    }
    .mainView .popularity_catch_list .catch_video:hover span::after{
        background: url("/public/dot_3.svg") 50% 50% no-repeat;
        content: "";
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 8px;
        height: 12px;
        margin: 0 2px 0 0px;
        transition: all .2s;
        position: absolute;
        right: 0;
        top: 7px;
    }
    .mainView .popularity_catch_list .catch_video .catch_thum{
        flex-grow: 1;
        display: flex;
        width: 100%;
        justify-content: center;
        border-radius: 15px;
        overflow: hidden;
        margin-bottom: 15px;
    }
    .mainView .popularity_catch_list .catch_video .catch_thum img{
        height: 100%;
    }

    .mainView .vod_list{
        width: 100%;
    }
    .mainView .vod_list_line{
        display: flex;
        flex-flow: row;
        gap: 0 20px;
        height: 278px;
    }
    .mainView .vod_list_line div{
        flex-grow: 1;
        display: flex;
        flex-flow: column;
    }
    .mainView .vod_list_line div img{
        cursor: pointer;
    }
    .mainView .vod_list_line div .vod_thum{
        width: 100%;
        border-radius: 15px;
        margin-bottom: 15px;
    }
    .mainView .vod_list_line .vod_info img{
        height: 35px;
        width: 35px;
        border-radius: 50%;
        margin-right: 10px;
    }
    .mainView .vod_list_line .vod_info{
        display: flex;
        flex-flow: row;
        font-size: 15px;
    }
    .mainView .vod_list_line .vod_info p{
        margin: 0px 0px 5px 0px;
        font-size: 13px;
        
    }
    .mainView .vod_list_line .vod_info .vod_nickname{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .mainView .vod_list_line .vod_info .vod_nickname span{
        cursor: pointer;
    }
    .mainView .vod_list_line div .vod_info .vod_nickname button{
        background:transparent;
        height: 12px;
        outline: none;
        border: none;
        cursor: pointer;
    }
    .mainView .vod_list_line div:hover .vod_info .vod_nickname button{
        background: url("/public/dot_3.svg") 50% 50% no-repeat;
    }
    .mainView .vod_list_line .vod_info .vod_title{
        max-height: 33px;
        padding: 0px 26px 0px 0px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        align-self: flex-start;
        cursor: pointer;
    }
    .mainView .vod_list_line .vod_info .vod_play{
        display: flex;
        flex-flow: row;
        color: #9196a1;
    }
    .mainView .vod_list_line .vod_info .vod_play span{
        display: flex;
        align-items: center;
    }
    .mainView .vod_list_line .vod_info .vod_play .play_cnt::before{
        background: url("/public/triangle.svg") 50% 50% no-repeat;
        content: "";
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 9px;
        height: 9px;
        margin: 0 2px 0 0px;
        transition: all .2s;
    }
    .mainView .vod_list_line .vod_info .vod_play .upload_time::before{
        background: #9196a1;
        width: 2px;
        height: 2px;
        margin: 0 6px;
        border-radius: 50%;
        vertical-align: 3px;
        content: "";
        display: inline-block;
    }
    .mainView .vod_list_line .vod_info .vod_tag{
        display: flex;
        gap: 5px;
        flex-wrap: wrap;
        overflow: hidden;
        height: 20px;
    }
    .mainView .vod_list_line .vod_info .vod_tag span{
        padding: 2px 8px 2px 8px;
        border-radius: 10px;
        font-size: 11px;
    }
    .mainView .vod_list_line .vod_info .vod_category{
        background: rgba(1, 130, 255, .2);
        color: rgba(111, 185, 255, .8);
        cursor: pointer;
    }
    .mainView .vod_list_line .vod_info .vod_in_tag{
        background: #232529;
        color: #9196a1;
        cursor: pointer;
    }

    .mainView .interest_stroy_blue_color{
        margin: 0 8px;
        color: #0182ff;
    }

    .mainView .user_interest_story{
        display: flex;
        flex-flow: row;
        width: 100%;
        gap: 0 20px;
        height: 318px;
        padding-bottom: 100px;
    }
    .mainView .user_interest_story .interest_info{
        display: flex;
        flex-flow: column;
        flex-grow: 1;
        overflow: hidden;
        cursor: pointer;
    }
    .mainView .user_interest_story .interest_info .interest_info_img{
        position: relative;
        flex-grow: 1;
        display: flex;
        width: 100%;
        justify-content: center;
        border-radius: 15px;
        overflow: hidden;
        margin-bottom: 15px;
    }
    .mainView .user_interest_story .interest_info .interest_info_img img{
        height: 100%;
    }
    .mainView .user_interest_story .interest_info .interest_story_text{
        position: absolute;
        top: 7px;
        left: 7px;
        background: rgba(0, 0, 0, .7);
        height: 22px;
        padding: 0 8px;
        border-radius: 30px;
        color: #fcfcfd;
        font-size: 12px;
        line-height: 22px;
        text-align: center;
        z-index: 5;
    }
    .mainView .user_interest_story .interest_info .interest_profile{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 80px;
    }
    .mainView .user_interest_story .interest_info .interest_profile img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .mainView .user_interest_story .interest_info .interest_info_text p{
        margin: 0;
    }
    .mainView .user_interest_story .interest_info .interest_info_text .interest_nickname{
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .mainView .user_interest_story .interest_info:hover .interest_info_text .interest_nickname::after{
        background: url("/public/dot_3.svg") 50% 50% no-repeat;
        content: "";
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 8px;
        height: 12px;
        margin: 0 2px 0 0px;
        transition: all .2s;
    }
    .mainView .user_interest_story .interest_info .interest_info_text .interest_date{
        font-size: 12px;
        color:#9196a1;
    }
</style>
