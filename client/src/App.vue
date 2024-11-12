<template>
    <router-view/>
</template>

<script setup>
import { provide, ref } from 'vue';
provide('imgPath', ref('http://localhost:3000/static/'));
</script>

<style>
html{
    font-family: "Pretendard",-apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo","Malgun Gothic","맑은 고딕",helvetica,sans-serif
}
html,body,#app{
    background: #0c0d0e;
    color: #e2e4e9;
    font-style: normal;
}
body{
    margin: 0;
    padding: 0;
}
body::-webkit-scrollbar {
    background-color: transparent;
    width: 6px;
    height: 6px;
    border-radius: 6px;
}
body::-webkit-scrollbar-thumb {
    background: #454343;
    border-radius: 6px;
}
</style>
