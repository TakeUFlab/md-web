<script lang="ts" setup></script>
<template>
  <div class="auth">
    <div class="login">
      <h2>Login 登入</h2>
      <input type="text" placeholder="帳號(身分證字號)" />
      <input type="password" placeholder="密碼" />
      <div>
        <input type="checkbox" id="remember" />
        <label for="remember">自動登入</label>
      </div>
      <button>登入</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auth {
  width: 100vw;
  .login {
    margin: 30px auto;
    width: 500px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #141414;
    border-radius: 10px;
    color: #fff;
    h2 {
      margin: 20px 10px;
    }

    input {
      margin: 0 10px 10px 10px;
      background-color: #232323;
      border: 1px solid #232323;
      border-radius: 3px;
      padding: 3px 5px;
      font-size: 1rem;
      outline: none;
      color: #ececec;
      transition: 0.2s;
      letter-spacing: 2px;
      &:focus {
        border: 1px solid #0066ff;
      }
    }

    label {
      font-weight: 100;
    }

    button {
      margin: 10px 0;
      padding: 3px 30px;
      border: none;
      background-color: #0066ff;
      border-radius: 5px;
      color: #fff;
      outline: none;
      font-size: 1rem;
      font-weight: 300;
      cursor: pointer;
    }
  }
}
</style>
