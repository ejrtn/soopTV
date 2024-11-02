<template>
    <div class="personalChannel">
        <header>
            <div class="boundary">
                <div class="left">
                    <img src="/soop_logo.svg">
                    <div class="search">
                        <input type="text" placeholder="채널검색">
                        <img src="/search_btn.svg">
                    </div>
                    <button>통합검색</button>
                </div>
                <div class="right">
                    <img src="/star_list.svg">
                    <img src="/vod_upload.svg">
                    <img src="/live.svg">
                    <img src="/alarm.svg">
                    <span>코히.</span>
                </div>
            </div>
        </header>
        <div class="personalChannel_body">
            <div class="personalChannel_body_left">
                <img class="my_profile">
                <span>
                    <label class="channel_nickname"></label>
                    <label class="user_id"></label>
                </span>
                <span class="write_btn">
                    글쓰기
                </span>
                <div class="fan">
                    <div class="fan_list">
                        <div class="fan_list_head">
                            <span>열혈팬</span>
                            <img src="/x_btn.svg">
                        </div>
                    </div>
                    <p class="fan_text">열혈팬<em></em></p>
                </div>
                <div class="channel_setting">
                    <span class="channel_setting_text">
                        채널 관리
                    </span>
                    <p class="broadcast_setting">
                        <span>방송설정</span>
                        <a>외부장치 방송 설정</a>
                        <a>이슈 방송 스케줄 등록</a>
                        <a>모바일 알림 보내기</a>
                    </p>
                </div>
                <div class="vod">
                    <span>VOD</span>
                    <a>전체 VOD</a>
                    <a>다시보기</a>
                    <a>하이라이트</a>
                    <a>업로드 VOD</a>
                    <a>업로드 클립</a>
                    <a>유저 VOD</a>
                    <a>유저 클립</a>
                    <a>별풍선 클립</a>
                    <a>재생목록</a>
                    <a>Catch</a>
                </div>
                <div class="notes">
                    <span>게시판</span>
                    <p><a>전체 게시글</a></p>
                    <a>일반 게시판</a>
                    <a>사진 게시판</a>
                    <a>방명록</a>
                    <a>VOD 게시판</a>
                </div>
            </div>
            <div class="personalChannel_body_right">
                <img src="/img_ch-default.png" class="benner">
                <div class="infomation_title">
                    <div class="infomation">
                        <div class="channel_info_open">
                            <span class="channel_info_open_head"></span>
                            <span>
                                <em>채널 정보</em>
                                <div class="channel_info_open_icon"><img src="/exclamation_mark.svg"></div>
                            </span>
                        </div>
                        <div class="btns">
                            <div class="star">
                                <img src="/star.svg" class="icon">
                                <label class="star_cnt_head">333</label>
                            </div>
                            <div class="subscribe">
                                <img src="/subscribe.svg" class="icon">
                                <label class="subscribe_cnt_head">333</label>
                            </div>
                            <div class="put_balloon">
                                <img src="/put_balloon.svg">
                            </div>
                            <div class="put_adballoon">
                                <img src="/put_adballoon.svg">
                            </div>
                            <div class="put_sticker">
                                <img src="/put_sticker.svg">
                            </div>
                        </div>
                        <div class="channel_info">
                            <div class="channel_info_x "><img src="/x_btn.svg"></div>
                            <h5>채널 정보</h5>
                            <div class="channel_info_data">
                                <p class="add_ad_balloon_rank">
                                    <label>애드벌론 선물</label>
                                    <label></label>
                                </p>
                                <p class="star_cnt_rank">
                                    <label>애청자 증가수</label>
                                    <label></label>
                                </p>
                                <p class="total_play_cnt_talk_rank">
                                    <label>total_play_cnt_talk_rank</label>
                                    <label></label>
                                </p>
                                <p class="total_play_cnt_game_rank">
                                    <label>total_play_cnt_game_rank</label>
                                    <label></label>
                                </p>
                                <p class="total_play_cnt_sport_rank">
                                    <label>total_play_cnt_sport_rank</label>
                                    <label></label>
                                </p>
                                <p class="total_play_cnt_mobile_rank">
                                    <label>total_play_cnt_mobile_rank</label>
                                    <label></label>
                                </p>
                                <p class="total_up_cnt_rank">
                                    <label>UP 수</label>
                                    <label></label>
                                </p>
                                <p class="total_play_cnt_rank">
                                    <label>VOD 스트리머</label>
                                    <label></label>
                                </p>
                            </div>
                            <div class="channel_info_data">
                                <p class="star_cnt">
                                    <label>애청자 수</label>
                                    <label></label>
                                </p>
                                <p class="subscribe_cnt">
                                    <label>구독팬 수</label>
                                    <label></label>
                                </p>
                                <p class="fan_cnt">
                                    <label>팬클럽 수</label>
                                    <label></label>
                                </p>
                                <p class="suport_cnt">
                                    <label>서포터 수</label>
                                    <label></label>
                                </p>
                            </div>
                            <div class="channel_info_data">
                                <p class="create_date">
                                    <label>채널 개설일</label>
                                    <label></label>
                                </p>
                                <p class="total_play_cnt">
                                    <label>총 방송 시간</label>
                                    <label></label>
                                </p>
                                <p class="total_in_user_cnt">
                                    <label>누적 유저</label>
                                    <label></label>
                                </p>
                                <p class="total_up_cnt">
                                    <label>누적 UP 수</label>
                                    <label></label>
                                </p>
                                <p class="today_up_cnt">
                                    <label>오늘의 UP</label>
                                    <label></label>
                                </p>
                                <p class="total_visit_cnt">
                                    <label>누적 방문 수</label>
                                    <label></label>
                                </p>
                                <p class="today_visit_cnt">
                                    <label>오늘 방문 수</label>
                                    <label></label>
                                </p>
                                <p class="last_play_date">
                                    <label>최근 방송일</label>
                                    <label></label>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="infomation_self"><span></span><button></button></div>
                    
                </div>
                <div class="body_vod">
                    
                    <div class="body_content">
                        <a class="sct-vod-move">VOD</a>
                        <div class="sct-vod">
                            <div class="vod_main">
                                <img src="/interest_img.jpg">
                                <em>1:28</em>
                            </div>
                            <div class="vod_main_sub">
                                <div class="boundry">
                                    <img src="/interest_img.jpg">
                                    <em>1:28</em>
                                </div>
                                <div class="boundry">
                                    <img src="/interest_img.jpg">
                                    <em>1:28</em>
                                </div>
                            </div>
                        </div>
                        <a class="sct-board-move">게시글</a>
                        <div class="sct-board">
                            <div class="board_left">
                                <div>
                                    <div class="streamer_info">
                                        <img src="/profile_coffee.JPG" class="board_profile">
                                        <div>
                                            <span class="nickname"></span>
                                            <span class="udate">
                                                2020-10-02
                                                <div></div>
                                                조회 5,1111
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="board_title">새벽에 쓰는 레전더리 팡플단 감사인사</span>
                                        <p class="board_content">바로 전날에 레전더리 발로뛰는 큰손영입에 성공도 했고
                                                                결산 직전날에 제가 팡들에게 하고싶은말이 많아서 
                                                                뭔가 여러모로 플단 한명도 안모으고 
                                                                공약도 하나도 안걸었었는데..</p>
                                    </div>
                                </div>
                                <div class="board_img">
                                    <img src="/3781670d900509a1e.png">
                                </div>
                            </div>
                            <div class="notes_list">
                                <p>
                                    <span class="high">인기</span>
                                    <i>공지</i>
                                    <label>오랜만에 낮방?????</label>
                                    <em>[54]</em>
                                    <span> 9시간 전<em>조회 3,198</em></span>
                                </p>
                                <p>
                                    <i>공지</i>
                                    <label>노비들아 대충만든 방송국타이틀이다</label>
                                    <em>[126]</em>
                                    <span>2024-08-26<em>조회 11,804</em></span>
                                </p>
                                <p>
                                    <label>좌표 >>> 김순지</label>
                                    <em></em>
                                    <span>7시간<em>전조회 422</em></span>
                                </p>
                                <p>
                                    <label>요즘 이 패션 유행인가요??</label>
                                    <em>[4]</em>
                                    <span>21시간<em>전조회 329</em></span>
                                </p>
                            </div>
                        </div>
                        
                        <a class="catch_hz_story-move">Catch 스토리</a>
                        <div class="catch_hz_story">
                            <div class="catch">
                                <div class="catch_thum"><img src="/6956835_l.jpg"></div>
                                <div></div>
                            </div>
                            <div class="catch">
                                <div class="catch_thum"><img src="/6956835_l.jpg"></div>
                            </div>
                            <div class="catch">
                                <div class="catch_thum"><img src="/6956835_l.jpg"></div>
                            </div>
                            <div class="catch">
                                <div class="catch_thum"><img src="/6956835_l.jpg"></div>
                                <div></div>
                            </div>
                            <div class="catch">
                                <div class="catch_thum"><img src="/6956835_l.jpg"></div>
                            </div>
                            <div class="catch">
                                <div class="catch_thum"><img src="/6956835_l.jpg"></div>
                            </div>
                        </div>
                        <a class="vod-list-move">유저 클립</a>
                        <div class="vod-list">
                            <div>
                                <img src="/277829392.jfif">
                                <a class="user_vod_title">
                                    <em>[클립][최가네블루팀]</em>
                                </a>
                                <a class="user_nickname">하루살이트롤</a>
                                <p class="vod_info">
                                    <span class="play_cnt">1,100</span>
                                    <span class="play_date">2024-09-25</span>
                                </p>
                            </div>
                            <div>
                                <img src="/277829392.jfif">
                                <a class="user_vod_title">
                                    <em>[클립][최가네블루팀]</em>
                                </a>
                                <a class="user_nickname">하루살이트롤</a>
                                <p class="vod_info">
                                    <span class="play_cnt">1,000</span>
                                    <span class="play_date">2024-09-25</span>
                                </p>
                            </div>
                            <div>
                                <img src="/277829392.jfif">
                                <a class="user_vod_title">
                                    <em>[클립][최가네블루팀]</em>
                                </a>
                                <a class="user_nickname">하루살이트롤</a>
                                <p class="vod_info">
                                    <span class="play_cnt">1,000</span>
                                    <span class="play_date">2024-09-25</span>
                                </p>
                            </div>
                            <div>
                                <img src="/277829392.jfif">
                                <a class="user_vod_title">
                                    <em>[클립][최가네블루팀]</em>
                                </a>
                                <a class="user_nickname">하루살이트롤</a>
                                <p class="vod_info">
                                    <span class="play_cnt">1,000</span>
                                    <span class="play_date">2024-09-25</span>
                                </p>
                            </div>
                        </div>
                        <a class="catch_hz_box-move">Catch</a>
                        <div class="catch_hz_box">
                            <div class="catch">
                                <div class="catch_thum"><img src="/6956835_l.jpg"></div>
                                <div>
                                    <p class="catch_title">[캐치]리액션으로 시작해 끝나는 영상</p>
                                    <p class="catch_play_cnt">10,000</p>
                                </div>
                            </div>
                            <div class="catch">
                                <div class="catch_thum"><img src="/6956835_l.jpg"></div>
                                <div>
                                    <p class="catch_title">[캐치]리액션으로 시작해 끝나는 영상</p>
                                    <p class="catch_play_cnt">10,000</p>
                                </div>
                            </div>
                            <div class="catch">
                                <div class="catch_thum"><img src="/6956835_l.jpg"></div>
                                <div>
                                    <p class="catch_title">[캐치]리액션으로 시작해 끝나는 영상</p>
                                    <p class="catch_play_cnt">10,000</p>
                                </div>
                            </div>
                            <div class="catch">
                                <div class="catch_thum"><img src="/6956835_l.jpg"></div>
                                <div>
                                    <p class="catch_title">[캐치]리액션으로 시작해 끝나는 영상</p>
                                    <p class="catch_play_cnt">10,000</p>
                                </div>
                            </div>
                            <div class="catch">
                                <div class="catch_thum"><img src="/6956835_l.jpg"></div>
                                <div>
                                    <p class="catch_title">[캐치]리액션으로 시작해 끝나는 영상</p>
                                    <p class="catch_play_cnt">10,000</p>
                                </div>
                            </div>
                            <div class="catch">
                                <div class="catch_thum"><img src="/6956835_l.jpg"></div>
                                <div>
                                    <p class="catch_title">[캐치]리액션</p>
                                    <p class="catch_play_cnt">10,000</p>
                                </div>
                            </div>
                        </div>
                        <a class="sct-uvod-move">유저 VOD</a>
                        <div class="sct-uvod">
                            <div class="uvod_big">
                                <img src="/277829392.jfif">
                            </div>
                            <div class="uvod_small">
                                <div>
                                    <img src="/277829392.jfif">
                                    <div class="vuod_profile"><img src="/profile_coffee.JPG"></div>
                                    <p class="uvod_nickname">코히.</p>
                                    <p class="uvod_title">[인방학새론]교수 강의</p>
                                    <p class="uvod_play_cnt_date">
                                        <span class="uvod_play_cnt">98</span>
                                        <span class="uvod_play_date">2024-10-13</span>
                                    </p>
                                </div>
                                <div>
                                    <img src="/277829392.jfif">
                                    <div class="vuod_profile"><img src="/profile_coffee.JPG"></div>
                                    <p class="uvod_nickname">코히.</p>
                                    <p class="uvod_title">[인방학새론]교수 강의</p>
                                    <p class="uvod_play_cnt_date">
                                        <span class="uvod_play_cnt">98</span>
                                        <span class="uvod_play_date">2024-10-13</span>
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal">
            <div class="modal_content">
                <div class="modal_head">
                    <div><img src="/x_btn.svg"></div>
                    <p>프로필 메시지 수정</p>
                </div>
                <div class="textarea" >
                    <textarea placeholder="방문 유저에게 전하고 싶은 이야기를 작성해 보세요." maxlength="150"></textarea>
                    <div>
                        <span>0</span>
                        <span> / 150</span>
                    </div>
                </div>
                <div class="modal_bottom">
                    <button>수정</button>
                    <button>취소</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    
    import axios from "axios";
    import { onMounted, defineProps, inject } from "vue";
    const props = defineProps({
        user_id:String,
    })
    onMounted(()=>{
        let imgPath = inject("imgPath")['_value']
        document.body.addEventListener("click",(e)=>{
            if(e.target.classList.contains("channel_info_open_icon")
                || e.target.parentNode.classList.contains("channel_info_open_icon")){
                if(document.querySelector(".channel_info").classList.contains("display_flex")){
                    document.querySelector(".channel_info").classList.remove("display_flex")
                }else{
                    document.querySelector(".channel_info").classList.add("display_flex")
                }
            }else if(e.target.parentNode.classList.contains("fan_text")){
                document.querySelector(".fan_list").classList.add("open")
            }else if(e.target.parentNode.classList.contains("fan_list_head")){
                document.querySelector(".fan_list").classList.remove("open")
            }else{
                let el = e.target
                while(1){
                    if(!el.classList.contains("channel_info")){
                        el = el.parentNode
                    }else{
                        break;
                    }
                    if(el.tagName == "BODY"){
                        document.querySelector(".channel_info").classList.remove("display_flex")
                        document.querySelector(".fan_list").classList.remove("open")
                        break;
                    }
                }
            }
        })
        document.querySelector(".infomation_self button").addEventListener("click",()=>{
            document.querySelector(".textarea textarea").value = document.querySelector(".infomation_self span").textContent
            document.querySelector(".modal").classList.add("display_flex")
        })
        document.querySelector(".modal_head img").addEventListener("click",()=>{
            document.querySelector(".modal").classList.remove("display_flex")
        })
        document.querySelectorAll(".modal_bottom button")[0].addEventListener("click",()=>{
            axios.post("/api/user_channel_comment",{
                'user_id':props.user_id,
                'channel_comment' : document.querySelector(".textarea textarea").value
            }).then((req)=>{
                
                if(req.status == 200) {
                    document.querySelector(".modal").classList.remove("display_flex")
                    document.querySelector(".infomation_self span").textContent = document.querySelector(".textarea textarea").value
                }
            })
        })
        document.querySelectorAll(".modal_bottom button")[1].addEventListener("click",()=>{
            document.querySelector(".modal").classList.remove("display_flex")
        })
        document.querySelector(".modal textarea").addEventListener("keydown",(e)=>{
            if (e.key === 'Enter') {
                e.preventDefault();
            }
        })
        document.querySelector(".modal textarea").addEventListener("input",(e)=>{
            document.querySelectorAll(".textarea span")[0].textContent = e.target.value.length
        })
        document.querySelector(".channel_info_x").addEventListener("click",()=>{
            document.querySelector(".channel_info").classList.remove("display_flex")
        })
        document.querySelector(".put_balloon").addEventListener("click",()=>{

            let openWin = window.open("/gift_balloon/"+props.user_id, "giftBalloon", "width=570,height=580");
            
        })
        axios.get("/api/user_channel_info/"+props.user_id+"/")
        .then((req)=>{
            let result = req.data.result[0]
            for(let i=0;i<Object.keys(result).length;i++){
                if(Object.keys(result)[i] == 'profile_path'){
                    document.querySelector(".my_profile").src = imgPath + result[Object.keys(result)[i]]
                }else{
                    if(Object.keys(result)[i] == 'user_id'){
                        document.querySelector("."+Object.keys(result)[i]).textContent = "("+result[Object.keys(result)[i]]+")"
                    }else if(Object.keys(result)[i] == 'user_nickname'){
                        document.querySelector(".channel_nickname").textContent = result[Object.keys(result)[i]]
                    }else if(Object.keys(result)[i] == 'channel_comment'){
                        document.querySelector(".infomation_self span").textContent = result[Object.keys(result)[i]]
                    }else if(Object.keys(result)[i] == 'channel_name'){
                        document.querySelector(".channel_info_open_head").textContent = result[Object.keys(result)[i]] == null ? result["user_nickname"] : result[Object.keys(result)[i]]
                    }else{
                        if(Object.keys(result)[i] == 'subscribe_cnt'){
                            document.querySelector("."+Object.keys(result)[i]+"_head").textContent = result[Object.keys(result)[i]].replaceAll("명","")
                        }else if(Object.keys(result)[i] == 'star_cnt'){
                            let arr = result[Object.keys(result)[i]].replaceAll("명","").split("")
                            let t = ''
                            
                            if(arr.length >= 5){
                                for(let a=0;a<arr.length-4;a++){
                                    t += arr[a];
                                }
                                t += "만"
                            }else if(arr.length >= 4){
                                for(let a=0;a<arr.length-3;a++){
                                    t += arr[a];
                                }
                                t += "천"
                            }else{
                                t = result[Object.keys(result)[i]].replaceAll("명","")
                            }
                            document.querySelector("."+Object.keys(result)[i]+"_head").textContent = t
                        }else if(Object.keys(result)[i] == "total_play_cnt_talk_rank"){
                            document.querySelectorAll("."+Object.keys(result)[i]+" label")[0].textContent = '토크/캠방'
                            if(result[Object.keys(result)[i]] == "") document.querySelector("."+Object.keys(result)[i]).classList.add("display_none")
                        }else if(Object.keys(result)[i]== "total_play_cnt_game_rank"){
                            document.querySelectorAll("."+Object.keys(result)[i]+" label")[0].textContent = '게임'
                            if(result[Object.keys(result)[i]] == "") document.querySelector("."+Object.keys(result)[i]).classList.add("display_none")
                        }else if(Object.keys(result)[i] == "total_play_cnt_sport_rank"){
                            document.querySelectorAll("."+Object.keys(result)[i]+" label")[0].textContent = '스포츠'
                            if(result[Object.keys(result)[i]] == "") document.querySelector("."+Object.keys(result)[i]).classList.add("display_none")
                        }else if(Object.keys(result)[i] == "total_play_cnt_mobile_rank"){
                            document.querySelectorAll("."+Object.keys(result)[i]+" label")[0].textContent = '모바일'
                            if(result[Object.keys(result)[i]] == "") document.querySelector("."+Object.keys(result)[i]).classList.add("display_none")
                        }
                        document.querySelectorAll("."+Object.keys(result)[i]+" label")[1].textContent = result[Object.keys(result)[i]]
                    }
                }
            }
        })

        axios.get("/api/passionate_user_list/"+props.user_id)
        .then((req)=>{
            const data = req.data.result
            
            for(let i=0;i<data.length-9;i++){
                
                let t = '<p class="fan_info">'
                t += '<a>'
                if(parseInt(data[i]['passionate_user_rank']) == 1){
                    t += '<img src="/gold_king.svg" class="king">'
                }else if(parseInt(data[i]['passionate_user_rank']) == 2){
                    t += '<img src="/silber_king.svg" class="king">'
                }
                t += '<img src="'+imgPath+data[i]['profile_path']+'" class="passionate_profile">'
                t += data[i]['user_name']
                t += '</a>'
                if(parseInt(data[i]['passionate_user_rank']) == 1){
                    t += '<span>회장</span>'
                }else if(parseInt(data[i]['passionate_user_rank']) == 2){
                    t += '<span>부회장</span>'
                }else{
                    t += '<span>'+data[i]['passionate_user_rank']+'등</span>'
                }
                t += '</p>'
                
                if(parseInt(data[i]['passionate_user_rank']) < 4){
                    document.querySelector(".fan").innerHTML += t
                }
                
                if(parseInt(data[i]['passionate_user_rank']) < 11){
                    t = '<div class="fan_line"><p class="fan_info">'
                }else{
                    t = '<p class="fan_info">'
                }
                t += '<a>'
                if(parseInt(data[i]['passionate_user_rank']) == 1){
                    t += '<img src="/gold_king.svg" class="king">'
                }else if(parseInt(data[i]['passionate_user_rank']) == 2){
                    t += '<img src="/silber_king.svg" class="king">'
                }
                t += '<img src="'+imgPath+data[i]['profile_path']+'" class="passionate_profile">'
                t += data[i]['user_name']
                t += '</a>'
                if(parseInt(data[i]['passionate_user_rank']) == 1){
                    t += '<span>회장</span>'
                }else if(parseInt(data[i]['passionate_user_rank']) == 2){
                    t += '<span>부회장</span>'
                }else{
                    t += '<span>'+data[i]['passionate_user_rank']+'등</span>'
                }
                
                if(parseInt(data[i]['passionate_user_rank']) < 11){
                    t += '</p></div>'
                    document.querySelector(".fan_list").innerHTML += t
                }else{
                    t += '</p>'
                    document.querySelectorAll(".fan_list .fan_line")[parseInt(data[i]['passionate_user_rank'])-11].innerHTML += t
                }
                
            }
        })
    })


