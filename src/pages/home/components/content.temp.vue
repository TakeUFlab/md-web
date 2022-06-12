<template>
  <div class="content">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="description">
      <slot name="description"></slot>
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
