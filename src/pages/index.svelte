<script lang="ts">
  import { Link } from 'svelte-routing';
  import Teaching from '@/assets/Teaching.svg';
</script>

<main>
  <div class="left">
    <h1>NewMD</h1>
    <h2>拯救明道人的雲端課表平台</h2>
    <div class="buttons">
      <div class="btn">
        <a href="/login">首次登入</a>
      </div>
      <div class="btn">
        <a href="/login">登入</a>
      </div>
    </div>
  </div>
  <div class="right">
    <img src={Teaching} alt="illsu" />
  </div>
</main>

<style lang="scss">
  @import '../scss/global.scss';
  main {
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    .left {
      h1 {
        color: #0066ff;
        font-size: 3.75rem;
      }
      h2 {
        color: #232323;
        font-size: 2rem;
      }
      @include pad {
        h1 {
          font-size: 2.75rem;
        }
        h2 {
          font-size: 1.5rem;
        }
      }

      .buttons {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-top: 20px;
        .btn {
          border: 1px solid #0066ff;
          background-color: #0066ff;
          padding: 5px 15px;
          border-radius: 5px;
          margin-right: 20px;
          transition: 0.3s ease-in;
          a {
            color: #fff;
            text-decoration: none;
          }
          &:hover {
            background-color: transparent;
            a {
              color: #0066ff;
            }
          }
        }
      }
    }
    .right {
      img {
        width: 700px;
        max-width: 90vw;
        height: auto;
      }
    }
  }
</style>