</script>

<style scope>
    .personalChannel{
        background: #0C0D0E;
        width: 100%;
        height: 100%;
    }
    .personalChannel header{
        display: flex;
        width: 100%;
        height: 64px;
        background: #1b1b1c;
        justify-content: center;
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        border-bottom: 1px solid #0C0D0E;
    }
    .personalChannel header .boundary{
        width: 1180px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .personalChannel header .boundary .left{
        display: flex;
        align-items: center;
    }
    .personalChannel header .boundary .left img{
        height: 47px;
        margin-right: 30px;
        cursor: pointer;
    }
    .personalChannel header .boundary .left .search{
        position: relative;
        display: flex;
        align-items: center;
        margin-right: 10px;
    }
    .personalChannel header .boundary .left .search img{
        height: 22px;
        position: absolute;
        right: 10px;
        margin: 0;
        cursor: pointer;
    }
    .personalChannel header .boundary .left .search input{
        height: 40px;
        background: #0e0e0e;
        border: 1px solid #2e2e2f;
        color: #c8c8c8;
        width: 280px;
        outline: none;
        border-radius: 5px;
        padding: 0 42px 0 12px;
        box-sizing: border-box;
    }
    .personalChannel header .boundary .left button{
        padding: 0 12px;
        font-size: 12px;
        height: 40px;
        background: #0e0e0e;
        border: 1px solid #2e2e2f;
        color: #999;
        border-radius: 5px;
    }
    .personalChannel header .boundary .right{
        display: flex;
        align-items: center;
        gap: 0 28px;
    }
    .personalChannel header .boundary .right img{
        cursor: pointer;
    }
    .personalChannel header .boundary .right img:nth-child(1){
        height: 20px;
    }
    .personalChannel header .boundary .right img:nth-child(2){
        height: 20px;
    }
    .personalChannel header .boundary .right img:nth-child(3){
        height: 30px;
    }
    .personalChannel header .boundary .right img:nth-child(4){
        height: 26px;
    }
    .personalChannel header .boundary .right span{
        font-size: 13px;
        color: #8db4fa;
        font-weight: 700;
        cursor: pointer;
    }


    .personalChannel .personalChannel_body{
        width: 1180px;
        display: flex;
        height: 100%;
        margin: 0 auto;
        padding-top: 64px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left{
        background: #1b1b1c;
        width: 251px;
        box-sizing: border-box;
        display: flex;
        flex-flow: column;
        align-items: center;
        padding-top: 10px;
        height: 100%;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left img{
        height: 90px;
        width: 90px;
        border-radius: 50%;
        top: -14px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .nickname{
        font-weight: bold;
        font-size: 14px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .user_id{
        font-size: 12px;
        color: #666;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .write_btn{
        color: #7398ff;
        border: 1px solid #7398ff;
        font-size: 14px;
        font-weight: 800;
        border-radius: 5px;
        padding: 12px 65px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-bottom: 20px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .write_btn::before{
        content: "";
        background: url("/public/write_btn.svg") 50% 50% no-repeat;
        width: 16px;
        height: 16px;
        margin-right: 5px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .fan{
        width: 195px;
        padding-bottom: 10px;
        border-bottom: 1px solid #2e2e2f;
        position: relative;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .fan_list{
        position: absolute;
        top: 58px;
        left: 0px;
        background: #1b1b1c;
        border: 1px solid #333;
        padding: 26px 30px 32px 30px;
        z-index: 999;
        display: none;
        align-items: flex-start;
        justify-content: center;
        flex-flow: column;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .fan .fan_list .fan_info .king{
        top: 1px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .fan_list.open{
        display: flex;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .fan_list .fan_list_head{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #333;
        padding-bottom: 5px;
        margin-bottom: 10px;
        width: 364px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .fan_list .fan_list_head img{
        width: 15px;
        height: 15px;
        cursor: pointer;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .fan .fan_line{
        display: flex;
        align-items: center;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .fan .fan_line a{
        
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .fan .fan_line p{
        width: 162px;
        margin: 0;
        padding-top: 13px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .fan .fan_line p:nth-child(1){
        padding-right: 20px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .fan .fan_line p:nth-child(2){
        padding-left: 20px;
        border-left: 1px solid #333;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .fan .fan_text{
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .fan .fan_text em{
        background: url("/public/plus_btn.svg") 50% 50% no-repeat;
        background-color: #333;
        background-size: 20px 10px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        cursor: pointer;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .fan .fan_info{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .fan .fan_info span{
        display: inline-block;
        width: 42px;
        background: #1b1b1c;
        color: #c8c8c8;
        border: 1px solid #2e2e2f;
        border-radius: 20px;
        font-size: 12px;
        text-align: center;
        padding: 3px 0px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .fan .fan_info .king{
        width: 28px;
        height: 19px;
        position: absolute;
        top: -13px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .fan .fan_info a{
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 115px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .fan .fan_info a .passionate_profile{
        width: 28px;
        height: 28px;
        margin-right: 12px;
        border-radius: 50%;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .channel_setting{
        margin-top: 20px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .channel_setting .channel_setting_text{
        background-color: #222;
        border-color: #222;
        color: #999999;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 800;
        border-radius: 5px;
        padding: 15px 53px;
        cursor: pointer;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .channel_setting .channel_setting_text::before{
        margin-right: 10px;
        content: "";
        background: url("/public/setting.svg") 50% 50% no-repeat;
        width: 17px;
        height: 17px;
        margin-right: 12px;
    }

    .personalChannel .personalChannel_body .personalChannel_body_left .channel_setting .broadcast_setting{
        display: flex;
        flex-flow: column;
        padding-bottom: 20px;
        border-bottom: 1px solid #2e2e2f;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .channel_setting .broadcast_setting span{
        font-weight: bold;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        margin-top: 20px;
        padding-left: 5px;
        cursor: pointer;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .channel_setting .broadcast_setting span::after{
        content: "";
        background: url("/public/arrow_down.svg") 50% 50% no-repeat;
        width: 10px;
        height: 10px;
        transform: rotate(180deg);
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .channel_setting .broadcast_setting span.down::after{
        transform: rotate(0deg);
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .channel_setting .broadcast_setting a{
        padding-left: 5px;
        font-size: 12px;
        color: #999;
        padding: 6px 0 6px 13px;
        cursor: pointer;
        border-radius: 5px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .channel_setting .broadcast_setting a:hover{
        background: #272727;
        font-weight: 800;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .vod{
        display: flex;
        flex-flow: column;
        width: 195px;
        padding-bottom: 20px;
        border-bottom: 1px solid #2e2e2f;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .vod span{
        font-weight: bold;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        margin-top: 20px;
        padding-left: 5px;
        cursor: pointer;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .vod span::after{
        content: "";
        background: url("/public/arrow_down.svg") 50% 50% no-repeat;
        transform: rotate(180deg);
        width: 10px;
        height: 10px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .vod span.down::after{
        transform: rotate(0deg);
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .vod a{
        padding-left: 5px;
        font-size: 12px;
        color: #999;
        padding: 6px 0 6px 13px;
        cursor: pointer;
        border-radius: 5px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .vod a:hover{
        background: #272727;
        font-weight: 800;
    }

    .personalChannel .personalChannel_body .personalChannel_body_left .notes{
        display: flex;
        flex-flow: column;
        width: 195px;
        padding-bottom: 20px;
        border-bottom: 1px solid #2e2e2f;
        margin-bottom: 100px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .notes span{
        font-weight: bold;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        margin-top: 20px;
        padding-left: 5px;
        cursor: pointer;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .notes span::after{
        content: "";
        background: url("/public/arrow_down.svg") 50% 50% no-repeat;
        transform: rotate(180deg);
        width: 10px;
        height: 10px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .notes span.down::after{
        transform: rotate(0deg);
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .notes p{
        margin: 0;
        border-bottom: 1px dotted #2e2e2f;
        margin-bottom: 10px;
        padding-bottom: 10px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .notes a{
        font-size: 12px;
        color: #999;
        padding: 6px 0 6px 13px;
        cursor: pointer;
        border-radius: 5px;
        width: 100%;
        display: inline-block;
        box-sizing: border-box;
    }
    .personalChannel .personalChannel_body .personalChannel_body_left .notes a:hover{
        background: #272727;
        font-weight: 800;
    }

    .personalChannel .personalChannel_body .personalChannel_body_right{
        flex-grow: 1;
        display: flex;
        flex-flow: column;
        height: 100%;
        box-sizing: border-box;
        width: 884px;
    }

    .personalChannel .personalChannel_body .personalChannel_body_right .benner{
        height: 188px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title{
        padding: 25px 31px 18px 47px;
        background: #121213;
        border-bottom: 1px solid #1b1b1c;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation{
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation span{
        font-size: 22px;
        font-weight: bold;
        color: #fff;
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation span em{
        font-size: 12px;
        color: #FCFCFD;
        display: none;
        align-items: center;
        position: absolute;
        padding: 7px 10px;
        border-radius: 12px;
        font-weight: 600;
        z-index: 10;
        background: #555;
        top: 32px;
        left: -18px;
        white-space: nowrap;
        cursor: pointer;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation span:hover em{
        display: flex;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation .channel_info_open{
        display: flex;
        align-items: center;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation span .channel_info_open_icon {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 1px solid #323232;
        margin-left: 5px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation span .channel_info_open_icon img{
        width: 13px;
        height: 13px;
    }

    
    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation .btns{
        display: flex;
        align-items: center;
        gap: 0 5px
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation .btns div{
        display: flex;
        align-items: center;
        border: 1px solid #333;
        height: 34px;
        padding: 0 10px;
        cursor: pointer;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation .btns div img{
        width: 15px;
        height: 15px;
        
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation .icon{
        height: 15px;
        width: 15px;
        margin-right: 7px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation label{
        font-size: 18px;
        font-weight: bold;
        color: #999999;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation .star_cnt_head{
        font-size: 16px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation .subscribe_cnt_head{
        font-size: 16px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation_self{
        display: flex;
        align-items: center;
        font-size: 13px;
        color: #999;
        margin-top: 20px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation_self button{
        content: "";
        outline: none;
        border: none;
        background: url("/public/write_gray.svg");
        background-size: 2px 12px;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        width: 20px;
        height: 20px;
        background-size: 13px;
        margin-left: 30px;
        cursor: pointer;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right h3{
        display: flex;
        flex-flow: column;
        color: #e5e5e5;
        align-items: center;
        font-size: 24px;
        margin-top: 100px;
        font-weight: 500;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right h3::after{
        content:"";
        background: url("/public/img_bs_default.png") 50% 100% no-repeat;
        height: 223px;
        width: 100%;
    }

    .personalChannel .personalChannel_body .personalChannel_body_right .body_content{
        padding: 36px 0px 72px 48px;

    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content a{
        margin-top: 30px;
        margin-bottom: 30px;
        font-size: 20px;
        font-weight: bold;
        display: flex;
        align-items: center;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-vod{
        height: 332px;
        display: flex;
        flex-flow: row;
        gap: 0 15px;
        
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-vod .vod_main{
        position: relative;
        width: 70%;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-vod .vod_main em{
        position: absolute;
        bottom: 0px;
        right: 10px;
        color: #ffffff;
        background: #1b1b1b;
        padding: 0px 7px 2px 4px;
        font-size: 14px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-vod .vod_main_sub{
        width: 30%;
        position: relative;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-vod .vod_main_sub em{
        position: absolute;
        bottom: 5px;
        right: 5px;
        color: #ffffff;
        background: #1b1b1b;
        padding: 0px 7px 2px 4px;
        font-size: 14px;
    }
    
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-vod div{
        display: flex;
        flex-flow: column;
        gap: 20px 0px;
        position: relative;
        height: 100%;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-vod div .boundary{
        height: 50%;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-vod img{
        border-radius: 10px;
        height: 100%;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-vod .vod_big{
        width: 100%;
        height: 100%;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-vod .vod_small{
        width: 100%;
        height: 50%;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-vod-move::before{
        content: "";
        background: url("/public/vod_play_blue.svg") 50% 100% no-repeat;
        height: 25px;
        width: 20px;
        margin-right: 5px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-vod-move::after{
        content: "";
        background: url("/public/arrow_right_blue.svg") 50% 100% no-repeat;
        height: 16px;
        width: 16px;
        margin-top: 4px;
        margin-left: 2px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-vod{
        height: 332px;
        width: 100%;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-board{
        height: 192px;
        width: 100%;
        display: flex;
        gap: 0px 40px;
    }
    
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-board-move::before{
        content: "";
        background: url("/public/sct-board.svg") 50% 100% no-repeat;
        height: 25px;
        width: 20px;
        margin-right: 5px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-board-move::after{
        content: "";
        background: url("/public/arrow_right_blue.svg") 50% 100% no-repeat;
        height: 16px;
        width: 16px;
        margin-top: 4px;
        margin-left: 2px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .catch_hz_story{
        height: 225px;
        width: 100%;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .catch_hz_story-move::before{
        content: "";
        background: url("/public/catch_blue.svg") 50% 100% no-repeat;
        height: 25px;
        width: 20px;
        margin-right: 5px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .catch_hz_story-move::after{
        content: "";
        background: url("/public/arrow_right_blue.svg") 50% 100% no-repeat;
        height: 16px;
        width: 16px;
        margin-top: 4px;
        margin-left: 2px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .catch_hz_box{
        height: 275px;
        width: 100%;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .catch_hz_box-move::before{
        content: "";
        background: url("/public/catch_blue.svg") 50% 100% no-repeat;
        height: 25px;
        width: 20px;
        margin-right: 5px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .catch_hz_box-move::after{
        content: "";
        background: url("/public/arrow_right_blue.svg") 50% 100% no-repeat;
        height: 16px;
        width: 16px;
        margin-top: 4px;
        margin-left: 2px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .vod-list{
        width: 100%;
        height: 200px;
        display: flex;
        gap: 0 15px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .vod-list-move::before{
        content: "";
        background: url("/public/vod_play_blue.svg") 50% 100% no-repeat;
        height: 25px;
        width: 20px;
        margin-right: 5px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .vod-list-move::after{
        content: "";
        background: url("/public/arrow_right_blue.svg") 50% 100% no-repeat;
        height: 16px;
        width: 16px;
        margin-top: 4px;
        margin-left: 2px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-uvod{
        height: 244px;
        width: 100%;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-uvod-move::before{
        content: "";
        background: url("/public/vod_play_blue.svg") 50% 100% no-repeat;
        height: 25px;
        width: 20px;
        margin-right: 5px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-uvod-move::after{
        content: "";
        background: url("/public/arrow_right_blue.svg") 50% 100% no-repeat;
        height: 16px;
        width: 16px;
        margin-top: 4px;
        margin-left: 2px;
    }


    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-board .board_left{
        width: 50%;
        padding: 0 16px 0 28px;
        background: #1b1b1c;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-board .board_right{
        width: 50%;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-board .board_left .board_profile{
        height: 40px;
        width: 40px;
        border-radius: 50%;
        margin-right: 10px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-board .board_left .streamer_info{
        display: flex;
        margin-bottom: 20px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-board .board_left .streamer_info .nickname{
        color: #c8c8c8;
        font-size: 14px;
        font-weight: bold;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-board .board_left .streamer_info .udate{
        color: #c8c8c8;
        font-size: 12px;
    }

    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-board .board_left .streamer_info div span{
        display: flex;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-board .board_left .board_title{
        font-size: 22px;
        color: #e5e5e5;
        font-weight: bold;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 1;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-board .board_left .board_content{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        height: 32px;
        margin-top: 12px;
        font-size: 12px;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        color: #999;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-board .board_left .board_img{
        overflow: hidden;
        width: 160px;
        height: 160px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        margin-left: 16px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .notes_list{
        font-size: 12px;
        display: flex;
        flex-flow: column;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-board i{
        border-radius: 10px;
        text-align: center;
        padding: 0 5px;
        height: 20px;
        display: inline-block;
        line-height: 20px;
        border: 1px solid #6b85cf;
        color: #6b85cf;
        margin-right: 5px;
        flex-shrink: 0;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-board .high{
        border-radius: 10px;
        text-align: center;
        padding: 0 5px;
        height: 20px;
        display: inline-block;
        line-height: 20px;
        border: 1px solid #ff3f3f;
        color: #ff3f3f;
        margin-right: 5px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-board .notes_list p{
        border-bottom: 1px solid #1d1d1d;
        height: 25%;
        margin: 0;
        display: flex;
        align-items: center;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-board .notes_list p label{
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 1;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-board .notes_list p span:not(.high){
        color: #8c8c8c;
        margin-left: 36px;
        white-space: nowrap;
        display: flex;
        align-items: center;
        font-size: 11px;
        justify-content: flex-end;
        flex-grow: 1;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-board .notes_list p span em{
        display: flex;
        align-items: center;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-board .notes_list p span em::before{
        content: "";
        height: 2px;
        width: 2px;
        background: #8c8c8c;
        border-radius: 50%;
        margin: 0px 5px;
    }


    /* catch 스토리*/
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .catch_hz_story{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        overflow: hidden;
        gap: 0 15px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .catch_hz_story .catch{
        flex-grow: 1;
        display: flex;
        flex-flow: column;
        align-items: center;
        overflow: hidden;
        cursor: pointer;
        height: 100%;
        border-radius: 10px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .catch_hz_story .catch .catch_thum{
        flex-grow: 1;
        height: 100%;
        width: 100%;
        border-radius: 15px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .catch_hz_story .catch .catch_thum img{
        height: 100%;
        border-radius: 10px;
    }

    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .vod-list div{
        flex-grow: 1;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .vod-list div img{
        width: 100%;
        border-radius: 10px;
        cursor: pointer;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .vod-list div .user_vod_title{
        font-size: 13px;
        margin: 10px 0px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .vod-list div .user_vod_title em{
        cursor: pointer;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .vod-list div:hover .user_vod_title::after{
        content: "";
        background: url("/public/dot_3.svg") 50% 100% no-repeat;
        height: 13px;
        width: 10px;
        cursor: pointer;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .vod-list div .user_nickname{
        font-size: 12px;
        margin: 10px 0px;
        color: #8c8c8c;
        cursor: pointer;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .vod-list div .vod_info{
        font-size: 12px;
        color: #8c8c8c;
        display: flex;
        align-items: center;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .vod-list div .vod_info .play_cnt{
        display: flex;
        align-items: center;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .vod-list div .vod_info .play_cnt::before{
        content: "";
        background: url("/public/triangle.svg") 50% 100% no-repeat;
        height: 10px;
        width: 10px;
        margin-right: 3px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .vod-list div .vod_info .play_date{
        display: flex;
        align-items: center;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .vod-list div .vod_info .play_date::before{
        content: "";
        background: #8c8c8c;
        height: 2px;
        width: 2px;
        border-radius: 50%;
        margin:0px 5px;
    }


    /* catch */
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .catch_hz_box{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        overflow: hidden;
        gap: 0 15px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .catch_hz_box .catch{
        flex-grow: 1;
        display: flex;
        flex-flow: column;
        align-items: center;
        overflow: hidden;
        cursor: pointer;
        height: 100%;
        border-radius: 10px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .catch_hz_box .catch .catch_thum{
        flex-grow: 1;
        height: 100%;
        border-radius: 15px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .catch_hz_box .catch{
        font-size: 13px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .catch_hz_box .catch div{
        width: 100%;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .catch_hz_box .catch .catch_thum img{
        height: 100%;
        border-radius: 10px;
    }

    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .catch_hz_box .catch .catch_title{
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 1;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .catch_hz_box .catch .catch_play_cnt{
        color: #888;
        display: flex;
        align-items: center;
        margin: 0px 0px 0px 0px;
    }
    
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .catch_hz_box .catch .catch_play_cnt::before{
        content: "";
        background: url("/public/triangle.svg") 50% 100% no-repeat;
        height: 10px;
        width: 10px;   
    }

    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-uvod{
        display: flex;
        gap: 0 15px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-uvod .uvod_big{
        width: 50%;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-uvod .uvod_small{
        width: 50%;
        display: flex;
        gap: 0 15px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-uvod .uvod_small .uvod_title{
        color: #e5e5e5;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        height: 32px;
        margin-top: 12px;
        font-size: 14px;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-uvod .uvod_small div{
        width: 50%;
        position: relative;
        background: #1b1b1c;
        border-radius: 10px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-uvod .uvod_small .uvod_title{
        margin: 0;
        padding: 0px 15px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-uvod div img{
        width: 100%;
        border-radius: 10px;
    }
    
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-uvod .uvod_small span{
        font-size: 12px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-uvod .uvod_small .uvod_play_cnt_date{
        display: flex;
        align-items: center;
        color: #666;
        padding: 0px 15px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-uvod .uvod_small .uvod_play_cnt{
        display: flex;
        align-items: center;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-uvod .uvod_small .uvod_play_cnt::before{
        content: "";
        background: url("/public/triangle.svg") 50% 100% no-repeat;
        height: 10px;
        width: 10px;
        margin-right: 4px;
    }

    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-uvod .uvod_small .uvod_play_date{
        display: flex;
        align-items: center;
        
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-uvod .uvod_small .uvod_play_date::before{
        content: "";
        background: #666;
        height: 2px;
        width: 2px;  
        margin: 0px 5px;
        border-radius: 50%;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-uvod .uvod_small .uvod_nickname{
        margin: 10px 0;
        padding-left: 60px;
        color: #e5e5e5;
        font-size: 13px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-uvod .uvod_small .vuod_profile{
        position: absolute;
        height: 40px;
        width: 40px;
        padding: 5px;
        top: 105px;
        left: 10px;
        background: #1b1b1c;
        border-radius: 50%;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .body_content .sct-uvod .uvod_small .vuod_profile img{
        height: 100%;
        width: 100%;
        border-radius: 50%;
    }


    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation .channel_info{
        position: absolute;
        display: none;
        flex-flow: column;
        background: #1b1b1c;
        border: 1px solid #333;
        width: 180px;
        padding: 15px 35px 35px 35px;
        z-index: 10;
        top: 40px;
        left: 50px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation .channel_info h5{
        font-size: 16px;
        color: #f5f6f7;
        margin: 0;
        padding: 0px 0px 10px 0px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation .channel_info p{
        display: none;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation .channel_info p:not(.display_none){
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation .channel_info p label{
        font-size: 12px;
        margin-bottom: 4px;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation .channel_info .channel_info_data{
        display: flex;
        flex-flow: column;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation .channel_info .channel_info_x{
        width: 100%;
        display: flex;
        align-items: center;
        height: 15px;
        justify-content: flex-end;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation .channel_info .channel_info_x img{
        height: 15px;
        width: 15px;
        cursor: pointer;
    }
    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation .channel_info .channel_info_data{
        padding: 20px 0px;
        border-top: 1px solid #333;
    }


    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation .display_flex{
        display: flex;
    }

    .personalChannel .personalChannel_body .personalChannel_body_right .infomation_title .infomation .channel_info_data label{
        margin: 0;
    }





    .personalChannel .modal{
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        align-items: center;
        justify-content: center;
        display: flex;
        background: #00000080;
        display: none;
    }
    .personalChannel .modal .modal_content{
        background: #1b1b1c;
        border: 1px solid #333;
        z-index: 1500;
        border-radius: 2px;
        position: static;
        padding: 25px 32px 29px;
        width: 320px;
        height: 250px;
    }
    .personalChannel .modal .modal_content .modal_head{
        display: flex;
        flex-flow: column;
    }
    .personalChannel .modal .modal_content .modal_head p{
        display: flex;
        flex-flow: column;
        margin-top: 0;
        border-bottom: 1px solid #333;
        font-size: 14px;
        font-weight: bold;
        padding-bottom: 5px;
    }
    .personalChannel .modal .modal_content .modal_head div{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    .personalChannel .modal .modal_content .modal_head img{
        width: 15px;
        height: 15px;
        cursor: pointer;
    }
    .personalChannel .modal .modal_content .textarea{
        display: flex;
        flex-flow: column;
        position: relative;
    }
    .personalChannel .modal .modal_content .textarea textarea{
        resize: none;
        padding: 20px 16px;
        height: 100px;
        background: #0e0e0e;
        outline: none;
        border: 1px solid #333;
        font-size: 10px;
        color: #fff;
    }
    .personalChannel .modal .modal_content .textarea div{
        position: absolute;
        right: 10px;
        bottom: 10px;
        font-size: 11px;
        color: #666;
    }
    .personalChannel .modal .modal_content .modal_bottom{
        display: flex;
        margin-top: 20px;
        justify-content: center;
        gap: 0 10px;
    }
    .personalChannel .modal .modal_content .modal_bottom button{
        display: flex;
        background: transparent;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        padding: 5px 16px;
        border-radius: 4px;
        cursor: pointer;
    }
    .personalChannel .modal .modal_content .modal_bottom button:nth-child(1){
        color: #7398ff;
        border: 1px solid #7398ff;
    }
    .personalChannel .modal .modal_content .modal_bottom button:nth-child(2){
        border: 1px solid #1b1b1c;
        background: #0e0e0e;
        color: #999;
    }
    
    .personalChannel .display_flex{
        display: flex;
    };
</style>