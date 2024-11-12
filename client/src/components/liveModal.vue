<template>
    <div class="live_modal_content">
        <div class="title-area">
            <span>선물하기</span>
            <img src="/x_close.svg" class="modal_close">
        </div>
        <div class="pop-tabMenu">
            <span>별풍선<button></button><div></div></span>
            <span>도전미션<button></button><div></div></span>
            <span>대결미션<button></button><div></div></span>
            <span>영상풍선<button></button><div></div></span>
        </div>
        <div class="star on">
            <p>시그니처 풍선은 스트리머만의 특별한 풍선입니다.</p>
            <div class="input_signature">
                <input type="checkbox" checked>
                <span>100개 이상의 시그니처 풍선 선물시 클립 남기기</span>
            </div>
            <div class="signature_img"></div>
            <div class="signature_btn" title="0">
                <span class="prev"></span>
                <span class="next"></span>
                <label>별풍선 더 보기 ></label>
            </div>
            <div class="star_push">
                <div class="gift_at">
                    <span><strong></strong> 님께 선물</span>
                    <div class="put_star_balloon">
                        <input type="checkbox">
                        <span>연속선물</span>
                        <img src="/question_mark.svg">
                        <div class="tooltip">선물 완료 후 선물할 개수가 +1개로 자동 입력됩니다.</div>
                    </div>
                </div>
                <div class="star_input">
                    <span class="star_input_left">선물할 별풍선</span>
                    <input type="text" value="33">
                    <span>개</span>
                    <img src="/x_btn.svg">
                </div>
                <div class="text_input">
                    <p class="select_speek">전자비서 ></p>
                    <div class="text_area">
                        <div id="auqa_voice_textarea" contenteditable="true" ondragenter="return false;" ondrop="return false;" ondragover="return false;" placeholder="전자비서 알림음으로 재생될 채팅 메시지를 입력해주세요."></div>
                        <span><em>0</em>/128</span>
                    </div>
                </div>
                <div class="gift_st">
                    <div class="star_cnt">
                        <span class="userBalloonCount">보유 별풍선 <strong></strong>개</span>
                        <span class="txt_error">보유 별풍선이 부족합니다.</span>
                    </div>
                    <span class="buy">구매</span>
                </div>
                <div class="btn_area">
                    <button class="btn_cancel">취소</button>
                    <button class="btn_gift">선물하기</button>
                </div>
                <span class="txt_info">별풍선을 선물하면 스트리머를 후원하고 팬클럽에도 가입됩니다.</span>
            </div>
        </div>
        <div class="challenge">
            <div class="challenge_title">
                <span class="challenge_add">새로운 미션 요청</span>
                <div class="cnt_check">
                    <input type="checkbox" checked>
                    <span>진행중 (<em>0</em>/10)</span>
                    <input type="checkbox" checked>
                    <span>대기 (<em>0</em>/10)</span>
                </div>
            </div>
            <div class="challenge_list">
            </div>
        </div>
        <div class="vs">
            <h1>vs</h1>
        </div>
        <div class="star_vod">
            <h1>star_vod</h1>
        </div>
        <div class="sub_modal">
            <div class="sub_modal_add_star">
                <div class="sub_modal_title">별풍선을 더 구매하시겠습니까?</div>
                <div class="sub_modal_body">
                    현재 <em></em>개의 별풍선을 갖고 있습니다.<br>
                    더 많은 개수를 선물하시려면 별풍선을 추가로 구매해 주세요.
                </div>
                <div class="sub_modal_bottom">
                    <button class="cancelButton">취소</button>
                    <button class="confirmButton">구매</button>
                </div>
            </div>

            <div class="sub_modal_add_challenge">
                <div class="sub_modal_title">
                    <span>미션 요청하기</span>
                    <span></span>
                </div>
                <p>미션내용</p>
                <input type="text" placeholder="미션 내용을 입력해 주세요. (최대30자)" class="mission_content">
                <div class="sub_modal_text">
                    <span>미션 제한 시간</span>
                    <span>(최대 10일 미만)</span>
                </div>
                <div class="time_input">
                    <input type="number" placeholder="00" autocomplete="off">
                    <span>일</span>
                    <input type="number" placeholder="00" autocomplete="off">
                    <span>시간</span>
                    <input type="number" placeholder="00" autocomplete="off">
                    <span>분</span>
                </div>
                <div class="sub_modal_text">
                    <span>미션 상금</span>
                    <span>최소 500개 이상</span>
                </div>
                <div class="challenge_star_cnt">
                    <input type="number" placeholder="0" value="500">
                    <span>개</span>
                </div>
                <div class="sub_modal_text">
                    <span>보유 별풍선 <em>0</em>개</span>
                    <span class="gift">구매</span>
                </div>
                <div class="mission_agreement">
                    <p>미션 이용 약관</p>
                    <div>
                        <p>도전미션은 스트리머와 유저의 신뢰를 전제하에 진행되며 어떤 상황에도 미션 결과를 번복할 수 없습니다.</p>
                        <p>미션 결과는 스트리머가 결정하며 미션 요청한 유저는 스트리머를 대신해 ‘성공’만 결정 가능합니다.</p>
                        <p>미션 요청 후 1시간 경과 시 자동 취소되며 미션을 유저가 취소할 수 없습니다.</p>
                        <p>미션 취소, 미션 실패 시 상금은 유저에게 반환됩니다.</p>
                        <p>스트리머가 미션을 취소할 경우 5분간 해당 스트리머에게 미션 요청이 불가합니다.</p>
                        <p>최근 24시간 내 누적 5회 취소될 경우 24시간 동안 모든 스트리머에게 미션 요청이 불가합니다. 신중히 미션을 요청해 주세요.</p>
                    </div>
                </div>
                <div class="agree">
                    <input type="checkbox">
                    <span>동의합니다</span>
                </div>
                <div class="btn_area">
                    <button class="_btn_line">취소</button>
                    <button class="_btn_primary">도전 미션 요청</button>
                </div>
            </div>

            <div class="sub_modal_add_challenge_gift">
                <img src="/x_close.svg" class="sub_modal_add_challenge_gift_close">
                <p>추가 후훤할 별풍선을 입력해 주세요.</p>
                <span>미션</span>
                
                <div class="add_challenge_gift_content">
                    <span>3승</span>
                    <div>
                        <span><img src="/default_profile.png">왕클</span>
                        <span>1,000</span>
                    </div>
                </div>
                <div class="add_challenge_gift_cnt">
                    <span>후원할 별풍선 개수</span>
                    <input type="number">
                </div>
                <div class="my_gift_cnt">
                    <span>보유 별풍선 <em>0</em>개</span>
                    <span>구매</span>
                </div>
                <div class="btn_area">
                    <button class="_btn_line">취소</button>
                    <button class="_btn_primary">후원하기</button>
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
        load_challenge();
        let imgPath = inject("imgPath")['_value']
        let pop_tabMenu = document.querySelectorAll(".pop-tabMenu span");
        let pop_tabMenu_name = ['star','challenge','vs','star_vod']
        for(let i=0;i<pop_tabMenu.length;i++){
            pop_tabMenu[i].addEventListener("click",(e)=>{
                for(let ii=0;ii<pop_tabMenu.length;ii++){
                    pop_tabMenu[ii].classList.remove("on")
                    document.querySelector(".live_modal_content ."+pop_tabMenu_name[ii]).classList.remove("on")
                }
                e.target.classList.add("on")
                document.querySelector(".live_modal_content ."+pop_tabMenu_name[i]).classList.add("on")
            })
        }
        
        document.querySelector(".modal_close").addEventListener("click",()=>{
            document.querySelector(".modal").classList.remove("display_flex")
        })
        
        document.querySelector("#auqa_voice_textarea").addEventListener("input",(e)=>{
            if(e.target.textContent.split("").length > 128){
                let reValue = ''
                for(let i=0;i<128;i++){
                    reValue += e.target.textContent.split("")[i]
                }
                e.target.textContent = reValue
                document.querySelector(".text_area em").textContent = '128'
            }
            document.querySelector(".text_area em").textContent = parseInt(document.querySelector(".text_area em").textContent) + 1
        })
        document.querySelector(".buy").addEventListener("click",()=>{
            document.querySelector(".sub_modal").classList.add("display_flex")
            document.querySelector(".sub_modal .sub_modal_add_star").classList.add("display_block")
        })
        document.querySelector(".sub_modal .cancelButton").addEventListener("click",()=>{
            document.querySelector(".sub_modal").classList.remove("display_flex")
            document.querySelector(".sub_modal .sub_modal_add_star").classList.remove("display_block")
        })
        document.querySelector(".sub_modal .confirmButton").addEventListener("click",()=>{
            axios.post("/api/star_balloon_plus",{
                "star_balloon":100
            }).then((req)=>{
                if(req.status == 200){
                    
                    document.querySelector(".modal").classList.remove('display_flex')
                    document.querySelector(".sub_modal").classList.remove('display_flex')
                    document.querySelector(".sub_modal .sub_modal_add_star").classList.remove("display_block")
                    document.querySelector(".sub_modal .sub_modal_body em").textContent = parseInt(document.querySelector(".sub_modal .sub_modal_body em").textContent) + 100 
                    document.querySelector(".userBalloonCount strong").textContent = parseInt(document.querySelector(".userBalloonCount strong").textContent) + 100
                }else{
                    console.log(req.data)
                }
            })
        })
        document.querySelector(".challenge_add").addEventListener("click",()=>{
            document.querySelector(".sub_modal").classList.add("display_flex")
            document.querySelector(".sub_modal .sub_modal_add_challenge").classList.add("display_block")
        })
        document.querySelectorAll(".sub_modal_title span")[1].addEventListener("click",()=>{
            document.querySelector(".sub_modal").classList.remove("display_flex")
        })
        document.querySelector("._btn_line").addEventListener("click",()=>{
            document.querySelector(".sub_modal").classList.remove("display_flex")
        })
        document.querySelector("._btn_primary").addEventListener("click",()=>{
            
            let today = new Date();

            let year = today.getFullYear(); // 년도
            let month = today.getMonth() + 1;  // 월
            let date = today.getDate();  // 날짜

            let hours = today.getHours(); // 시
            let minutes = today.getMinutes();  // 분

            minutes += parseInt(document.querySelectorAll(".time_input input")[2].value)
            if(minutes > 59){
                hours += 1
                minutes -= 60
            }

            hours += parseInt(document.querySelectorAll(".time_input input")[1].value)
            if(hours > 23){
                date += 1
                hours -= 24
            }

            date += parseInt(document.querySelectorAll(".time_input input")[0].value)
            if(month == 1 && date > 32){
                year += 1
                date -= 30
            }else if(month == 2 && date > 30){
                year += 1
                date -= 28
            }else if(month == 3 && date > 32){
                year += 1
                date -= 30
            }else if(month == 4 && date > 31){
                year += 1
                date -= 29
            }else if(month == 5 && date > 32){
                year += 1
                date -= 30
            }else if(month == 6 && date > 31){
                year += 1
                date -= 29
            }else if(month == 7 && date > 32){
                year += 1
                date -= 30
            }else if(month == 8 && date > 32){
                year += 1
                date -= 30
            }else if(month == 9 && date > 31){
                year += 1
                date -= 29
            }else if(month == 10 && date > 32){
                year += 1
                date -= 30
            }else if(month == 11 && date > 31){
                year += 1
                date -= 29
            }else if(month == 12 && date > 32){
                year += 1
                date -= 30
            }
            axios.post("/api/insert_challenge",{
                bj_user_id : props.user_id,
                content : document.querySelector(".live_modal_content .mission_content").value,
                star_balloon : document.querySelector(".challenge_star_cnt input").value,
                limit_time : year+"-"+month+"-"+date+" "+hours+":"+minutes,
            }).then((req)=>{
                if(req.status == 200){
                    document.querySelector(".challenge_list").innerHTML = ''
                    load_challenge();
                    document.querySelector(".sub_modal").classList.remove("display_flex")
                }
            })
        })
        document.querySelector(".mission_content").addEventListener("keyup",(e)=>{
            if(e.target.value.split("").length > 30){
                let reValue = ''
                for(let i=0;i<30;i++){
                    reValue += e.target.value.split("")[i]
                }
                e.target.value = reValue
            }
        })
        document.querySelectorAll(".time_input input")[0].addEventListener("keyup",(e)=>{
            if(parseInt(e.target.value) > 9){
              e.target.value = 9
            };
        })
        document.querySelectorAll(".time_input input")[1].addEventListener("keyup",(e)=>{
            if(parseInt(e.target.value) > 23){
                e.target.value = 23
            }
        })
        document.querySelectorAll(".time_input input")[2].addEventListener("keyup",(e)=>{
            if(parseInt(e.target.value) > 59){
                e.target.value = 59
            }
        })
        document.querySelector(".challenge_star_cnt input").addEventListener("keyup",(e)=>{
            if(parseInt(e.target.value) > 30000){
                e.target.value = 30000
            }
        })
        
        function load_challenge(){
            axios.post("/api/select_challenge/",{
                user_id : props.user_id
            }).then((req)=>{
                let data = req.data
                for(let i=0;i<data.length;i++){
                    let t = ''
                    if(data[i]['result'] == '진행중'){
                        document.querySelectorAll(".cnt_check em")[0].textContent = parseInt(document.querySelectorAll(".cnt_check em")[0].textContent) + 1
                        
                        t = '<div class="challenge_ing">'
                        +     '<div class="challenge_state">'
                        +         '<label>'+data[i]['result']+'</label>'
                        +         '<span class="challenge_limit_time">'+data[i]['limit_time']+' 까지</span>'
                        +     '</div>'
                        +     '<span class="challenge_content">'+data[i]['content']+'</span>'
                        +     '<div class="info_box">'
                        +         '<div>'
                        +             '<img class="profile" src='+imgPath+data[i]['profile_path']+'>'
                        +             '<span class="nickname">'+data[i]['user_nickname']+'</span>'
                        +         '</div>'
                        +         '<div>'
                        +             '<span class="challenge_star_cnt">'+data[i]['star_balloon']+'</span>'
                        +             '<span class="challenge_plus_gift">+후원</span>'
                        +         '</div>'
                        +     '</div>'
                        + '</div>'
                        
                    }else{
                        t = '<div class="challenge_end">'
                        +    '<div>'
                        +       '<label class="'+(data[i]['result']=='실패' ? 'fail' : '')+'">'+data[i]['result']+'</label>'
                        +       '<span class="challenge_content ">'+data[i]['content']+'</span>'
                        +    '</div>'
                        +    '<span class="nickname">'+data[i]['user_nickname']+'</span>'
                        + '</div>'
                    }
                    document.querySelector(".challenge_list").innerHTML += t

                    for(let i=0;i<document.querySelectorAll(".challenge_ing .challenge_plus_gift").length;i++){
                        document.querySelectorAll(".challenge_ing .challenge_plus_gift")[i].addEventListener("click",()=>{
                            document.querySelector(".sub_modal").classList.add("display_flex")
                            document.querySelector(".sub_modal .sub_modal_add_challenge_gift").classList.add("display_block")
                        })
                    }

                }
            })
        }
    })
