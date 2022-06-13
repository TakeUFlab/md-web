<script lang="ts" setup>
import contentTempVue from "./components/content.temp.vue";
import { reactive } from "vue";
interface content {
  title: string;
  description: string;
}
const contents = reactive<Array<content>>([
  {
    title: "什麼是 NewMD",
    description:
      "NewMD 是一個專為明道學生設計的雲端平台，運用網路技術抓取明道各班之課表，已解決課表載入過慢以及其導致之延伸問題，也達到幫明道伺服器分流之目的",
  },
]);
</script>

<template>
  <div class="intro">
    <h1>New MD</h1>
    <h2>拯救明道學生的課表系統</h2>
    <div class="logins">
      <button>首次登入</button>
      <button>登入</button>
    </div>
  </div>
  <content-temp-vue v-for="i in contents">
    <template #title> {{ i.title }} </template>
    <template #description> {{ i.description }} </template>
  </content-temp-vue>
</template>

<style lang="scss" scoped>
@import "../../scss/global.scss";
.intro {
  width: 100%;
  height: 800px;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url("/src/assets/bg1.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  @include phone {
    padding: 10px;
  }
  h1 {
    font-size: 3rem;
    color: #003cff;
  }
  h2 {
    font-size: 2.5rem;
    color: #fff;
    text-align: center;
  }
  .logins {
    margin-top: 20px;
    button {
      margin: 0 10px;
      cursor: pointer;
      background-color: #003cff;
      border: 1px solid #003cff;
      color: #fff;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 1.2rem;
      font-weight: 300;
      transition: all 0.2s ease-in-out;
      &:hover {
        background-color: transparent;
        color: #003cff;
      }
    }
  }
}
</style>
