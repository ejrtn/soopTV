<template>
    <div class="giftBalloon_back">
        <div class="giftBalloon">
            <h2>
                <a href="javascript:;" class="on">별풍선 선물하기</a>
                <span>별풍선이란?</span>
            </h2>
            <div class="tab1">
                <div class="star_list">
                    <p>시그니처 풍선은 스트리머만의 특별한 풍선입니다.</p>
                    <div class="signature_img">
                        <img src="/signature1.png">
                        <img src="/signature2.png">
                        <img src="/signature3.png">
                    </div>
                    <div class="signature_btn">
                        <button type="button" class="prev"></button>
                        <button type="button" class="next off"></button>
                    </div>
                </div>
                <div class="send_area">
                    <div class="gift_at">
                        <span><strong>최군형(ch1716)</strong> 님께 선물</span>
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
                            <span class="userBalloonCount"><strong>0</strong>개</span>
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
        </div>
    </div>
</template>

<script setup>
    import axios from "axios";
    import { onMounted, defineProps } from "vue";
    const props = defineProps({
        user_id:String,
    })
    onMounted(()=>{
        axios.get("/api/gift_balloon/"+props.user_id+"/")
        .then((req)=>{
            const data = req.data.result[0]
            document.querySelector(".gift_at strong").textContent = data['user_name']+"("+data['user_id']+")"
            document.querySelector(".userBalloonCount strong").textContent = data['add_star_balloon']
            if(parseInt(data['add_star_balloon']) < document.querySelector(".put_star_balloon input").value){
                document.querySelector(".txt_error").classList.add("display_flex")
            }else{
                document.querySelector(".txt_error").classList.remove("display_flex")
            }
            document.querySelector(".put_star_balloon input").addEventListener("input",(e)=>{
                if(parseInt(data['add_star_balloon']) < e.target.value){
                    document.querySelector(".txt_error").classList.add("display_flex")
                }else{
                    document.querySelector(".txt_error").classList.remove("display_flex")
                }
            })
        })
    })
</script>

<style scoped>
    .giftBalloon_back{
        width: 100%;
        height: 100%;
        background: #fff;
        color: #414141;
    }
    .giftBalloon{
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        width: 500px;
        height: 520px;
        font-size: 11px;
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
        padding: 0px 20px;
        box-sizing: border-box;
        margin-top: 20px;
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
    .giftBalloon .signature_img img{
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
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0 10px;
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
</style>
