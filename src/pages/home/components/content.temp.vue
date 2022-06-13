<template>
  <div class="content">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="description">
      <p>
        <slot name="description"></slot>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../scss/global.scss";
.content {
  width: 100vw;
  height: auto;
  min-height: 500px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .title {
    width: 50%;
    font-size: 2rem;
    font-weight: 700;
    height: inherit;
    color: #fff;
    background-color: #06f;
    display: flex;
    align-items: center;
    padding: 0 10% 0 0;
    justify-content: flex-end;
  }
  .description {
    width: 50%;
    height: inherit;
    background-color: #eee;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 20px;
    p {
      max-width: 500px;
      line-height: 30px;
      font-size: 1.1rem;
      font-weight: 300;
      color: #646464;
    }
  }
  @include pad {
    flex-direction: column;
    .title,
    .description {
      width: 100%;
    }
  }
}
</style>
