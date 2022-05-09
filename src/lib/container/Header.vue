<template>
  <header class="uu-header" :style="{ height: height + 'px' }"><slot /></header>
</template>

<script lang="ts">
export default {
  name: "UuHeader",
  props: {
    height: {
      type: String,
      default: "50",
    },
  },
};
</script>

<style lang="scss">
.uu-header {
  width: 100%;
  height: 50px;
  background: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>