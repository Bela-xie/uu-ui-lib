<template>
  <footer class="uu-footer" :style="{ height: height + 'px' }"><slot /></footer>
</template>

<script lang="ts">
export default {
  name: "UuFooter",
  props: {
    height: {
      type: String,
      default: "50",
    },
  },
};
</script>

<style lang="scss">
.uu-footer {
  background: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>