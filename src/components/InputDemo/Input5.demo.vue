<demo>
支持文本域 textarea（也可直接传入 rows、cols）
</demo>
<template>
  <uu-input
    placeholder="Please input"
    v-model="input"
    type="textarea"
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