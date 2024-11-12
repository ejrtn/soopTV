<template>
    <div class="soopJoinInsert">
        <div class="logo"><img src="soop_logo.svg"></div>
        <span>아이디</span>
        <div class="cover"><input type="text" class="id"></div>
        <label></label>

        <span>비밀번호</span>
        <div class="cover"><input type="password" class="password"></div>
        <label>문자, 숫자, 기호를 조합하여 10~15자로 입력해주세요.</label>

        <span>비밀번호 재확인</span>
        <div class="cover"><input type="password" class="password_re"></div>
        <label></label>

        <span>이름</span>
        <div class="cover"><input type="text" class="name"></div>
        <label></label>

        <span>생년월일</span>
        <div class="date">
            <input type="text" placeholder="년(4자)" class="year">
            <div class="cover select"><select></select></div>
            <input type="text" placeholder="일" class="day">
        </div>
        <label></label>

        <span>성별</span>
        <div class="gender">
            <button><em></em>남성</button>
            <button><em></em>여성</button>
        </div>
        <label></label>

        <span>이메일</span>
        <div class="cover"><input type="text" class="email"></div>
        <label></label>

        <div class="advertisement">
            <input type="checkbox" class="all_ch">
            <div class="advertisement_text">
                <p>광고성 정보 수신 전체 동의(선택)</p>
                <p>입력한 휴대폰 번호와 이메일 주소로 이벤트 및 다양한 광고성 정보를 받으실 수 있습니다.</p>
                <p>(단, 14세 미만 회원은 이메일 수신만 가능)</p>
                <div class="advertisement_check">
                    <div><input type="checkbox" class="email_ch"> 이메일</div>
                    <div><input type="checkbox" class="sms_ch"> SMS (카카오톡 등 알림 서비스 포함)</div>
                    <div><input type="checkbox" class="time_ch"> 야간 카카오톡 알림 수신 (21시~8시)</div>
                </div>
            </div>
        </div>

        <div class="last_btn">
            <button>이전</button>
            <button>다음</button>
        </div>
    </div>
</template>

