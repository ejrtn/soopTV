<template>
    <div class="live_player">
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
        <div class="live_player_body">
            <div class="player">
                <div class="player_area">
                    <video src=""></video>
                </div>
                <div class="player_info">
                    <div class="user_info">
                        <div>
                            <img src="" class="profile">
                            <span class="nickname"></span>
                            <span class="subscribe" tip="구독"></span>
                            <span class="star" tip="즐겨찾기"></span>
                            <span class="up_cnt" tip="up"></span>
                        </div>
                        <div>
                            <button class="star_balloon" tip="별풍선"></button>
                            <button class="ad_balloon" tip="애드벌룬"></button>
                            <button class="sticker" tip="스티커"></button>
                            <button class="catch" tip="유저클립 & Catch"></button>
                            <button class="share" tip="공유하기"></button>
                            <button class="more"  tip="더 보기"></button>
                        </div>
                    </div>
                    <div class="live_info">
                        <span class="title"></span>
                        <div class="user_time">
                            <span class="user_cnt"></span>
                            <span class="time"></span>
                        </div>
                    </div>
                    <div class="tag"></div>
                </div>
            </div>
            <div class="wrapping">
                <div class="setting_chating">
                    <div class="setting">
                        <span>채팅</span>
                        <label>
                            <span class="viewer"></span>
                            <span class="set"></span>
                            <span class="x_close"></span>
                        </label>
                    </div>
                    <div class="chating">
                        <div class="chat_area">
                            
                            <div class="chatting-list-item">
                                <div class="username">
                                    <button>
                                        <span tip="팬클럽" class="thumb"></span>
                                        <span tip="팬클럽" class="fan"></span>
                                        <span class="author">test1</span>
                                    </button>
                                </div>
                                <div class="message-text"><p class="msg">ddddd</p></div>
                            </div>
                            <div class="chatting-list-item">
                                <div class="username">
                                    <button>
                                        <span tip="팬클럽" class="fan"></span>
                                        <span class="author">test2</span>
                                    </button>
                                </div>
                                <div class="message-text"><p class="msg">jhfdlkjsdhkfjㅇㄻ호ㅓ안ㄹ횐아ㅓdfgjnsdflgkㄹ홍aaaaaa</p></div>
                            </div>
                            <div class="star_balloon-list-item">
                                <div class="balloon_img">
                                    <span><em count="1234000">1234000</em></span>
                                    <img src="/ba_step.png">
                                </div>
                                <div class="message-text">
                                    <span class="nickname">코히.</span>
                                    <span class="star_balloon_cnt">별풍선 <em>1234000</em>개</span>
                                </div>
                                <div class="balloon_img_bottom"></div>
                            </div>

                            <div class="chatting-list-item">
                                <div class="username">
                                    <button>
                                        <span tip="열혈팬" class="vip"></span>
                                        <span class="author">test3</span>
                                    </button>
                                </div>
                                <div class="message-text"><p class="msg">bbbbbbbbb</p></div>
                            </div>
                            <div class="chatting-list-item">
                                <div class="username">
                                    <button>
                                        <span tip="매니저" class="manager"></span>
                                        <span class="author">test4</span>
                                    </button>
                                </div>
                                <div class="message-text"><p class="msg">xxxxxxx</p></div>
                            </div>
                            <div class="chatting-list-item">
                                <div class="username">
                                    <button>
                                        <span class="author">test5</span>
                                    </button>
                                </div>
                                <div class="message-text"><p class="msg">zzzzzz</p></div>
                            </div>
                        </div>
                    </div>
                    <div class="gift_input">
                        <div class="gift_img">
                            <div class="put_balloon">
                                <img src="/chat_star_balloon.svg">
                            </div>
                            <div class="put_adballoon">
                                <img src="/chat_ad_balloon.svg">
                            </div>
                            <div class="put_cart">
                                <img src="/chat_cart.svg">
                            </div>
                        </div>
                        <div class="write">
                            <div>
                                <div id="write_area" class="write_area" contenteditable="true" ondragenter="return false;" ondrop="return false;" ondragover="return false;"></div>
                                <span>채팅 입력</span>
                            </div>
                            <img src="/smile.svg" class="'smile'">
                            <img src="/chat_enter.svg" class="chat_enter">
                        </div>
                    </div>
                    <div class="move_handle TnB"></div>
                    
                </div>
                <div class="vod_list"></div>
            </div>
        </div>

        <div class="modal">
            <liveModalVue :user_id="props.user_id"/>
        </div>
    </div>
</template>

