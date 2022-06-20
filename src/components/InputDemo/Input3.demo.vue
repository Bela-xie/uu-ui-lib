<demo>
支持三种 size（small、middle、large）
</demo>
<template>
  <uu-input placeholder="Please input" v-model="input" size="small"></uu-input><br />
  <uu-input placeholder="Please input" v-model="input" size="middle"></uu-input><br />
  <uu-input placeholder="Please input" v-model="input" size="large"></uu-input>
</template>

<script lang="ts">
import { UuInput } from "uu-ui-vue3";
export default {
  components: { UuInput },
  data: () => {
    return { input: "" };
  },
};
</script>

<style lang="scss">
</style>