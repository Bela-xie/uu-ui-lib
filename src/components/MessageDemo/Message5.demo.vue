<demo>
支持 center：让文字居中
</demo>
<template>
  <uu-button @click="openText">show text</uu-button>
</template>
    
<script lang="ts">
import { UuButton, openUuMessage } from "uu-ui-vue3";
export default {
  components: { UuButton },
  methods: {
    openText() {
      openUuMessage({
        message: "This is a message.",
        center: true,
      });
    },
  },
};
</script>

<style lang="scss">
</style>