<script setup>
    import { io } from "socket.io-client";
    import axios from "axios";
    import { onMounted, defineProps, inject } from "vue";
    import liveModalVue from "./liveModal.vue";

    const props = defineProps({
        user_id:String,
    })
    let user_info = {}
    let signature_list = []
    let session_user = []
    onMounted(()=>{
        
        let imgPath = inject("imgPath")['_value']
        axios.get("/api/gift_balloon/"+props.user_id)
        .then((req)=>{
            const data = req.data
            for(let i=0;i<data.length;i++){
                if(data[i]['user_id'] == props.user_id){
                    document.querySelector(".gift_at strong").textContent = data[0]['user_nickname']+"("+data[0]['user_id']+")"
                    signature_list.push(data[i])
                }else{
                    session_user.push(data[i])
                    if(parseInt(data[i]['add_star_balloon']) < document.querySelector(".star_input input").value){
                        document.querySelector(".txt_error").classList.add("display_flex")
                    }else{
                        document.querySelector(".txt_error").classList.remove("display_flex")
                    }
                    document.querySelector(".userBalloonCount strong").textContent = data[i]['add_star_balloon']
                    document.querySelector(".sub_modal .sub_modal_body em").textContent = data[i]['add_star_balloon']
                }
            }
            document.querySelector(".star_input input").addEventListener("input",(e)=>{
                if(parseInt(document.querySelector(".userBalloonCount strong").textContent) < e.target.value){
                    document.querySelector(".txt_error").classList.add("display_flex")
                }else{
                    document.querySelector(".txt_error").classList.remove("display_flex")
                }
            })
            if(signature_list.length > 3){
                document.querySelector(".prev").classList.add("display_flex")
                document.querySelector(".next").classList.add("display_flex")
            }
            signature_load()
        })
        document.querySelectorAll(".btn_area button")[0].addEventListener("click",()=>{
            document.querySelector(".modal").classList.remove('display_flex')
        })
        
        document.querySelector(".prev").addEventListener("click",()=>{
            if(document.querySelector(".prev").classList.contains("on")){
                document.querySelector(".signature_btn").title = parseInt(document.querySelector(".signature_btn").title) - 3
                signature_load()
            }
        })
        document.querySelector(".next").addEventListener("click",()=>{
            if(document.querySelector(".next").classList.contains("on")){
                document.querySelector(".signature_btn").title = parseInt(document.querySelector(".signature_btn").title) + 3
                signature_load()
            }
        })
        function signature_load(){
            let start = parseInt(document.querySelector(".signature_btn").title)
            let end = start+3 > signature_list.length ? signature_list.length : start+3
            let t = ""
            for(let i=start;i<end;i++){
                if(signature_list[i]['signature_img_path']!=null)
                t += "<img class='signature' src='"+imgPath+signature_list[i]['signature_img_path']+"' alt='"+signature_list[i]['signature_balloon_cnt']+"'>"
            }
            document.querySelector(".signature_img").innerHTML = t
            if(signature_list.length > parseInt(document.querySelector(".signature_btn").title) + 3){
                document.querySelector(".next").classList.add("on")
            }else{
                document.querySelector(".next").classList.remove("on")
            }
            if(parseInt(document.querySelector(".signature_btn").title) == 0){
                document.querySelector(".prev").classList.remove("on")
            }else{
                document.querySelector(".prev").classList.add("on")
            }
            document.querySelector(".signature_btn").title = start
        }

        
        
        axios.post("/api/live_user_info",{
            user_id:props.user_id
        }).then((req)=>{
            const data = req.data[0];
            document.querySelector(".profile").src=imgPath+data.profile_path
            document.querySelector(".nickname").textContent=data.user_nickname
            document.querySelector(".subscribe").textContent=data.subscribe_cnt
            let t = ''
            let arr = data.star_cnt.toString().split("")
            if(arr.length >= 5){
                for(let a=0;a<arr.length-3;a++){
                    if(a==arr.length-4) t += '.'
                    t += arr[a];
                }
                t += "만"
            }else if(arr.length >= 4){
                for(let a=0;a<arr.length-3;a++){
                    t += arr[a];
                }
                t += "천"
            }else{
                t = data.star_cnt
            }
            document.querySelector(".star").textContent=t
            document.querySelector(".up_cnt").textContent=data.up_cnt
            document.querySelector(".title").textContent=data.live_title

            t = ""
            t += "<span class='category'>"+data.category+"</span>"
            if(data.sub_tag != null){
                let tags = data.sub_tag.split(",")
                for(let i=0;i<tags.length;i++){
                    t += "<span class='sub_tag'>"+data.category+"</span>"
                }
            }
            document.querySelector(".tag").innerHTML = t
        })

        document.querySelector(".write_area").addEventListener("keydown",(e)=>{
            if(e.key == 'Enter'){
                if (!e.shiftKey){
                    e.preventDefault();
                    
                    document.querySelector(".chat_enter").click()
                }
            }
        })
        
        document.querySelector(".write_area").addEventListener("input",(e)=>{
            if(e.target.textContent.length == 0){
                document.querySelector(".chat_enter").classList.remove("display_block")
                e.target.nextElementSibling.classList.remove("display_none")
            }else{
                document.querySelector(".chat_enter").classList.add("display_block")
                e.target.nextElementSibling.classList.add("display_none")
            }
        })

        // 대상 Element 선택
        const resizer = document.querySelector('.move_handle');
        const topSide = resizer.parentNode;
        const bottomSide = resizer.parentNode.nextElementSibling;

        // 마우스의 위치값 저장을 위해 선언
        let y = 0;

        // 크기 조절시 위쪽 Element를 기준으로 삼기 위해 선언
        let topHeight = 0;

        // resizer에 마우스 이벤트가 발생하면 실행하는 Handler
        const mouseDownHandler = function (e) {
            // 마우스 위치값을 가져와 x, y에 할당
            y = e.clientY;

            // left Element에 Viewport 상 width 값을 가져와 넣음
            topHeight = topSide.getBoundingClientRect().height;

            // 마우스 이동과 해제 이벤트를 등록
            document.addEventListener("mousemove", mouseMoveHandler);
            document.addEventListener("mouseup", mouseUpHandler);
        };
        const mouseMoveHandler = function (e) {
            // 마우스가 움직이면 기존 초기 마우스 위치에서 현재 위치값과의 차이를 계산
            const dy = e.clientY - y;

            // 크기 조절 중 마우스 커서를 변경함
            // class="resizer"에 적용하면 위치가 변경되면서 커서가 해제되기 때문에 body에 적용
            document.body.style.cursor = 'row-resize';

            topSide.style.userSelect = 'none';
            topSide.style.pointerEvents = 'none';
            
            bottomSide.style.userSelect = 'none';
            bottomSide.style.pointerEvents = 'none';

            // 초기 width 값과 마우스 드래그 거리를 더한 뒤 상위요소(container)의 너비를 이용해 퍼센티지를 구함
            // 계산된 퍼센티지는 새롭게 left의 width로 적용
            const newTopHeight = topHeight + dy;
            topSide.style.height = `${newTopHeight}px`;
        };
        const mouseUpHandler = function () {
            // 모든 커서 관련 사항은 마우스 이동이 끝나면 제거됨
            resizer.style.removeProperty('cursor');
            document.body.style.removeProperty('cursor');

            topSide.style.removeProperty('user-select');
            topSide.style.removeProperty('pointer-events');

            bottomSide.style.removeProperty('user-select');
            bottomSide.style.removeProperty('pointer-events');

            // 등록한 마우스 이벤트를 제거
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        };
        // 마우스 down 이벤트를 등록
        resizer.addEventListener('mousedown', mouseDownHandler);

        const socket = io('http://localhost:3000')

        socket.on("get_chat",(msg)=>{
            document.querySelector(".chat_area").innerHTML += msg
            document.querySelector(".chat_area").parentNode.scrollTop = document.querySelector(".chat_area").scrollHeight;
        })

        socket.on("connect", (data) => {
            socket.emit("create_room",(document.querySelector(".profile-img").alt))
            axios.post("/api/bj_viewers_chat",{
                user_id:props.user_id
            }).then((req)=>{
                const data = req.data[0];
                user_info = {
                    user_id : data.user_id2,
                    user_name : data.user_name,
                    subscribe_yn : data.subscribe_yn,
                    subscribe_month_cnt : data.subscribe_month_cnt,
                    fan_yn : data.fan_yn,
                    vip_yn : data.vip_yn,
                }
            })
        });

        socket.on("disconnect", () => {

        });
        document.querySelector(".chat_enter").addEventListener("click",(e)=>{
            let color_ran = [
                'random-color1', 
                'random-color2', 
                'random-color3', 
                'random-color4', 
                'random-color5', 
                'random-color6', 
                'random-color7', 
                'random-color8', 
                'random-color9', 
                'random-color10',
                'random-color11',
                'random-color12',
                'random-color13',
                'random-color14',
                'random-color15',
                'random-color16',
                'random-color17',
                'random-color18',
                'random-color19',
                'random-color20',
            ]
            let msg = '<div class="chatting-list-item">'
                msg   +='<div class="username">'
                    msg           +='<button>'
                if(user_info['subscribe_yn'] == 'T') msg += '<span class="thumb"></span>'
                if(user_info['vip_yn'] == 'T') msg += '<span class="vip"></span>'
                else if(user_info['fan_yn'] == 'T') msg += '<span tip="팬클럽" class="fan"></span>'
                msg               +='<span class="author '+color_ran[parseInt(Math.random()*20)]+'">'+user_info['user_name']+'</span>'
                msg           +='</button>'
                msg   +='</div>'
                msg   +='<div class="message-text"><p class="msg">'+document.querySelector(".write_area").innerHTML+'</p></div>'
                msg +='</div>'
            document.querySelector(".write_area").textContent = ''
            socket.emit("push_chat",msg)
        })

        document.querySelector(".put_balloon img").addEventListener("click",()=>{
            document.querySelector(".modal").classList.add('display_flex')
        })
        document.querySelector(".star_balloon").addEventListener("click",()=>{
            document.querySelector(".modal").classList.add('display_flex')
        })

        document.querySelectorAll(".btn_area button")[1].addEventListener("click",()=>{
            if(!document.querySelector(".txt_error").classList.contains("display_flex")){
                const star_balloon = document.querySelector(".star_input input").value
                axios.post("/api/gift_balloon_action",{
                    "star_balloon":star_balloon,
                    "get_user_id":props.user_id
                }).then((req)=>{
                    if(req.status == 200){
                        document.querySelector(".modal").classList.remove('display_flex')
                        document.querySelector(".userBalloonCount strong").textContent = parseInt(document.querySelector(".userBalloonCount strong").textContent) - star_balloon
                        document.querySelector(".sub_modal .sub_modal_body em").textContent = parseInt(document.querySelector(".sub_modal .sub_modal_body em").textContent) - star_balloon
                        let msg = '<div class="star_balloon-list-item">'
                                    + '<div class="balloon_img">'
                                    +    '<span><em count="'+star_balloon+'">'+star_balloon+'</em></span>'
                                    +    '<img src="/ba_step.png">'
                                    +'</div>'
                                    +'<div class="message-text">'
                                    +    '<span class="nickname">'+session_user[0]['user_nickname']+'</span>'
                                    +    '<span class="star_balloon_cnt">별풍선 <em>'+star_balloon+'</em>개</span>'
                                    +'</div>'
                                    +'<div class="balloon_img_bottom"></div>'
                                +'</div>'
                        socket.emit("push_chat",msg)
                    }else{
                        console.log(req.data)
                    }
                })
            }else{
                document.querySelector(".sub_modal").classList.add("display_flex")
            }
        })
    })
    



    
