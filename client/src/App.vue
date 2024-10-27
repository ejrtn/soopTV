<template>
    <router-view/>
</template>

<script setup>
import { provide, ref } from 'vue';
provide('imgPath', ref('http://localhost:3000/static/profile/'));
</script>

<style>
html,body,#app{
    height: 100%;
    background: #0c0d0e;
    color: #e2e4e9;
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
