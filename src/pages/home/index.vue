<script lang="ts" setup>
import contentTempVue from "./components/content.temp.vue";
import footerBlockVue from "../../components/footerBlock.vue";
import { reactive } from "vue";
interface content {
  title: string;
  description: string;
  revert: boolean;
}
const contents = reactive<Array<content>>([
  {
    title: "什麼是 NewMD",
    description:
      "NewMD 是一個專為明道學生設計的雲端平台，運用網路技術抓取明道各班之課表，以解決課表載入過慢以及其導致之延伸問題，也達到幫明道伺服器分流之目的",
    revert: false,
  },
  {
    title: "為何要用 NewMD",
    description:
      "明道的伺服器響應速度一直都為人詬病，響應時間過長導致了非常多的問題，還記得上次為了趕上線上上課而開啟課表想要點擊連結，而不斷轉圈圈的loading 圖案讓你瞬間想摔電腦的時候嗎？這時候就需要NewMD來幫助解決這個問題，我們不僅會運用爬蟲技術獲取課表，更會將課表暫存在我方伺服器，已提昇下次查看的時間，讓響應時間更快。",
    revert: true,
  },
]);
</script>

<template>
  <div class="intro">
    <h1>New MD</h1>
    <h2>拯救明道學生的課表系統</h2>
    <div class="logins">
      <router-link to="/login">首次登入</router-link>
      <router-link to="/login">登入</router-link>
    </div>
  </div>
  <content-temp-vue v-for="i in contents" :revert="i.revert">
    <template #title> {{ i.title }} </template>
    <template #description> {{ i.description }} </template>
  </content-temp-vue>
  <footer-block-vue></footer-block-vue>
</template>

<style lang="scss" scoped>
@import "@/scss/global.scss";
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
    a {
      text-decoration: none;
      margin: 0 10px;
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