<script setup>
    import axios from "axios";
    import { onMounted } from "vue";
    onMounted(()=>{
        let t = ""
        for(let i=1; i<13;i++){
            t += "<option>"+i+"월</option>"
        }
        document.querySelector("select").innerHTML = t

        document.querySelector(".id").addEventListener("focusout",(e)=>{
            e.target.value = e.target.value.replaceAll(" ","")
            if(e.target.value.length == 0){
                e.target.parentNode.nextSibling.innerHTML="아이디 입력해주세요."
                e.target.parentNode.nextSibling.classList.add("color_red")
                e.target.classList.add("border_red")
                e.target.parentNode.classList.add("background_red_x_btn")
            }else if(e.target.value.length < 6 || e.target.value.length > 12){
                e.target.parentNode.nextSibling.innerHTML="6자~12자로 입력해주세요."
                e.target.parentNode.nextSibling.classList.add("color_red")
                e.target.classList.add("border_red")
                e.target.parentNode.classList.add("background_red_x_btn")
            }else{
                axios.get("/api/user_id_check/"+e.target.value+"/")
                .then((req)=>{
                    if(req.data.length<1){
                        day_check(e)
                        e.target.parentNode.classList.remove("background_red_x_btn")
                        e.target.parentNode.classList.add("background_blue_check")
                    }else{
                        e.target.parentNode.nextSibling.innerHTML=e.target.value+" 는 이미 사용 중입니다."
                    }
                })
            }
        })
        
        document.querySelector(".password").addEventListener("focusout",(e)=>{
            e.target.value = e.target.value.replaceAll(" ","")
            if(e.target.value.length == 0){
                e.target.parentNode.nextSibling.innerHTML="비밀번호 입력해주세요."
                e.target.parentNode.nextSibling.classList.add("color_red")
                e.target.classList.add("border_red")
                e.target.parentNode.classList.add("background_red_x_btn")
            }else{
                let reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,15}$/
                if(reg.test(e.target.value)==false){
                    e.target.parentNode.nextSibling.innerHTML="문자, 숫자, 기호를 조합하여 10~15자로 입력해주세요."
                    e.target.parentNode.nextSibling.classList.add("color_red")
                    e.target.classList.add("border_red")
                    e.target.parentNode.classList.add("background_red_x_btn")
                }else{
                    day_check(e)
                    e.target.parentNode.classList.remove("background_red_x_btn")
                    e.target.parentNode.classList.add("background_blue_check")
                }
            }
        })
        document.querySelector(".password_re").addEventListener("focusout",(e)=>{
            e.target.value = e.target.value.replaceAll(" ","")
            if(e.target.value.length == 0){
                e.target.parentNode.nextSibling.innerHTML="비밀번호 입력해주세요."
                e.target.parentNode.nextSibling.classList.add("color_red")
                e.target.classList.add("border_red")
                e.target.parentNode.classList.add("background_red_x_btn")
            }else if(e.target.value != document.querySelector(".password").value){
                e.target.parentNode.nextSibling.innerHTML="비밀번호가 일치하지 않습니다."
                e.target.parentNode.nextSibling.classList.add("color_red")
                e.target.classList.add("border_red")
                e.target.parentNode.classList.add("background_red_x_btn")
            }else{
                day_check(e)
                e.target.parentNode.classList.remove("background_red_x_btn")
                e.target.parentNode.classList.add("background_blue_check")
            }
        })

        document.querySelector(".name").addEventListener("focusout",(e)=>{
            e.target.value = e.target.value.replaceAll(" ","")
            if(e.target.value.length == 0){
                e.target.parentNode.nextSibling.innerHTML="이름 입력해주세요."
                e.target.parentNode.nextSibling.classList.add("color_red")
                e.target.classList.add("border_red")
                e.target.parentNode.classList.add("background_red_x_btn")
            }else{
                day_check(e)
                e.target.parentNode.classList.remove("background_red_x_btn")
                e.target.parentNode.classList.add("background_blue_check")
            }
        })

        document.querySelector(".year").addEventListener("focusout",(e)=>{
            let yyyy = /[0-9]/g;
            e.target.value = e.target.value.replaceAll(" ","")
            if(e.target.value.length != 4 || yyyy.test(e.target.value)==false){
                e.target.parentNode.nextSibling.innerHTML="태어난 년도를 숫자 4자로 입력해주세요."
                e.target.parentNode.nextSibling.classList.add("color_red")
                e.target.classList.add("border_red")
            }else{
                day_check(e)
            }
        })
        document.querySelector(".day").addEventListener("focusout",(e)=>{
            let yyyy = /[0-9]/g;
            e.target.value = e.target.value.replaceAll(" ","")
            if(e.target.value.length == 0){
                e.target.parentNode.nextSibling.innerHTML="태어난 일을 숫자로 입력해주세요."
                e.target.parentNode.nextSibling.classList.add("color_red")
                e.target.classList.add("border_red")
            }else{
                if(yyyy.test(document.querySelector(".day").value) && document.querySelector(".day").value > 0){
                    if(document.querySelector("select").value == "1월" && document.querySelector(".day").value < 32){
                        day_check(e)
                    }else if(document.querySelector("select").value == "2월" && document.querySelector(".day").value < 30){
                        day_check(e)
                    }else if(document.querySelector("select").value == "3월" && document.querySelector(".day").value < 32){
                        day_check(e)
                    }else if(document.querySelector("select").value == "4월" && document.querySelector(".day").value < 31){
                        day_check(e)
                    }else if(document.querySelector("select").value == "5월" && document.querySelector(".day").value < 32){
                        day_check(e)
                    }else if(document.querySelector("select").value == "6월" && document.querySelector(".day").value < 31){
                        day_check(e)
                    }else if(document.querySelector("select").value == "7월" && document.querySelector(".day").value < 32){
                        day_check(e)
                    }else if(document.querySelector("select").value == "8월" && document.querySelector(".day").value < 32){
                        day_check(e)
                    }else if(document.querySelector("select").value == "9월" && document.querySelector(".day").value < 31){
                        day_check(e)
                    }else if(document.querySelector("select").value == "10월" && document.querySelector(".day").value < 32){
                        day_check(e)
                    }else if(document.querySelector("select").value == "11월" && document.querySelector(".day").value < 31){
                        day_check(e)
                    }else if(document.querySelector("select").value == "12월" && document.querySelector(".day").value < 32){
                        day_check(e)
                    }else{
                        e.target.parentNode.nextSibling.innerHTML="생년월일을 정확히 입력해주세요."
                        e.target.parentNode.nextSibling.classList.add("color_red")
                        e.target.classList.add("border_red")
                    }
                }else{
                    e.target.parentNode.nextSibling.innerHTML="태어난 일을 숫자로 입력해주세요."
                    e.target.parentNode.nextSibling.classList.add("color_red")
                    e.target.classList.add("border_red")
                }
            }
        })

        document.querySelector(".email").addEventListener("focusout",(e)=>{
            let email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
            e.target.value = e.target.value.replaceAll(" ","")
            if(e.target.value.length == 0){
                e.target.parentNode.nextSibling.innerHTML="이메일을 입력해주세요."
                e.target.parentNode.nextSibling.classList.add("color_red")
                e.target.classList.add("border_red")
            }else if(email.test(e.target.value)==false){
                e.target.parentNode.nextSibling.innerHTML="이메일 형식이 올바르지 않습니다. 다시 확인해주세요."
                e.target.parentNode.nextSibling.classList.add("color_red")
                e.target.classList.add("border_red")
            }else{
               day_check(e) 
            }
        })

        document.querySelector(".all_ch").addEventListener("change",(e)=>{
            if(e.target.checked){
                document.querySelector(".email_ch").checked = true
                document.querySelector(".sms_ch").checked = true
                document.querySelector(".time_ch").checked = true
            }else{
                document.querySelector(".email_ch").checked = false
                document.querySelector(".sms_ch").checked = false
                document.querySelector(".time_ch").checked = false
            }
        })
        document.querySelector(".sms_ch").addEventListener("change",(e)=>{
            if(e.target.checked){
                document.querySelector(".time_ch").checked = true
            }else{
                document.querySelector(".time_ch").checked = false
            }
        })
        document.querySelectorAll(".gender button")[0].addEventListener("click",(e)=>{
            e.target.nextElementSibling.classList.remove("click")
            e.target.classList.add("click")
        })
        document.querySelectorAll(".gender button")[1].addEventListener("click",(e)=>{
            e.target.previousElementSibling.classList.remove("click")
            e.target.classList.add("click")
        })

        document.querySelectorAll(".last_btn button")[0].addEventListener("click",()=>{location.href="/"})
        document.querySelectorAll(".last_btn button")[1].addEventListener("click",(e)=>{
            let els = document.querySelectorAll("input")
            for(let i=0;i<8;i++){
                els[i].focus()
            }
            if(!document.querySelectorAll(".gender button")[0].classList.contains("click")
                & !document.querySelectorAll(".gender button")[1].classList.contains("click")){

                document.querySelector(".gender").nextSibling.innerHTML="성별을 선택해주세요."
                document.querySelector(".gender").nextSibling.classList.add("color_red")
            }else{
                document.querySelector(".gender").nextSibling.innerHTML=""
                document.querySelector(".gender").nextSibling.classList.remove("color_red")
            }

            els = document.querySelectorAll("label")
            let ch = 1
            for(let i=0;i<7;i++){
                if(els[i].textContent != ""){
                    els[i].previousElementSibling.focus();
                    break;
                    ch = 0
                }
            }
            if(ch == 1){
                let month = document.querySelector("select").value.replaceAll("월","")
                let yyyy = document.querySelector(".year").value;
                let mm = parseInt(month) < 10 ? "0"+month : month;
                let dd = document.querySelector(".day").value;

                axios.post("/api/user_insert",{
                    user_id : document.querySelector(".id").value,
                    user_password : document.querySelector(".password").value,
                    user_nickname : document.querySelector(".id").value,
                    channel_comment : "안녕하세요. "+document.querySelector(".id").value+"님의 채널 입니다. 자기소개를 입력해주세요.",
                    user_name : document.querySelector(".name").value,
                    birth_date : yyyy+mm+dd,
                    gender : document.querySelectorAll(".gender button")[0].classList.contains("click") ? '남성':'여성',
                    email : document.querySelector(".email").value,
                    advertisement_email : document.querySelector(".email_ch").checked = true ? 'Y' : 'N',
                    advertisement_sms : document.querySelector(".sms_ch").checked = true ? 'Y' : 'N',
                    advertisement_sms_night : document.querySelector(".time_ch").checked = true ? 'Y' : 'N'
                }).then((req)=>{
                    if(req.status == 200) location.href = "/"
                })
            }
        })

        function day_check(e){
            e.target.parentNode.nextSibling.innerHTML=""
            e.target.parentNode.nextSibling.classList.remove("color_red")
            e.target.classList.remove("border_red")
        }
    })
