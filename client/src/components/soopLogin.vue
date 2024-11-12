<template>
    <div class="soopLogin_main">
        <video id="videoPlayer" class="videoPlayer"  webkit-playsinline="true" playsinline="true" x-webkit-airplay="allow" muted controls></video>
        
        <img src="/soop_logo.svg" class="logo">
        <span class="recommend_login_text">로그인 후 더 많은 서비스를 즐겨보세요.</span>
        <div class="id_input">
            <input type="text" id="id" placeholder="아이디">
            <button></button>
        </div>
        <div class="pw_input">
            <input type="password" id="pw" placeholder="비밀번호">
            <button></button>
        </div>
        <div class="login_stat">
            <div>
                <input type="checkbox" id="log_retain">
                <label for="log_retain" class="log_retain">
                    로그인 상태 유지
                </label>
            </div>
            <div>
                <input type="checkbox" id="saveid">
                <label for="saveid" class="saveid">아이디 저장</label>
            </div>
        </div>
        <button class="login_btn">로그인</button>
        <div class="other_login">
            <div class="dividing_line"><span>또는</span></div>
            <div class="list" id="sns_div">
                <a href="#">
                    <img src="https://res.sooplive.co.kr/images/svg/ico_login_twitch.svg" data-sns-code="24" alt="트위치" title="트위치">
                </a>
                <a href="#">
                    <img src="https://res.sooplive.co.kr/images/svg/ico_login_naver.svg" data-sns-code="21" alt="네이버" title="네이버">
                </a>
                <a href="#">
                    <img src="https://res.sooplive.co.kr/images/svg/ico_login_kakao.svg" data-sns-code="23" alt="카카오" title="카카오">
                </a>
                <a href="#">
                    <img src="https://res.sooplive.co.kr/images/svg/ico_login_apple.svg" data-sns-code="20" alt="애플" title="애플">
                </a>
            </div>
        </div>
        <div class="account_area">
            <a href="https://member.sooplive.co.kr/app/find_id_pw.php">아이디 찾기</a>
            <label>|</label>
            <a href="https://member.sooplive.co.kr/app/find_id_pw.php?szWork=FIND_PWD">비밀번호 찾기</a>
            <label>|</label>
            <a href="/join">회원가입</a>
        </div>
    </div>
</template>

<script setup>
    import Hls from 'hls.js';
    import axios from "axios";
    import { onMounted } from "vue";
    onMounted(()=>{
        const videoElement = document.querySelector("#videoPlayer")
        // videoElement.addEventListener('loadedmetadata', () => {
        //     videoElement.currentTime = videoElement.duration-1; // 비디오의 끝 시간으로 설정
        // });
        document.querySelector(".logo").addEventListener("click",()=>{location.href="/"})
        document.querySelector(".login_btn").addEventListener("click",(e)=>{
            axios.post("/api/user_login_check",{
                user_id : document.querySelector("#id").value,
                user_password : document.querySelector("#pw").value,
            }).then((req)=>{
                if(req.status == 200){
                    axios.post("/api/login_ok",{user_id : req.data[0].user_id}).then((req)=>{
                    })
                }
            })
        })

        if (Hls.isSupported()) {
            const hls = new Hls();
            
            // HLS 스트리밍 URL을 로드
            hls.loadSource('http://localhost:8000/live/stream1/index.m3u8'); // 실제 HLS URL을 넣으세요
            hls.attachMedia(videoElement);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                
                videoElement.play(); // 스트리밍 로드가 완료되면 자동으로 재생
                // videoElement.muted = false
                console.log(videoElement.muted)
            });
            // 에러 처리
            hls.on(Hls.Events.ERROR, (event, data) => {
                if (data.fatal) {
                switch (data.type) {
                    case Hls.ErrorTypes.NETWORK_ERROR:
                    console.error('네트워크 오류 발생');
                    break;
                    case Hls.ErrorTypes.MEDIA_ERROR:
                    console.error('미디어 오류 발생');
                    break;
                    case Hls.ErrorTypes.OTHER_ERROR:
                    console.error('기타 오류 발생');
                    break;
                    default:
                    break;
                }
                }
            });
        } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
            // 브라우저가 HLS.js 없이 native HLS를 지원하는 경우 (예: Safari)
            videoElement.src = 'http://localhost:8000/live/stream1/index.m3u8';
        } else {
            console.error('HLS를 지원하지 않는 브라우저입니다.');
        }
    })
