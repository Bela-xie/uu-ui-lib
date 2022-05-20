<demo>
支持四种类型：info（默认）、success、warn、error
</demo>
<template>
  <Button @click="openText">show text</Button>
  <Button @click="openSuccessText">show success text</Button>
  <Button @click="openWarnText">show warn text</Button>
  <Button @click="openErrorText">show error text</Button>
</template>
    
<script lang="ts">
import Button from "../../lib/Button/Button.vue";
import { openMessage } from "../../lib/Message/openMessage";
export default {
  components: { Button },
  methods: {
    openText() {
      openMessage("This is a message.");
    },
    openSuccessText() {
      openMessage({
        message: "This is a message.",
        type: "success",
      });
    },
    openWarnText() {
      openMessage({
        message: "This is a message.",
        type: "warn",
      });
    },
    openErrorText() {
      openMessage({
        message: "This is a message.",
        type: "error",
      });
    },
  },
};
</script>

<style lang="scss">
</style>