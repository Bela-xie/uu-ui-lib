<template>
  <aside class="uu-aside" :style="{ width: width + 'px' }"><slot /></aside>
</template>

<script lang="ts">
export default {
  name: "UuAside",
  props: {
    width: {
      type: [String, Number],
      default: 50,
    },
  },
};
</script>

<style lang="scss">
.uu-aside {
  background: #b0ddec;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>