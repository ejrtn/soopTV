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
                <div><img src="/profile_coffee.JPG" class="profile-img"></div>
                <div><button class="btn-allMenu"></button></div>
            </div>
        </header>
        <div class="live_player_body">
            <div class="player">
                <div class="player_area">
                    <video src=""></video>
                </div>
                <div class="player_info">
                    <div></div>
                    <span></span>
                    <div></div>
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
                                <button class="message-container">
                                    <span tip="팬클럽" class="thumb"></span>
                                    <span tip="팬클럽" class="fan"></span>
                                    <span class="username">test1</span>
                                </button>
                                <span class="message-text">ddddd</span>
                            </div>
                            <div class="chatting-list-item">
                                <button class="message-container">
                                    <span tip="팬클럽" class="fan"></span>
                                    <span class="username">test2</span>
                                </button>
                                <span class="message-text">ㅇㄻ호ㅓ안ㄹ횐아ㅓdfgjnsdflgkㄹ홍aaaaaa</span>
                            </div>
                            <div class="chatting-list-item">
                                <button class="message-container">
                                    <span tip="열혈팬" class="vip"></span>
                                    <span class="username">test3</span>
                                </button>
                                <span class="message-text">bbbbbbbbb</span>
                            </div>
                            <div class="chatting-list-item">
                                <button class="message-container">
                                    <span tip="매니저" class="manager"></span>
                                    <span class="username">test4</span>
                                </button>
                                <div class="message-text">xxxxxxx</div>
                            </div>
                            <div class="chatting-list-item">
                                <button class="message-container">
                                    <span class="username">test5</span>
                                </button>
                                <span class="message-text">zzzzzz</span>
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
    </div>
</template>

<script setup>
    import axios from "axios";
    import { onMounted, defineProps, inject } from "vue";
    const props = defineProps({
        live_id:String,
    })
    onMounted(()=>{
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
    })
    
</script>

<style scoped>
    .live_player .live_player_body{
        padding: 8px 24px 0;
        margin: 64px auto 0;
        display: flex;
        justify-content: center;
        height: 100vh;
        gap: 0 24px;
    }
    .live_player .live_player_body .player_area{
        position: relative;
        min-width: 500px;
        box-sizing: border-box;
        flex:1 1 auto;
        max-width: 1150px;
    }
    .live_player .live_player_body .player_area video{
        width: 100%;
        height: 670px;
    }
    .live_player .live_player_body .wrapping{
        width: 350px;
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
    }
    .live_player .live_player_body .setting_chating .chating .chat_area{
        display: flex;
        flex-flow: column;
        height: 100%;
        padding: 16px 20px 16px 20px;
        box-sizing: border-box;
        line-height: 1.2;
        gap:10px 0px;
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
    .live_player .write img{
        height: 30px;
        cursor: pointer;
    }
    .live_player .write .chat_enter{
        display: block;
        cursor: pointer;
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
    }
    .live_player .chatting-list-item .message-container{
        display: inline-flex;
        align-items: center;
        gap: 0 3px;
        background: transparent;
        border: none;
        outline: none;
        color: #e2e4e9;
        padding: 0;
    }
    .live_player .chatting-list-item .message-container .thumb{
        background: url("/public/signature-default.svg") 50% 50% no-repeat;
        background-size: 20px 18px;
        width: 20px;
        height: 18px;
        display: inline-block;
    }
    .live_player .chatting-list-item .fan{
        background: url("/public/fan.svg") 50% 50% no-repeat;
        background-size: 15px 15px;
        width: 15px;
        height: 15px;
        display: inline-block;
    }
    .live_player .chatting-list-item .message-container .vip{
        background: url("/public/vip.svg") 50% 50% no-repeat;
        background-size: 15px 15px;
        width: 15px;
        height: 15px;
        display: inline-block;
    }
    .live_player .chatting-list-item .message-container .manager{
        background: url("/public/manager.svg") 50% 50% no-repeat;
        background-size: 15px 15px;
        width: 15px;
        height: 15px;
        display: inline-block;
    }
    .live_player .chatting-list-item .username{
        margin-right: 4px;
        height: 15px;
        display: inline-block;
    }
    .live_player .chatting-list-item .message-container .message-text{
        color: #e2e4e9;
    }
</style>