</script>

<style scope>

    .soopJoinInsert{
        color: #e5e5e5;
        width: 420px;
        margin: 0 auto;
        height: 100%;
        font-size: 14px;
    }
    .soopJoinInsert .logo{
        width: 100%;
        height: 100px;
        margin-top: 50px;
        display: flex;
        justify-content: center;
    }
    .soopJoinInsert .logo img{
        height: 65px;
    }
    .soopJoinInsert span{
        display: inline-block;
        width: 100%;
        margin-bottom: 5px;
    }
    .soopJoinInsert label{
        display: inline-block;
        width: 100%;
        font-size: 12px;
        color: #7398ff;
        margin-bottom: 10px;
    }
    .soopJoinInsert .cover{
        position: relative;
        display: flex;
        align-items: center;
    }
    .soopJoinInsert .cover::after{
        background: none;
        content: "";
        height: 15px;
        width: 15px;
        right: 10px;
        position: absolute;
        background-size: 11px;
    }
    .soopJoinInsert .cover.background_red_x_btn::after{
        background: url("/public/red_x_btn.svg") 50% 50% no-repeat;
        cursor: pointer;
    }
    .soopJoinInsert .cover.background_blue_check::after{
        background: url("/public/blue_check.svg") 50% 50% no-repeat;
    }

    .soopJoinInsert input{
        width: 100%;
        height: 50px;
        box-sizing: border-box;
        border-color: #666;
        background: #121213;
        padding: 15px 10px;
        outline: none;
        border: 1px solid #bbb;
        color: #e5e5e5;
        border-radius: 5px;
    }
    .soopJoinInsert input:focus{
        border-color: #7398ff;;
    }
    .soopJoinInsert .date{
        display: flex;
        flex-flow: row;
        gap: 0 10px;
        width: 100%;
    }
    .soopJoinInsert .date input:nth-child(1){
        width: 33%;
    }
    .soopJoinInsert .date .select{
        width: 33%;
    }
    .soopJoinInsert .date .select select{
        width: 100%;
        height: 100%;
        border: 1px solid #bbb;
        background: #121213;
        border-radius: 5px;
        color: #e5e5e5;
    }
    .soopJoinInsert .date input:nth-child(3){
        width: 33%;
    }

    .soopJoinInsert .gender{
        display: flex;
        flex-flow: row;
        width: 100%;
    }
    .soopJoinInsert .gender div{
        height: 100%;
        width: 1px;
        background: #bbb;
    }
    .soopJoinInsert .gender button{
        flex-grow: 1;
        background: transparent;
        border: 1px solid #bbb;
        outline: none;
        color: #8c8c8c;
        font-size: 13px;
        width: 50%;
        height: 42px;
        font-weight: bold;
        cursor: pointer;
    }

    .soopJoinInsert .gender button:nth-child(1){
        border-radius: 5px 0px 0px 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .soopJoinInsert .gender button:nth-child(1) em{
        background: transparent url(/public/split_membership.png) no-repeat;
        background-position: 0 -89px;
        width: 17px;
        height: 18px;
        margin-right: 5px;
    }
    .soopJoinInsert .gender button:nth-child(1).click em{
        background-position: 0 -70px;
    }
    .soopJoinInsert .gender button:nth-child(1).click{
        border: 1px solid #7398ff;
    }
    .soopJoinInsert .gender button:nth-child(2){
        border-radius: 0px 5px 5px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .soopJoinInsert .gender button:nth-child(2) em{
        background: transparent url(/public/split_membership.png) no-repeat;
        background-position: -20px -89px;
        width: 17px;
        height: 18px;
        margin-right: 5px;
    }
    .soopJoinInsert .gender button:nth-child(2).click em{
        background-position: -20px -70px;
    }
    .soopJoinInsert .gender button:nth-child(2).click{
        border: 1px solid #7398ff;
    }

    .soopJoinInsert .advertisement{
        display: flex;
        border-top: 1px solid #666;
        border-bottom: 1px solid #666;
        padding: 20px 0px;
        margin-bottom: 60px;
    }
    .soopJoinInsert .advertisement .all_ch{
        -webkit-appearance: none;
        width: 32px;
        height: 32px;
        cursor: pointer;
        border-radius: 50%;
        background: url("/public/blue_check.svg") 50% 50% no-repeat;
        flex-shrink: 0;
        background-size: 15px;
        border: 1px solid #bbb;
        margin-right: 10px;
    }
    .soopJoinInsert .advertisement .all_ch:checked{
        background: url("/public/checking.svg") 50% 50% no-repeat;
        background-size: 15px;
        background-color: #7398ff;
    }
    .soopJoinInsert .advertisement p{
        margin: 0;
    }
    .soopJoinInsert .advertisement p:nth-child(1){
        margin-bottom: 5px;
    }
    .soopJoinInsert .advertisement p:not(.soopJoinInsert .advertisement p:nth-child(1)){
        color: #666;
    }
    .soopJoinInsert .advertisement p:nth-child(2){
        font-size: 11px;
    }
    .soopJoinInsert .advertisement p:nth-child(3){
        font-size: 11px;
    }
    .soopJoinInsert .advertisement p:nth-child(4){
        display: flex;
        font-size: 13px;
    }
    .soopJoinInsert .advertisement .advertisement_text{
        margin-top: 10px;
    }
    .soopJoinInsert .advertisement .advertisement_check{
        margin-top: 10px;
    }
    .soopJoinInsert .advertisement .advertisement_check div{
        display: flex;
        align-items: center;
        color: #666;
        height: 30px;
        margin-left: -10px;
        
    }
    .soopJoinInsert .advertisement .advertisement_check div input{
        height: 13px;
        width: 13px;
        -webkit-appearance: none;
        cursor: pointer;
        border-radius: 50%;
        background: url("/public/gray_check.svg") 50% 50% no-repeat;
        flex-shrink: 0;
        background-size: 15px;
        border: none;
    }
    .soopJoinInsert .advertisement .advertisement_check .time_ch{
        margin-left: 20px;
    }
    .soopJoinInsert .advertisement .advertisement_check div input:checked{
        background: url("/public/blue_check.svg") 50% 50% no-repeat;
        background-size: 15px;
    }


    .soopJoinInsert .last_btn{
        display: flex;
        gap: 10px;
        width: 100%;
        height: 50px;
        padding-bottom: 50px;
    }
    .soopJoinInsert .last_btn button{
        width: 50%;
        height: 100%;
        outline: none;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    .soopJoinInsert .last_btn button:nth-child(1){
        background: #666;
    }
    .soopJoinInsert .last_btn button:nth-child(2){
        background: #7398ff;
    }


    .soopJoinInsert .color_red{
        color: rgb(255, 63, 63);
    }
    .soopJoinInsert .border_red{
        border: 1px solid rgb(255, 63, 63);
    }
</style>