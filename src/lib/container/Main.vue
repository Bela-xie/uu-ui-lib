<template>
  <main class="uu-main" :style="{ height: height + 'px' }"><slot /></main>
</template>

<script lang="ts">
export default {
  name: "UuMain",
  props: {
    height: {
      type: String,
      default: "100",
    },
  },
};
</script>

<style lang="scss">
.uu-main {
  width: 100%;
  height: 100px;
  background: #c4e6f1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>