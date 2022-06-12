<script lang="ts" setup>
import contentTempVue from "./components/content.temp.vue";
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
  <content-temp-vue>
    <template #title> What is NewMD </template>
    <template #description>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ut, nam
      corporis exercitationem libero, at cumque totam nostrum repudiandae autem
      nobis necessitatibus? Numquam asperiores esse facilis veniam a iusto
      repudiandae?
    </template>
  </content-temp-vue>
</template>

<style lang="scss" scoped>
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
