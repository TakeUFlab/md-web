<script lang="ts" setup>
import { onMounted, ref } from "vue";

const props = defineProps<{
  revert: boolean;
}>();
const revertCss = ref("row");
onMounted(() => {
  if (props.revert) {
    revertCss.value = "row-reverse";
  }
});
</script>

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
  flex-direction: v-bind(revertCss);
  flex-wrap: wrap;

  .title {
    width: 50%;
    font-size: 2rem;
    font-weight: 700;
    height: inherit;
    color: #dddddd;
    background-color: #3a89ff;
    display: flex;
    align-items: center;
    padding: 0 10%;
    flex-direction: v-bind(revertCss);
    justify-content: flex-end;
  }
  .description {
    width: 50%;
    height: inherit;
    background-color: #232323;
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
      color: #aaa;
    }
  }
  @include pad {
    flex-direction: column;
    min-height: auto;
    .title,
    .description {
      width: 100%;
    }
    .title {
      min-height: 50vw;
      padding: 0;
      justify-content: center;
    }
    .description {
      min-height: 100vw;
    }
  }
}
</style>