</script>

<style scope>
    :root{
        --ratioW: 16;
        --ratioH: 9;
        --sideContents: 414px;
        --nickname-ramdom-color1: #E12E2E;
        --nickname-ramdom-color2: #A90A0A;
        --nickname-ramdom-color3: #EB500D;
        --nickname-ramdom-color4: #C25111;
        --nickname-ramdom-color5: #E07E0A;
        --nickname-ramdom-color6: #B26C03;
        --nickname-ramdom-color7: #648E0B;
        --nickname-ramdom-color8: #119937;
        --nickname-ramdom-color9: #158304;
        --nickname-ramdom-color10: #047143;
        --nickname-ramdom-color11: #0799B9;
        --nickname-ramdom-color12: #0B6D82;
        --nickname-ramdom-color13: #0C80D3;
        --nickname-ramdom-color14: #0C61E1;
        --nickname-ramdom-color15: #1915BF;
        --nickname-ramdom-color16: #6518C8;
        --nickname-ramdom-color17: #AD19E1;
        --nickname-ramdom-color18: #DD32E0;
        --nickname-ramdom-color19: #DC3585;
        --nickname-ramdom-color20: #C40F70;
    }
    .live_player .live_player_body{
        padding: 8px 24px 0;
        margin: 64px auto 0;
        display: flex;
        justify-content: center;
        height: 100vh;
        gap: 0 24px;
        box-sizing: border-box;
        width: 100%;
        max-width: calc((100vh - 180px)* var(--ratioW) / var(--ratioH) + var(--sideContents));
    }
    .live_player .live_player_body .player{
        flex: 1 1 auto;
    }
    .live_player .live_player_body .player_area{
        position: relative;
        min-width: 500px;
        box-sizing: border-box;
        flex:1 1 auto;
    }
    .live_player .live_player_body .player_area video{
        width: 100%;
    }
    .live_player .live_player_body .wrapping{
        width: 390px;
        flex-shrink: 0;
    }
    .live_player .live_player_body .setting_chating{
        min-height: 500px;
        border:1px solid rgba(117,123,138,.3);
        border-radius: 10px;
        display: flex;
        flex-flow: column;
        height: 500px;
        max-height: calc(100vh - 94px);
        position: relative;
    }
    .live_player .live_player_body .setting_chating .setting{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(117,123,138,.3);
        padding: 10px 15px;
        font-weight: bold;
        gap: 0 10px;
    }

    .live_player .live_player_body .setting_chating .setting label{
        display: flex;
        gap: 0 15px;
    }
    .live_player .live_player_body .setting_chating .setting .viewer{
        background: url("/public/viewer.svg") 50% 50% no-repeat;
        background-size: 20px 16px;
        width: 18px;
        height: 18px;
        display: inline-block;
        cursor: pointer;
    }
    .live_player .live_player_body .setting_chating .setting .set{
        background: url("/public/set.svg") 50% 50% no-repeat;
        background-size: 20px 20px;
        width: 18px;
        height: 18px;
        display: inline-block;
        cursor: pointer;
    }
    .live_player .live_player_body .setting_chating .setting .x_close{
        background: url("/public/x_close.svg") 50% 50% no-repeat;
        background-size: 16px 17px;
        width: 18px;
        height: 18px;
        display: inline-block;
        cursor: pointer;
    }
    .live_player .live_player_body .setting_chating .chating{
        flex-grow: 1;
        position: relative;
        overflow-y: auto;
        height: 100%;
        scrollbar-width: none;
        margin-bottom: 10px;
    }
    .live_player .live_player_body .setting_chating .chating .chat_area{
        display: flex;
        flex-flow: column;
        height: 100%;
        padding: 16px 20px 16px 20px;
        box-sizing: border-box;
        line-height: 1.2;
        gap:5px 0px;
    }
    .live_player .live_player_body .wrapping .gift_input{
        padding: 10px;
        border-top: 1px solid rgba(117,123,138,.3);
    }
    .live_player .live_player_body .wrapping .gift_input .gift_img{
        display: flex;
    }
    .live_player .live_player_body .wrapping .gift_input .gift_img img{
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
    .live_player .write{
        background: #1c1e22;
        display: flex;
        align-items: center;
        height: 45px;
        border-radius: 10px;
        padding: 0px 10px;
        scrollbar-width: none;
    }
    .live_player .write div{
        flex: 0 1 auto;
        position: relative;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }
    .live_player .write div .write_area{
        color: #e2e4e9;
        position: absolute;
        top: 50%;
        left: 0;
        overflow: hidden scroll;
        background: rgba(0, 0, 0, 0);
        width: 100%;
        max-height: 100%;
        padding: 5px 0;
        font-size: 14px;
        line-height: 1.4;
        border: none;
        word-wrap: break-word;
        cursor: text;
        transform: translate(0, -50%);
        z-index: 1;
        scrollbar-width: none;
        outline: none;
        height: 30px;
    }
    .live_player .write div span{
        position: absolute;
        top: 50%;
        left: 0;
        font-size: 12px;
        padding: 5px 0;
        font-weight: 400;
        line-height: 1.4;
        transform: translate(0, -50%);
        color: #9196a1;
    }
    .live_player .write div span.display_none{
        display: none;
    }
    .live_player .write img{
        height: 30px;
        cursor: pointer;
    }
    .live_player .write .chat_enter{
        display: none;
        cursor: pointer;
    }
    .live_player .write .chat_enter.display_block{
        display: block;
    }
    
    .live_player .move_handle {
        flex: 0 0 auto;
        background-color: rgba(0, 0, 0, 0);
        transition: all .2s cubic-bezier(0.56, 0.12, 0.12, 0.98);
    }
    .live_player .move_handle.TnB {
        display: flex;
        justify-content: center;
        position: relative;
        left: auto;
        right: auto;
        top: auto;
        bottom: auto;
        width: 100%;
        margin: -4px 0;
        padding: 4px 0;
        cursor: row-resize;
        position: absolute;
        bottom: -10px;
    }
    .live_player .move_handle.TnB::after {
        background-color: #464a53;
        content: "";
        display: block;
        width: 56px;
        height: 4px;
        border-radius: 7px;
        opacity: 0;
        transition: all .2s cubic-bezier(0.56, 0.12, 0.12, 0.98);
    }
    .live_player .move_handle.TnB:hover::after{
        opacity: 1;
    }
    .live_player .chatting-list-item{
        font-size: 14px;
        color: #e2e4e9;
        display: inline-block;
        position: relative;
        width: 100%;
        word-break: break-all;
    }
    
    .live_player .chatting-list-item .thumb{
        background: url("/public/signature-default.svg") 50% 50% no-repeat;
        background-size: 20px 18px;
        width: 20px;
        height: 18px;
        display: inline-block;
        vertical-align: middle;
    }
    .live_player .chatting-list-item .fan{
        background: url("/public/fan.svg") 50% 50% no-repeat;
        background-size: 15px 15px;
        width: 15px;
        height: 15px;
        display: inline-block;
        vertical-align: middle;
    }
    .live_player .chatting-list-item .vip{
        background: url("/public/vip.svg") 50% 50% no-repeat;
        background-size: 15px 15px;
        width: 15px;
        height: 15px;
        display: inline-block;
        vertical-align: middle;
    }
    .live_player .chatting-list-item .manager{
        background: url("/public/manager.svg") 50% 50% no-repeat;
        background-size: 15px 15px;
        width: 15px;
        height: 15px;
        display: inline-block;
        vertical-align: middle;
    }
    .live_player .chatting-list-item .username{
        display: inline-block;
        position: relative;
        margin-right: 3px;
        font-size: 0;
        vertical-align: middle;
        
    }
    .live_player .chatting-list-item .username .author{
        font-weight: 600;
        vertical-align: middle;
        line-height: 20px;
        font-size: 14px;
        color: #e2e4e9;
    }
    .live_player .chatting-list-item .username .author.random-color1{color: var(--nickname-ramdom-color1);}
    .live_player .chatting-list-item .username .author.random-color2{color: var(--nickname-ramdom-color2);}
    .live_player .chatting-list-item .username .author.random-color3{color: var(--nickname-ramdom-color3);}
    .live_player .chatting-list-item .username .author.random-color4{color: var(--nickname-ramdom-color4);}
    .live_player .chatting-list-item .username .author.random-color5{color: var(--nickname-ramdom-color5);}
    .live_player .chatting-list-item .username .author.random-color6{color: var(--nickname-ramdom-color6);}
    .live_player .chatting-list-item .username .author.random-color7{color: var(--nickname-ramdom-color7);}
    .live_player .chatting-list-item .username .author.random-color8{color: var(--nickname-ramdom-color8);}
    .live_player .chatting-list-item .username .author.random-color9{color: var(--nickname-ramdom-color9);}
    .live_player .chatting-list-item .username .author.random-color10{color: var(--nickname-ramdom-color10);}
    .live_player .chatting-list-item .username .author.random-color11{color: var(--nickname-ramdom-color11);}
    .live_player .chatting-list-item .username .author.random-color12{color: var(--nickname-ramdom-color12);}
    .live_player .chatting-list-item .username .author.random-color13{color: var(--nickname-ramdom-color13);}
    .live_player .chatting-list-item .username .author.random-color14{color: var(--nickname-ramdom-color14);}
    .live_player .chatting-list-item .username .author.random-color15{color: var(--nickname-ramdom-color15);}
    .live_player .chatting-list-item .username .author.random-color16{color: var(--nickname-ramdom-color16);}
    .live_player .chatting-list-item .username .author.random-color17{color: var(--nickname-ramdom-color17);}
    .live_player .chatting-list-item .username .author.random-color18{color: var(--nickname-ramdom-color18);}
    .live_player .chatting-list-item .username .author.random-color19{color: var(--nickname-ramdom-color19);}
    .live_player .chatting-list-item .username .author.random-color20{color: var(--nickname-ramdom-color20);}

    .live_player .chatting-list-item .username button{
        display: inline-block;
        text-align: left;
        line-height: 20px;
        font-size: 0;
        border: none;
        background-color: rgba(0, 0, 0, 0);
        outline: none;
        cursor: pointer;
        margin: 0;
        padding: 0;
    }
    .live_player .chatting-list-item .username button span{
        margin-right: 2px;
    }
    .live_player .chatting-list-item .message-text{
        color: #c9c9c9;
        display: inline;
        vertical-align: middle;
    }
    .live_player .chatting-list-item .message-text .msg{
        line-height: 22px;
        display: inline;
        margin: 0;
        padding: 0;
    }
    .live_player .star_balloon-list-item{
        display: flex;
        align-items: flex-end;
        width: 100%;
        justify-content: center;
        position: relative;
        margin: 5px 0px;
    }
    .live_player .star_balloon-list-item .balloon_img_bottom{
        background: #001C38;
        height: 52px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        border: 1px solid rgba(1,130,255,.1);
        border-radius: 10px;
    }
    .live_player .star_balloon-list-item .balloon_img{
        position: relative;
        margin-right: 5px;
        z-index: 1;
    }
    .live_player .star_balloon-list-item .balloon_img span{
        position: absolute;
        top: -13px;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: 1;
        font-size: inherit;
    }
    .live_player .star_balloon-list-item .balloon_img em{
        color: #ff2f00;
        font-size: 23px;
        font-weight: bold;
        white-space: nowrap;
        line-height: 1.8;
        
        font-style: normal;
    }
    .live_player .star_balloon-list-item .balloon_img em::before{
        content: attr(count);
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-text-stroke: 4px #fff;
        transform: translate(-50%, -50%);
        white-space: nowrap;
        z-index: -1;
    }
    .live_player .star_balloon-list-item .balloon_img em::after{
        content: attr(count);
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-text-stroke: 6px #000;
        transform: translate(-50%, -50%);
        white-space: nowrap;
        z-index: -2;
    }
    .live_player .star_balloon-list-item .balloon_img img{
        width: 160px;
        height: 100px;
    }
    .live_player .star_balloon-list-item .message-text{
        color:#d5d7dc;
        font-size: 13px;
        display: flex;
        flex-flow: column;
        margin-bottom: 12px;
        z-index: 1;
    }
    .live_player .star_balloon-list-item .message-text .nickname{
        font-size: 12px;
        color: #d5d7dc;
    }
    .live_player .star_balloon-list-item .message-text .star_balloon_cnt{
        color: #e2e4e9;
        font-style: normal;
        font-weight: 600;
    }
    .live_player .star_balloon-list-item .message-text .star_balloon_cnt em{
        color: #44a3ff;
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
    }

    .live_player .player_info .user_info{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #e2e4e9;
    }
    .live_player .player_info .user_info div:nth-child(1){
        display: flex;
        align-items: center;
    }
    .live_player .player_info .user_info div:nth-child(1) .profile{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 20px;
        cursor: pointer;
        flex-shrink: 0;
    }
    .live_player .player_info .user_info div:nth-child(1) .nickname{
        font-size: 22px;
        margin-right: 20px;
        cursor: pointer;
        flex-shrink: 0;
    }
    .live_player .player_info .user_info div:nth-child(1) .subscribe{
        padding: 10px 15px;
        border: 1px solid #464a53;
        border-radius: 10px;
        margin-right: 5px;
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;
        flex-shrink: 0;
    }
    .live_player .player_info .user_info div:nth-child(1) .subscribe:hover[tip]::after{
        content: attr(tip);
        top: calc(100% + 6px);
        padding: 5px 7px;
        border-radius: 12px;
        font-size: 13px;
        z-index: 10;
        position: absolute;
        left: 50%;
        white-space: nowrap;
        background-color: #525661;
        transform: translateX(-60%);
        font-weight: 600;
    }
    .live_player .player_info .user_info div:nth-child(1) .subscribe::before{
        content: "";
        background:url("/public/subscribe.svg") 50% 50% no-repeat;
        width: 20px;
        height: 20px;
        margin-right: 8px;
    }
    .live_player .player_info .user_info div:nth-child(1) .star{
        padding: 10px 15px;
        border: 1px solid #464a53;
        border-radius: 10px;
        margin-right: 5px;
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;
        flex-shrink: 0;
    }
    .live_player .player_info .user_info div:nth-child(1) .star:hover[tip]::after{
        content: attr(tip);
        top: calc(100% + 6px);
        padding: 5px 7px;
        border-radius: 12px;
        font-size: 13px;
        z-index: 10;
        position: absolute;
        left: 50%;
        white-space: nowrap;
        background-color: #525661;
        transform: translateX(-60%);
        font-weight: 600;
    }
    .live_player .player_info .user_info div:nth-child(1) .star::before{
        content: "";
        background:url("/public/star.svg") 50% 50% no-repeat;
        width: 20px;
        height: 20px;
        margin-right: 8px;
    }
    .live_player .player_info .user_info div:nth-child(1) .up_cnt{
        padding: 10px 15px;
        border: 1px solid #464a53;
        border-radius: 10px;
        margin-right: 5px;
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;
        flex-shrink: 0;
    }
    .live_player .player_info .user_info div:nth-child(1) .up_cnt:hover[tip]::after{
        content: attr(tip);
        top: calc(100% + 6px);
        padding: 5px 7px;
        border-radius: 12px;
        font-size: 13px;
        z-index: 10;
        position: absolute;
        left: 50%;
        white-space: nowrap;
        background-color: #525661;
        transform: translateX(-60%);
        font-weight: 600;
    }
    .live_player .player_info .user_info div:nth-child(1) .up_cnt::before{
        content: "";
        background:url("/public/up.svg") 50% 50% no-repeat;
        width: 20px;
        height: 20px;
        margin-right: 8px;
    }
    .live_player .player_info .user_info div:nth-child(2){
        display: flex;
        align-items: center;
    }
    .live_player .player_info .user_info div:nth-child(2) button{
        color: #d5d7dc;
    }
    .live_player .player_info .user_info div:nth-child(2) button:nth-child(1){
        cursor: pointer;
        background: url("/public/live_star.svg");
        width: 36px;
        height: 36px;
        outline: none;
        border: none;
        position: relative;
    }
    .live_player .player_info .user_info div:nth-child(2) button:nth-child(1):hover[tip]::after{
        content: attr(tip);
        top: calc(100% + 6px);
        padding: 5px 7px;
        border-radius: 12px;
        font-size: 13px;
        z-index: 10;
        position: absolute;
        left: 50%;
        white-space: nowrap;
        background-color: #525661;
        transform: translateX(-60%);
        font-weight: 600;
    }
    .live_player .player_info .user_info div:nth-child(2) button:nth-child(2){
        cursor: pointer;
        background: url("/public/live_ad.svg");
        width: 36px;
        height: 36px;
        outline: none;
        border: none;
        position: relative;
    }
    .live_player .player_info .user_info div:nth-child(2) button:nth-child(2):hover[tip]::after{
        content: attr(tip);
        top: calc(100% + 6px);
        padding: 5px 7px;
        border-radius: 12px;
        font-size: 13px;
        z-index: 10;
        position: absolute;
        left: 50%;
        white-space: nowrap;
        background-color: #525661;
        transform: translateX(-60%);
        font-weight: 600;
    }
    .live_player .player_info .user_info div:nth-child(2) button:nth-child(3){
        cursor: pointer;
        background: url("/public/live_sticker.svg");
        width: 36px;
        height: 36px;
        outline: none;
        border: none;
        position: relative;
    }
    .live_player .player_info .user_info div:nth-child(2) button:nth-child(3):hover[tip]::after{
        content: attr(tip);
        top: calc(100% + 6px);
        padding: 5px 7px;
        border-radius: 12px;
        font-size: 13px;
        z-index: 10;
        position: absolute;
        left: 50%;
        white-space: nowrap;
        background-color: #525661;
        transform: translateX(-60%);
        font-weight: 600;
    }
    .live_player .player_info .user_info div:nth-child(2) button:nth-child(4){
        cursor: pointer;
        background: url("/public/live_catch.svg");
        width: 36px;
        height: 36px;
        outline: none;
        border: none;
        position: relative;
    }
    .live_player .player_info .user_info div:nth-child(2) button:nth-child(4):hover[tip]::after{
        content: attr(tip);
        top: calc(100% + 6px);
        padding: 5px 7px;
        border-radius: 12px;
        font-size: 13px;
        z-index: 10;
        position: absolute;
        left: 50%;
        white-space: nowrap;
        background-color: #525661;
        transform: translateX(-60%);
        font-weight: 600;
    }
    .live_player .player_info .user_info div:nth-child(2) button:nth-child(5){
        cursor: pointer;
        background: url("/public/live_share.svg");
        width: 36px;
        height: 36px;
        outline: none;
        border: none;
        position: relative;
    }
    .live_player .player_info .user_info div:nth-child(2) button:nth-child(5):hover[tip]::after{
        content: attr(tip);
        top: calc(100% + 6px);
        padding: 5px 7px;
        border-radius: 12px;
        font-size: 13px;
        z-index: 10;
        position: absolute;
        left: 50%;
        white-space: nowrap;
        background-color: #525661;
        transform: translateX(-60%);
        font-weight: 600;
    }
    .live_player .player_info .user_info div:nth-child(2) button:nth-child(6){
        cursor: pointer;
        background: url("/public/live_more.svg");
        width: 36px;
        height: 36px;
        outline: none;
        border: none;
        display: flex;
        align-items: center;
        position: relative;
    }
    .live_player .player_info .user_info div:nth-child(2) button:nth-child(6):hover[tip]::after{
        content: attr(tip);
        top: calc(100% + 6px);
        padding: 5px 7px;
        border-radius: 12px;
        font-size: 13px;
        z-index: 10;
        position: absolute;
        left: 50%;
        white-space: nowrap;
        background-color: #525661;
        transform: translateX(-60%);
        font-weight: 600;
    }
    .live_player .player_info .live_info{
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .live_player .player_info .live_info .title{
        font-size: 19px;
        font-weight: 600;
    }
    .live_player .player_info .tag{
        margin-top: 20px;
    }
    .live_player .player_info .tag .category{
        color: rgba(111, 185, 255, .8);
        background: rgba(1,130,255,.2);
        font-size: 11px;
        padding: 3px 7px;
        border-radius: 10px;
        margin-right: 5px;
        cursor: pointer;
    }
    .live_player .player_info .tag .sub_tag{
        color: #9196a1;
        background: #232529;;
        font-size: 11px;
        padding: 3px 7px;
        border-radius: 10px;
        margin-right: 5px;
        cursor: pointer;
    }

    .live_player .modal{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(23,25,28,0.6);
        z-index: 2000;
        display: none;
        align-items: center;
        justify-content: center;
    }
    .live_player .modal.display_flex{
        display: flex;
    }
</style>