</script>

<style scoped>
    .soopLogin_main{
        height: 100vh;
        width: 380px;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }
    .soopLogin_main .recommend_login_text{
        margin-top: 10px;
        margin-bottom: 30px;
        font-size: 16px;
    }
    .soopLogin_main .logo{
        width: 150px;
        height: 85px;
        cursor: pointer;
    }
    .soopLogin_main .id_input, .pw_input{
        width: 100%;
        height: 50px;
        padding: 0px 10px 0px 10px;
        border: 1px solid #464A53;
        border-radius: 10px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        margin-bottom: 10px;
    }
    .soopLogin_main .id_input input, .pw_input input{
        padding: 0px 10px 0px 0px;
    }
    .soopLogin_main .id_input button, .soopLogin_main .pw_input button{
        background: none;
        height: 20px;
        width: 20px;
        outline: none;
        border: none;
        margin: 0 auto;
    }
    .soopLogin_main .id_input input:focus ~ button, .soopLogin_main .pw_input input:focus ~ button{
        background: url("/public/x_btn.svg");
    }
    .soopLogin_main .id_input input, .pw_input input{
        flex-grow: 1;
        height: 100%;
        background: transparent;
        outline: none;
        color: #fff;
        border: none;
    }
    .soopLogin_main .login_stat{
        display: flex;
        justify-content: space-around;
        gap: 0 15px;
        margin-bottom: 30px;
    }
    .soopLogin_main .login_stat div{
        display: flex;
        align-items: center;
        gap: 0 5px;
    }
    .soopLogin_main .login_stat input{
        width: 15px;
        height: 15px;
    }
    
    .soopLogin_main .login_stat label{
        display: flex;
        align-items: center;
        font-size: 12px;
    }
    .soopLogin_main .log_retain, .saveid, .dividing_line span{
        color: #9196A1;
        font-size: 14px;
    }

    .soopLogin_main button{
        background: #0182FF;
        width: 100%;
        color: #FCFCFD;
        font-size: 16px;
        height: 52px;
        border-radius: 12px;
        outline: none;
        border: none;
        margin-bottom: 20px;
        cursor: pointer;
    }

    .soopLogin_main .other_login{
        width: 100%;
    }
    .soopLogin_main .dividing_line{
        display: flex;
        align-items: center;
        width: 100%;
        height: 32px;
    }
    .soopLogin_main .dividing_line span{
        margin: 0 16px;
        font-size: 14px;
        font-weight: 500;
        flex: 0 0 auto;
    }
    .soopLogin_main .dividing_line::before, .dividing_line::after{
        content: "";
        display: block;
        background-color: rgba(117, 123, 138, 0.2);
        width: 100%;
        height: 1px;
    }
    .soopLogin_main .other_login{
        margin-bottom: 30px;
    }
    .soopLogin_main .other_login .list{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin: 13px auto 0;
    }
    .soopLogin_main .other_login .list a{
        display: block;
        width: 48px;
        height: 48px;
        margin: 5px 7px 0;
    }
    .soopLogin_main .account_area{
        display: flex;
        align-items: center;
    }
    .soopLogin_main .account_area a{
        text-decoration: none;
        color: #D5D7DC;
        font-size: 13px;
    }
    .soopLogin_main .account_area label{
        font-size: 10px;
        color: rgba(117, 123, 138, 0.2);
        margin: 0px 10px;
    }

    .videoPlayer{
        width: 400px;
    }
</style>