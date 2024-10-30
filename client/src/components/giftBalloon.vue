<template>
    <div class="giftBalloon_back">
        <input type="hidden" class="hidden">
        <div class="giftBalloon">
            <h2>
                <a href="javascript:;" class="on">별풍선 선물하기</a>
                <span>별풍선이란?</span>
            </h2>
            <div class="tab1">
                <div class="star_list">
                    <p>시그니처 풍선은 스트리머만의 특별한 풍선입니다.</p>
                    <div class="signature_img"></div>
                    <div class="signature_btn" title="0">
                        <button type="button" class="prev"></button>
                        <button type="button" class="next off"></button>
                    </div>
                </div>
                <div class="send_area">
                    <div class="gift_at">
                        <span><strong></strong> 님께 선물</span>
                        <a href="javascript:;" class="btn_stars">별풍선 더보기</a>
                    </div>
                    <div class="put_star_balloon">
                        <span>선물할 별풍선</span>
                        <input type="text" value="33">
                        <label>개</label>
                        <img src="/x_btn.svg">
                    </div>
                    <div class="gift_st">
                        <div class="star_cnt">
                            <span>보유 별풍선</span>
                            <span class="userBalloonCount"><strong></strong>개</span>
                            <label class="txt_error"><em></em><span>보유 별풍선 부족</span></label>  
                        </div>
                        <span class="buy">구매</span>
                    </div>
                    <div class="btn_area">
                        <button class="btn_gift">선물하기</button><button class="btn_cancel">취소</button>
                    </div>
                    <p class="txt_info">별풍선을 선물하면 스트리머를 후원하고 팬클럽에도 가입됩니다.</p>
                    <div class="input_wrap">
                        <input type="checkbox" id="effect_check" checked="checked">
                        <label for="gift_check">라이브 방송 입장 시, 별풍선 선물 표시</label>
                    </div>
                </div>
            </div>

            <div class="modal">
                <div class="modal_content">
                    <div class="modal_head">
                        <img src="/x_btn.svg">
                    </div>
                    <div class="modal_body">
                        <div class="modal_body_sub1">
                            <label></label>
                            <div>
                                <dt>별풍선이란?</dt>
                                <span>
                                    <p>참여자가 스트리머를 응원하고 후원할 수 있는<br>유료 선물 시스템입니다.</p>
                                    <p>별풍선을 선물하면 자동으로 스트리머 팬클럽<br>에 가입 됩니다.</p>
                                    <p>선물받은 스트리머는 별풍선을 환전하여 실제<br>수익으로 돌려 받게 됩니다.</p>
                                </span>
                            </div>
                            <a href="#">상세보기</a>
                        </div>
                        <div class="modal_body_sub2">
                            <label></label>
                            <div>
                                <dt>시그니처 풍선이란?</dt>
                                <span><p>스트리머의 개성이 돋보이도록 직접 만들어<br>등록하는 맞춤형 별풍선입니다.</p></span>
                            </div>
                            <a href="#">상세보기</a>
                        </div>
                    </div>
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
    let signature_list = []
    onMounted(()=>{
        let imgPath = inject("imgPath")['_value']
        axios.get("/api/gift_balloon/"+props.user_id)
        .then((req)=>{
            const data = req.data.result
            for(let i=0;i<data.length;i++){
                if(data[i]['user_id'] == props.user_id){
                    document.querySelector(".gift_at strong").textContent = data[0]['user_name']+"("+data[0]['user_id']+")"
                    
                    
                    document.querySelector(".put_star_balloon input").addEventListener("input",(e)=>{
                        if(parseInt(data[0]['add_star_balloon']) < e.target.value){
                            document.querySelector(".txt_error").classList.add("display_flex")
                        }else{
                            document.querySelector(".txt_error").classList.remove("display_flex")
                        }
                    })
                    signature_list.push(data[i])
                }else{
                    if(parseInt(data[i]['add_star_balloon']) < document.querySelector(".put_star_balloon input").value){
                        document.querySelector(".txt_error").classList.add("display_flex")
                    }else{
                        document.querySelector(".txt_error").classList.remove("display_flex")
                    }
                    document.querySelector(".userBalloonCount strong").textContent = data[i]['add_star_balloon']
                }
            }
            if(signature_list.length > 3){
                document.querySelector(".signature_btn").classList.add("display_flex")
            }
            signature_load()
        })

        document.querySelector(".modal_head img").addEventListener("click",() => {
            document.querySelector(".modal").classList.remove("display_flex")
        })
        document.querySelector(".giftBalloon h2").addEventListener("click",() => {
            document.querySelector(".modal").classList.add("display_flex")
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
        document.querySelector(".btn_gift").addEventListener("click",()=>{
            axios.post("/api/gift_balloon_action",{
                "star_balloon":document.querySelector(".put_star_balloon input").value,
                "get_user_id":props.user_id
            })
            .then((req)=>{
                if(req.status == 200){
                    window.close()
                }else{
                    console.log(re.data)
                }
            })
        })
        document.querySelector(".btn_cancel").addEventListener("click",()=>{
            window.close()
        })
        function signature_load(){
            let start = parseInt(document.querySelector(".signature_btn").title)
            let end = start+3 > signature_list.length ? signature_list.length : start+3
            let t = ""
            for(let i=start;i<end;i++){
                if(signature_list[i]['signature_img_path']!=null)
                t += "<img style='width: 146px;height: 123px;box-sizing: border-box;cursor: pointer;' class='signature' src='"+imgPath+signature_list[i]['signature_img_path']+"' alt='"+signature_list[i]['signature_balloon_cnt']+"'>"
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
    })
</script>

<style scoped>
    .giftBalloon_back{
        width: 100%;
        height: 100vh;
        background: #fff;
        color: #414141;
    }
    .giftBalloon{
        display: flex;
        flex-flow: column;
        align-items: center;
        width: 500px;
        height: 520px;
        font-size: 11px;
        position: relative;
    }
    .giftBalloon h2{
        padding-left: 20px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #2c84ce;
        font-size: 11px;
        box-sizing: border-box;
        cursor: pointer;
    }
    .giftBalloon h2 a{
        border-bottom: 2px solid #2c84ce;
        color: #2c84ce;
        font-weight: bold;
        text-decoration: none;
        padding-bottom: 5px;
        margin: 0;
    }
    .giftBalloon h2 span{
        display: flex;
        align-items: center;
    }
    .giftBalloon h2 span::after{
        content: "?";
        width: 11px;
        height: 11px;
        font-size: 10px;
        border: 1px solid #006bfe;
        background-color: #2c84ce;
        border-radius: 2px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 5px;
    }
    .giftBalloon .tab1{
        width: 100%;
    }
    .giftBalloon .star_list{
        margin-bottom: 10px;
        width: 100%;
        padding: 13px 20px 0px 20px;
        box-sizing: border-box;
        min-height: 43px;
    }
    .giftBalloon .star_list p{
        margin: 0 0 0 0;
        text-align: center;
        color: #666666;
    }
    .giftBalloon .signature_img{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0 10px;
        margin-top: -31px;
        margin-bottom: 8px;
    }
    .giftBalloon .signature_img .signature{
        width: 146px;
        height: 123px;
        box-sizing: border-box;
        cursor: pointer;
    }
    .giftBalloon .signature_img img:hover{
        border: 2px solid #666666;
    }
    .giftBalloon .signature_img img.click{
        border: 2px solid #4694ff;
    }
    .giftBalloon .signature_btn{
        display: none;
        align-items: center;
        justify-content: center;
        gap: 0 3px;
    }
    .giftBalloon .signature_btn.display_flex{
        display: flex;
    }
    .giftBalloon .signature_btn .prev{
        width: 22px;
        height: 22px;
        margin: 0 5px;
        text-indent: -9999em;
        background: url('/public/split_layer.png') no-repeat -0px -878px;
        outline: none;
        border: none;
        cursor: pointer;
    }
    .giftBalloon .signature_btn .prev.on{
        background-position: 0px -900px;
    }
    .giftBalloon .signature_btn .next{
        width: 22px;
        height: 22px;
        margin: 0 5px;
        text-indent: -9999em;
        background: url('/public/split_layer.png') no-repeat -30px -878px;
        outline: none;
        border: none;
        cursor: pointer;
    }
    .giftBalloon .signature_btn .next.on{
        background-position: -30px -900px;
    }
    .giftBalloon .send_area{
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 30px 20px;
        box-sizing: border-box;
        background: #eff3f9;
    }
    .giftBalloon .send_area .gift_at{
        font-size: 13px;
        width: 100%;
        font-weight: normal;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #666666;
    }
    .giftBalloon .send_area .gift_at a{
        font-weight: bold;
        padding-bottom: 1px;
        color: #006bfe;
        font-size: 13px;
        border-bottom: 1px solid #006bfe;
        text-decoration: none;
    }
    .giftBalloon .send_area  strong{
        font-weight: bold;
        color:#000
    }
    .giftBalloon .send_area .put_star_balloon{
        display: flex;
        align-items: center;
        width: 100%;
        font-weight: bold;
        padding: 10px 10px;
        border: 2px solid #999999;
        margin-top: 10px;
        box-sizing: border-box;
        background: #fff;
    }
    .giftBalloon .send_area .put_star_balloon span{
        font-size: 15px;
        flex-grow: 1;
        font-weight: bold;
    }
    .giftBalloon .send_area .put_star_balloon input{
        font-size: 25px;
        text-align: right;
        font-weight: bold;
        width: 170px;
        outline: none;
        border: none;
        background: transparent;
    }
    .giftBalloon .send_area .put_star_balloon label{
        font-size: 13px;
    }
    .giftBalloon .send_area .put_star_balloon img{
        width: 15px;
        height: 15px;
        cursor: pointer;
        box-sizing: border-box;
        margin-left: 5px;
    }
    .giftBalloon .send_area .gift_st{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 10px 0px;
    }
    
    .giftBalloon .send_area .gift_st .buy{
        padding: 5px 10px;
        color: #fff;
        background: #4279ff;
        border-radius: 15px;
        cursor: pointer;
    }
    .giftBalloon .send_area .btn_area{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0 10px;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .giftBalloon .send_area .btn_area .btn_gift{
        font-size: 14px;
        color: #fff;
        font-weight: bold;
        background: #4279ff;
        border: none;
        width: 120px;
        height: 40px;
        font-weight: bold;
        cursor: pointer;
    }
    .giftBalloon .send_area .btn_area .btn_cancel{
        font-size: 14px;
        color: #333;
        border: 1px solid #cdcdcd;
        width: 120px;
        height: 40px;
        background: #fff;
        font-weight: normal;
        cursor: pointer;
    }
    #effect_check{
        width: 15px;
        height: 15px;
    }
    .giftBalloon .gift_st .star_cnt{
        display: flex;
        align-items: center;
    }
    .giftBalloon .gift_st .star_cnt .userBalloonCount{
        font-weight: normal;

    }
    .giftBalloon .gift_st .star_cnt .userBalloonCount strong{
        font-size: 15px;
        font-weight: bold;
        margin: 0px 1px 0px 5px;
    }
    .giftBalloon .gift_st .txt_error{
        font-size: 11px;
        color: #ec1e1e;
        font-weight: normal;
        display: none;
        align-items: center;
    }
    .giftBalloon .send_area .gift_st .txt_error.display_flex{
        display: flex;
    }
    .giftBalloon .gift_st .txt_error::before{
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

    .giftBalloon .send_area .txt_info,
    .giftBalloon .send_area .input_wrap{
        color:#666666;
    }


    .giftBalloon .modal{
        width: 100%;
        height: 100%;
        font-size: 10px;
        color: #777;
        display: none;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        justify-content: center;
        z-index: 999;
        background: #ffffffad;
    }
    .giftBalloon .modal.display_flex{
        display: flex;
    }
    .giftBalloon .modal .modal_content{
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        border: 3px solid #3d80e4;
        background: #fff;
    }
    .giftBalloon .modal .modal_content .modal_head{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-right: 3px;
        margin-top: 3px;
    }
    .giftBalloon .modal .modal_content .modal_head img{
        width: 15px;
        height: 15px;
        cursor: pointer;
    }
    .giftBalloon .modal .modal_content .modal_body{
        display: flex;
        align-items: center;
        flex-flow: column;
        padding: 15px 20px 15px 20px;
        
    }
    .giftBalloon .modal .modal_content .modal_body .modal_body_sub1{
        display: flex;
        position: relative;
        border-bottom: 1px solid #e7e7e7;
        padding-bottom: 30px;
        align-items: center;
        width: 100%;
    }
    .giftBalloon .modal .modal_content .modal_body .modal_body_sub2{
        display: flex;
        position: relative;
        padding-bottom: 20px;
        align-items: center;
        width: 100%;
        padding-top: 20px;
    }
    .giftBalloon .modal .modal_content .modal_body .modal_body_sub1 label{
        width: 113px;
        height: 101px;
        background: url('/public/star_gift_img.png') no-repeat 0 0;
        margin-right: 15px;
    }
    .giftBalloon .modal .modal_content .modal_body .modal_body_sub2 label{
        width: 119px;
        height: 61px;
        background: url('/public/star_gift_img.png') no-repeat 0 -101px;
        margin-right: 15px;
    }
    .giftBalloon .modal .modal_content .modal_body .modal_body_sub1 dt{
        font-size: 15px;
        color: #404256;
        font-weight: bold;
        letter-spacing: -0.1em;
        margin-bottom: 5px;
    }
    .giftBalloon .modal .modal_content .modal_body .modal_body_sub2 dt{
        font-size: 15px;
        color: #404256;
        font-weight: bold;
        letter-spacing: -0.1em;
        margin-bottom: 5px;
    }
    .giftBalloon .modal .modal_content .modal_body .modal_body_sub1 p{
        margin: 0px 0px 11px 0px;
        padding-right: 12px;
        letter-spacing: -1px;
        display: flex;
        align-items: center;
        background: url("/public/bul_dot_sg.gif") no-repeat 0 7px;
        padding-left: 5px;
    }

    .giftBalloon .modal .modal_content .modal_body .modal_body_sub2 p{
        margin: 0;
        letter-spacing: -1px;
    }
    .giftBalloon .modal .modal_content .modal_body .modal_body_sub1 a{
        position: absolute;
        right: 4px;
        bottom: 8px;
        color: #4694ff;
    }
    .giftBalloon .modal .modal_content .modal_body .modal_body_sub2 a{
        position: absolute;
        right: 4px;
        bottom: 8px;
        color: #4694ff;
    }
</style>
