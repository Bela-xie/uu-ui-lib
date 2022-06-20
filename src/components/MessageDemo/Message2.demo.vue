<demo>
支持四种类型：info（默认）、success、warn、error
</demo>
<template>
  <uu-button @click="openText">show text</uu-button>
  <uu-button @click="openSuccessText">show success text</uu-button>
  <uu-button @click="openWarnText">show warn text</uu-button>
  <uu-button @click="openErrorText">show error text</uu-button>
</template>
    
<script lang="ts">
import { UuButton, openUuMessage } from "uu-ui-vue3";
export default {
  components: { UuButton },
  methods: {
    openText() {
      openUuMessage("This is a message.");
    },
    openSuccessText() {
      openUuMessage({
        message: "This is a message.",
        type: "success",
      });
    },
    openWarnText() {
      openUuMessage({
        message: "This is a message.",
        type: "warn",
      });
    },
    openErrorText() {
      openUuMessage({
        message: "This is a message.",
        type: "error",
      });
    },
  },
};
</script>

<style lang="scss">
</style>