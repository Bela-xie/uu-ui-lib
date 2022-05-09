<demo>
支持 clearable 一键清空
</demo>
<template>
  <uu-input v-model="input" clearable placeholder="Please input"></uu-input>
</template>

<script lang="ts">
import UuInput from "../../lib/Input.vue";
export default {
  components: { UuInput },
  data: () => {
    return { input: "" };
  },
};
</script>

<style lang="scss">
</style>