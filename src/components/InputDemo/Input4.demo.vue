<demo>
支持密码框 type 及切换 showPassword
</demo>
<template>
  <uu-input
    placeholder="Please input"
    v-model="input"
    type="password"
    showPassword
  ></uu-input>
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