</script>

<style scope>
    .live_modal_content{
        background-color: #1C1E22;
        border-radius: 12px;
        position: relative;
        width: 502px;
        height: fit-content;
        box-sizing: border-box;
        border: 1px solid rgba(117, 123, 138, 0.3);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    }
    .live_modal_content .title-area{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        padding: 0px 32px;
        margin: 20px 0px;
    }
    .live_modal_content .title-area span{
        font-size: 18px;
        font-weight: 600;
    }
    .live_modal_content .title-area img{
        cursor: pointer;
    }
    .live_modal_content .pop-tabMenu{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        padding: 0px 32px;
    }
    .live_modal_content .pop-tabMenu span{
        font-size: 16px;
        display: flex;
        align-items: center;
        cursor: pointer;
        flex-grow: 1;
        justify-content: center;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(117, 123, 138, 0.3);
    }
    .live_modal_content .pop-tabMenu span button{
        display: none;
    }
    .live_modal_content .pop-tabMenu span.on{
        color:#0182FF;
        font-weight: 600;
        position: relative;
    }
    .live_modal_content .pop-tabMenu span.on div{
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 2px;
        background:#0182FF;
    }
    .live_modal_content .pop-tabMenu span.on > button{
        background: url("/public/question_mark.svg");
        background-size: 18px 18px;
        width: 18px;
        height: 18px;
        outline: none;
        border: none;
        display: block;
    }
    .live_modal_content .star{
        display: none;
    }
    .live_modal_content .star.on{
        display: block;
    }
    .live_modal_content .star p{
        margin: 0;
        text-align: center;
        color: #E2E4E9;
        margin-bottom: 5px;
        font-size: 14px;
        color: #E2E4E9;
    }
    .live_modal_content .star .input_signature{
        color: #9196A1;
        font-size: 13px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 10px;
    }
    .live_modal_content .star .input_signature input{
        width: 16px;
        height: 16px;
        margin-right: 10px;
    }
    .live_modal_content .star .signature_img{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0 10px;
        flex-shrink: 0;
        margin-top: -39px;
    }
    .live_modal_content .star .signature_img img{
        width: 139px;
        height: 123px;
        box-sizing: border-box;
        cursor: pointer;
    }
    .live_modal_content .star .signature_btn{
        height: 23px;
        position: relative;
        display: flex;
        margin-top: 10px;
        justify-content: center;
        padding: 0px 32px 18px;
    }
    .live_modal_content .star .signature_btn .prev,
    .live_modal_content .star .signature_btn .next{
        display: none;
    }
    .live_modal_content .star .signature_btn .prev{
        width: 22px;
        height: 22px;
        margin: 0 5px;
        text-indent: -9999em;
        background: url('/public/live_left_signature_btn.svg') 50% 50% no-repeat;
        outline: none;
        border: none;
        cursor: pointer;
    }
    .live_modal_content .star .signature_btn .prev.on{
        background: url('/public/live_left_signature_btn_on.svg') 50% 50% no-repeat;
    }
    .live_modal_content .star .signature_btn .next{
        width: 22px;
        height: 22px;
        margin: 0 5px;
        text-indent: -9999em;
        background: url('/public/live_right_signature_btn.svg') 50% 50% no-repeat;
        outline: none;
        border: none;
        cursor: pointer;
    }
    .live_modal_content .star .signature_btn .next.on{
        background:url("/public/live_right_signature_btn_on.svg") 50% 50% no-repeat;
    }
    .live_modal_content .star .signature_btn .prev.display_flex{
        display: block;
    }
    .live_modal_content .star .signature_btn .next.display_flex{
        display: block;
    }
    .live_modal_content .star .signature_btn label{
        color: #0182FF;
        font-size: 13px;
        position: absolute;
        right: 31px;
        bottom: 0;
        cursor: pointer;
    }
    .live_modal_content .star .star_push{
        background: #232529;
        padding: 10px 32px;
        margin-top: 10px;
    }
    .live_modal_content .star .star_push .star_input{
        background: rgba(0,0,0,0.2);
    }
    .live_modal_content .star .star_push .star_input img{
        width: 20px;
        height: 20px;
    }
    .live_modal_content .star .star_push .star_input input{
        font-size: 25px;
        text-align: right;
        font-weight: bold;
        width: 170px;
        outline: none;
        border: none;
        background: transparent;
        color: #E2E4E9;
    }
    .live_modal_content .star .star_push .gift_at{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 5px;
    }
    
    .live_modal_content .star .star_push .gift_at .put_star_balloon{
        display: flex;
        font-size: 13px;
        align-items: center;
        margin-bottom: 5px;
        position: relative;
    }
    .live_modal_content .star .star_push .gift_at .put_star_balloon span{
        margin-right: 7px;
        cursor: pointer;
    }
    .live_modal_content .star .star_push .gift_at .put_star_balloon input{
        margin-right: 7px;
        width: 15px;
        height: 15px;
        cursor: pointer;
    }
    .live_modal_content .star .star_push .star_input{
        width: 100%;
        display: flex;
        align-items: center;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        border: 1px solid rgba(117,123,138,0.3);
        padding: 5px 18px;
        box-sizing: border-box;
    }
    .live_modal_content .star .star_push .star_input_left{
        flex-grow: 1;
    }
    .live_modal_content .star .star_push span:not(.star_input_left){
        font-size: 13px;
        font-style: normal;
        color: #9196A1;
        text-align: end;
        display: block;
    }
    .live_modal_content .star .star_push .gift_at span{
        color: #E2E4E9;
        font-size: 15px;
    }
    .live_modal_content .star .star_push span:not(.star_input_left) em{
        font-style: normal;
    }
    .live_modal_content .star .star_push .star_input img{
        cursor: pointer;
        margin-left: 3px;
    }
    .live_modal_content .star .star_push .text_input{
        width: 100%;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        border-bottom: 1px solid rgba(117,123,138,0.3);
        border-left: 1px solid rgba(117,123,138,0.3);
        border-right: 1px solid rgba(117,123,138,0.3);
        box-sizing: border-box;
        padding: 10px 18px 8px 18px;
        background: rgba(0,0,0,0.2);
    }
    .live_modal_content .star .star_push .text_input .text_area{
        background: #232529;
        border-radius: 10px;
        margin: 3px 0 5px;
        padding: 8px 10px;
    }
    
    .live_modal_content .star .star_push .text_input .text_area div{
        height: 30px;
        font-size: 13px;
        overflow-y: auto;
        width: 100%;
        line-height: 1.4;
        word-break: break-all;
        outline: none;
        scrollbar-width: none;
    }
    .live_modal_content .star .star_push .text_input p{
        text-align: start;
        margin-bottom: 7px;
        color: #9196A1;
    }
    .live_modal_content .star .star_push .gift_st{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 7px;
    }
    .live_modal_content .star .star_push .gift_st div{
        display: flex;
    }

    .live_modal_content .star .star_push .gift_st .buy{
        display: flex;
        padding: 5px 15px;
        border: 1px solid #0182FF;
        border-radius: 4px;
        color: #0182FF;
        font-size: 12px;
        margin: 0;
        cursor: pointer;
    }

    .live_modal_content .star .star_push .gift_st .txt_error{
        font-size: 11px;
        color: #ec1e1e;
        font-weight: normal;
        display: none;
        align-items: center;
    }
    .live_modal_content .star .star_push .gift_st .txt_error.display_flex{
        display: flex;
    }
    .live_modal_content .star .star_push .gift_st .txt_error::before{
        content : "!";
        border-radius: 50%;
        border: 1px solid #ec1e1e;
        font-size: 12px;
        font-weight: bold;
        width: 15px;
        height: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10px;
        margin-right: 5px;
    }
    .live_modal_content .star .star_push .btn_area{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0 10px;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .live_modal_content .star .star_push .btn_area .btn_gift{
        position: relative;
        background: #0182FF;
        border: 0;
        color: #FCFCFD;
        transition: all .2s ease-in-out;
        min-width: 152px;
        height: 44px;
        margin-left: 10px;
        border-radius: 10px;
        box-sizing: border-box;
        font-size: 16px;
        cursor: pointer;
    }
    .live_modal_content .star .star_push .btn_area .btn_cancel{
        color: #E2E4E9;
        border: 1px solid #464A53;
        background: #1C1E22;
        transition: all .2s ease-in-out;
        box-sizing: border-box;
        min-width: 152px;
        height: 44px;
        border-radius: 10px;
        font-size: 16px;
        cursor: pointer;
    }
    .live_modal_content .star .star_push span.txt_info{
        text-align: center;
    }


    .live_modal_content .sub_modal{
        position: absolute;
        top: 0;
        left: 0;
        display: none;
        align-items: center;
        justify-content: center;
        background: rgba(23,25,28,0.6);
        z-index: 2500;
        width: 100%;
        height: 100%;
    }
    .live_modal_content .sub_modal.display_flex{
        display: flex;
    }
    .live_modal_content .sub_modal .sub_modal_add_star{
        font-size: 14px;
        text-align: center;
        border: 1px solid rgba(117,123,138,0.3);
        background: #1C1E22;
        border-radius: 10px;
        padding: 30px 25px;
        color: #D5D7DC;
        display: none;
    }
    .live_modal_content .sub_modal .sub_modal_add_star.display_block{
        display: block;
    }
    .live_modal_content .sub_modal .sub_modal_add_star .sub_modal_title{
        font-weight: 600;
        margin-bottom: 5px;
        font-size: 15px;
    }
    .live_modal_content .sub_modal .sub_modal_add_star .sub_modal_body em{
        font-style: normal;
    }
    .live_modal_content .sub_modal .sub_modal_add_star .sub_modal_bottom{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0 10px;
        margin-top: 20px;
    }
    .live_modal_content .sub_modal .sub_modal_add_star .sub_modal_bottom button{
        cursor: pointer;
        color: #E2E4E9;
        padding: 7px 25px;
        border-radius: 7px;
        outline: none;
    }
    .live_modal_content .sub_modal .sub_modal_add_star .sub_modal_bottom .cancelButton{
        border: 1px solid #464A53;
        background: transparent;
    }
    .live_modal_content .sub_modal .sub_modal_add_star .sub_modal_bottom .confirmButton{
        background: #0182FF;
        border: #464A53;
    }
    .live_modal_content .star .star_push span.userBalloonCount{
        font-size: 15px;
        color: #E2E4E9;
    }
    .live_modal_content .star .star_push span.userBalloonCount strong{
        color: #44A3FF;
    }
    
    .live_modal_content .star .star_push .gift_at .tooltip{
        background: #1C1E22;
        border:1px solid rgba(117, 123, 138, 0.3);
        color: #D5D7DC;
        display: none;
        position: absolute;
        z-index: 12;
        top: 27px;
        right: -5px;
        padding: 6px 9px;
        border-radius: 12px;
        white-space: nowrap;
    }
    .live_modal_content .star .star_push .gift_at .put_star_balloon img:hover ~ .tooltip{
        display: block;
    }



    .live_modal_content .challenge{
        display: none;
        flex-flow: column;
        justify-content: center;
    }
    .live_modal_content .challenge.on{
        display: flex;
    }
    .live_modal_content .challenge .challenge_title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 32px;
        margin-bottom: 20px;
    }
    .live_modal_content .challenge .challenge_title .cnt_check{
        display: flex;
        align-items: center;
    }
    .live_modal_content .challenge .challenge_title input{
        height: 16px;
        width: 16px;
        margin-right: 5px;
        margin-left: 15px;
    }
    .live_modal_content .challenge .challenge_title span{
        font-size: 14px;
    }
    .live_modal_content .challenge .challenge_title .challenge_add{
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .live_modal_content .challenge .challenge_title .challenge_add::before{
        content:"";
        background: url("/public/plus.svg") 50% 50% no-repeat;
        background-color: #232529;
        border-radius: 50%;
        background-size: 10px 10px;
        width: 24px;
        height: 24px;
        margin-right: 8px;
    }
    .live_modal_content .challenge .challenge_list{
        height: 516px;
        padding: 0px 32px;
        display: flex;
        flex-flow: column;
        gap: 10px 0px;
    }
    .live_modal_content .challenge .challenge_ing{
        background: #1C1E22;
        padding: 13px 13px 0;
        border: 1px solid rgba(117,123,138,0.3);
        border-radius: 12px;
        box-sizing: border-box;
        font-size: 14px;
    }
    .live_modal_content .challenge .challenge_ing .challenge_state{
        display: flex;
        color: #44A3FF;
        font-size: 12px;
        align-items: center;
        margin-bottom: 8px;
    }
    .live_modal_content .challenge .challenge_ing .challenge_state label{
        padding: 3px 13px;
        border-radius: 40px;
        box-sizing: border-box;
        background: rgba(1, 130, 255, 0.08);
        margin-right: 10px;
    }
    .live_modal_content .challenge .challenge_ing .info_box{
        border-top: 1px solid rgba(117,123,138,0.3);
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 13px;
    }
    .live_modal_content .challenge .challenge_ing .info_box div{
        display: flex;
        align-items: center;
    }
    .live_modal_content .challenge .challenge_ing .info_box .challenge_star_cnt{
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    .live_modal_content .challenge .challenge_ing .info_box .challenge_star_cnt::-webkit-inner-spin-button {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
    }
    .live_modal_content .challenge .challenge_ing .info_box .challenge_star_cnt::before{
        content:"";
        background: url("/public/circle_star.svg") 50% 50% no-repeat;
        width: 15px;
        height: 15px;
        margin-right: 5px;
    }
    .live_modal_content .challenge .challenge_ing .info_box .profile{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 5px;
    }
    .live_modal_content .challenge .challenge_ing .info_box .challenge_plus_gift{
        margin-left: 5px;
        color: #44A3FF;
        cursor: pointer;
    }
    .live_modal_content .challenge .challenge_end{
        background: #1C1E22;
        padding: 0px 13px;
        border: 1px solid rgba(117,123,138,0.3);
        border-radius: 12px;
        box-sizing: border-box;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;
    }
    .live_modal_content .challenge .challenge_end div{
        display: flex;
        align-items: center;
    }
    .live_modal_content .challenge .challenge_end label{
        color: #44A3FF;
        border: 1px solid #0182FF;
        margin-right: 10px;
        border-radius: 40px;
        box-sizing: border-box;
        height: 22px;
        padding: 0 12px;
        display: block;
    }
    .live_modal_content .challenge .challenge_end label.fail{
        color: #ec1e1e;
        border-color: #ec1e1e;
    }
    .live_modal_content .challenge .challenge_end .challenge_content{
        color: #E2E4E9;
    }
    .live_modal_content .challenge .challenge_end .nickname{
        font-size: 13px;
        color: #9196A1;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge{
        display: none;
        color: #E2E4E9;
        font-size: 12px;
        border: 1px solid rgba(117,123,138,0.3);
        background: #1C1E22;
        border-radius: 10px;
        padding: 15px 20px;
        overflow: hidden auto;
        box-sizing: border-box;
        width: 360px;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge.display_block{
        display: block;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge p{
        margin: 0;
        margin-bottom: 10px;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge div{
        margin-bottom: 10px;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge .sub_modal_title{
        position: relative;
        margin-bottom: 10px;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge .sub_modal_title span:nth-child(1){
        margin-bottom: 16px;
        font-size: 16px;
        font-weight: 600;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge .sub_modal_title span:nth-child(2){
        background: url("/public/x_close.svg") 50% 50% no-repeat;
        width: 20px;
        height: 20px;
        display: block;
        position: absolute;
        right: 0;
        top: 4px;
        cursor: pointer;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge .time_input{
        display: flex;
        gap: 0 10px;
        align-items: center;
        
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge .time_input input{
        width: 100%;
        height: 42px;
        border: none;
        padding: 0 12px;
        background: #232529;
        border-radius: 8px;
        outline: none;
        color: #E2E4E9;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge .time_input input::-webkit-inner-spin-button {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge .time_input span{
        flex-shrink: 0;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge .mission_content{
        color: #E2E4E9;
        font-size: 14px;
        width: 100%;
        padding: 0 12px;
        border: 0;
        background: #232529;
        outline: none;
        border-radius: 8px;
        height: 42px;
        box-sizing: border-box;
        margin-bottom: 10px;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge .sub_modal_text{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge .sub_modal_text span:nth-child(2):not(.gift){
        color:#9196A1;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge .challenge_star_cnt{
        display: flex;
        align-items: center;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge .challenge_star_cnt input{
        background: #232529;
        box-sizing: border-box;
        height: 42px;
        font-size: 14px;
        flex-grow: 1;
        padding: 0 12px;
        border: 0;
        outline: none;
        border-radius: 10px;
        margin-right: 10px;
        color: #E2E4E9;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge .challenge_star_cnt input::-webkit-inner-spin-button {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge .mission_agreement{
        
        
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge .mission_agreement div{
        padding-left: 16px;
        max-height: 67px;
        overflow: hidden auto;
        scrollbar-width: none;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge .mission_agreement div p{
        color: #9196A1;
        font-size: 12px;
        margin-bottom: 0px;
        line-height: 1.4;
        text-indent: -16px;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge .mission_agreement div p::before{
        content: "";
        display: inline-block;
        background: #757B8A;
        width: 2px;
        height: 2px;
        margin: 0 7px;
        border-radius: 50%;
        vertical-align: 3px;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge .sub_modal_text em{
        font-style: normal;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge .agree{
        display: flex;
        align-items: center;
        justify-content: end;
        color: #D5D7DC;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge .btn_area{
        display: flex;
        gap: 0 10px;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge .btn_area button{
        flex-grow: 1;
        cursor: pointer;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge .btn_area button._btn_line{
        width: 100%;
        height: 36px;
        padding: 0 10px;
        border-radius: 8px;
        font-size: 14px;
        color: #E2E4E9;
        border: 0;
        transition: all .2s ease-in-out;
        background: transparent;
        border:1px solid #464A53;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge .btn_area button._btn_primary{
        width: 100%;
        height: 36px;
        padding: 0 10px;
        border-radius: 8px;
        font-size: 14px;
        position: relative;
        background: #0182FF ;
        border: 0;
        color: #FCFCFD ;
        transition: all .2s ease-in-out;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge .sub_modal_text .gift{
        color: #0182FF;
        padding: 3px 8px;
        font-size: 11px;
        border-radius: 4px;
        border: 1px solid #0182FF;
        cursor: pointer;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge_gift{
        display: none;
        border:1px solid rgba(117, 123, 138, 0.3);
        background: #1C1E22;
        position: relative;
        border-radius: 10px;
        padding: 28px;
        font-size: 14px;
        color: #D5D7DC;
        width: 360px;
        box-sizing: border-box;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge_gift.display_block{
        display: block;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge_gift .sub_modal_add_challenge_gift_close{
        position: absolute;
        right:15px;
        top: 15px;
        cursor: pointer;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge_gift p{
        text-align: center;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge_gift .add_challenge_gift_content{
        background: #232529;
        padding: 14px 16px;
        border-radius: 12px;
        flex-shrink: 0;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge_gift .add_challenge_gift_content div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid rgba(117,123,138,0.1);
        padding-top: 10px;
        margin-top: 10px;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge_gift .add_challenge_gift_content div span:nth-child(1){
        display: flex;
        align-items: center;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge_gift .add_challenge_gift_content div span:nth-child(1) img{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 5px;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge_gift .add_challenge_gift_content div span:nth-child(2){
        display: flex;
        align-items: center;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge_gift .add_challenge_gift_content div span:nth-child(2)::before{
        content: "";
        background: url("/public/circle_star.svg") 50% 50% no-repeat;
        width: 15px;
        height: 15px;
        background-size: 100% 100%;
        margin-right: 2px;
        margin-top: 3px;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge_gift .add_challenge_gift_cnt{
        display: flex;
        flex-flow: column;
        margin-top: 10px;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge_gift .add_challenge_gift_cnt input{
        border: 1px solid #464A53;
        color: #E2E4E9;
        background: transparent;
        height: 42px;
        border-radius: 8px;
        box-sizing: border-box;
        font-size: 14px;
        margin: 10px 0px;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge_gift .add_challenge_gift_cnt input::-webkit-inner-spin-button {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge_gift .my_gift_cnt{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge_gift .my_gift_cnt em{
        font-style: normal;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge_gift .my_gift_cnt span:nth-child(2){
        padding: 3px 8px;
        border: 1px solid #0182FF;
        border-radius: 4px;
        color: #0182FF;
        font-size: 12px;
        cursor: pointer;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge_gift .btn_area{
        display: flex;
        justify-content: center;
        gap: 0 10px;
        margin-top: 20px;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge_gift .btn_area ._btn_line{
        height: 36px;
        border-radius: 8px;
        font-size: 14px;
        border: 1px solid #464A53;
        color: #E2E4E9;
        background: transparent;
        width: 85px;
        cursor: pointer;
    }
    .live_modal_content .sub_modal .sub_modal_add_challenge_gift .btn_area ._btn_primary{
        height: 36px;
        border-radius: 8px;
        font-size: 14px;
        width: 85px;
        color: #E2E4E9;
        background: #0182FF;
        border: none;
        cursor: pointer;
    }
    .live_modal_content .vs{
        display: none;
    }
    .live_modal_content .vs.on{
        display: block;
    }
    .live_modal_content .star_vod{
        display: none;
    }
    .live_modal_content .star_vod.on{
        display: block;
    }
</style>