<demo>
支持 center：让文字居中
</demo>
<template>
  <Button @click="openText">show text</Button>
</template>
    
<script lang="ts">
import Button from "../../lib/Button.vue";
import { openMessage } from "../../lib/Message/openMessage";
export default {
  components: { Button },
  methods: {
    openText() {
      openMessage({
        message: "This is a message.",
        center: true,
      });
    },
  },
};
</script>

<style lang="scss">
</style>