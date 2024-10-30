<template>
    <div class="soopJoin_main">
        <img src="soop_logo.svg" class="logo">
        <p class="info">회원가입 후 다양한 서비스를 즐겨보세요.</p>
        <button class="join_btn" id="join">회원가입</button>
        <div class="easy_join"><span>간편회원가입</span></div>
        <button class="join_btn" id="twitch">트위치로 회원가입</button>
        <button class="join_btn" id="naver">네이버로 회원가입</button>
        <button class="join_btn" id="kakao">카카오로 회원가입</button>
        <button class="join_btn" id="apple">애플로 회원가입</button>
    </div>
</template>

<script setup>
    import { onMounted } from "vue";
    onMounted(()=>{
        document.querySelector(".logo").addEventListener("click",()=>{location.href="/"})
        document.querySelector("#join").addEventListener("click",()=>{location.href="/joinInsert"})
    })
</script>

<style scope>
    .soopJoin_main{
        width: 340px;
        height: 100vh;
        margin: 0 auto;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
    .soopJoin_main .logo{
        width: 145px;
        cursor: pointer;
    }
    .soopJoin_main .info{
        color: #7398ff;
        margin-bottom: 40px;
        letter-spacing:-2px;
        font-size: 17px;
    }
    .soopJoin_main .join_btn{
        display: flex;
        align-items: center;
        width: 100%;
        height: 50px;
        justify-content: center;
        color: #fff;
        outline: none;
        border: none;
        border-radius: 5px;
        letter-spacing:0px;
        cursor: pointer;
    }
    .soopJoin_main div{
        width: 100%;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
    }
    .soopJoin_main .easy_join span{
        font-size:13px;
        background-color: #121213;
        color: #999;
        flex:0 0 auto;
        padding: 0px 7px;
        letter-spacing:-2px;
    }
    .soopJoin_main div::before{
        content: "";
        display: block;
        background-color: #bbb;
        width: 100%;
        height: 1px;
    }
    .soopJoin_main div::after{
        content: "";
        display: block;
        background-color: #bbb;
        width: 100%;
        height: 1px;
    }
    .soopJoin_main #join{
        background: #7398ff;
        font-weight: bold;
        margin-bottom: 30px;
        font-size: 17px;
        letter-spacing:-1px;
    }
    .soopJoin_main #twitch{
        background: #9146ff;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        position: relative;
    }
    .soopJoin_main #twitch::before{
        content: "";
        background: url("/public/twitch.svg") 50% 50% no-repeat;
        width: 20px;
        height: 22px;
        position: absolute;
        left: 14px;
    }
    .soopJoin_main #naver{
        background: #1ec800;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        position: relative;
    }
    .soopJoin_main #naver::before{
        content: "";
        background: url("/public/naver.svg") 50% 50% no-repeat;;
        width: 20px;
        height: 22px;
        position: absolute;
        left: 14px;
    }
    .soopJoin_main #kakao{
        background: #fee500;
        color: #000;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        position: relative;
    }
    .soopJoin_main #kakao::before{
        content: "";
        background: url("/public/kakao.svg") 50% 50% no-repeat;;
        width: 20px;
        height: 22px;
        position: absolute;
        left: 14px;
    }
    .soopJoin_main #apple{
        background: #fff;
        color: #000;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        position: relative;
    }
    .soopJoin_main #apple::before{
        content: "";
        background: url("/public/apple.svg") 50% 50% no-repeat;;
        width: 20px;
        height: 22px;
        position: absolute;
        left: 14px;
    }
</style>