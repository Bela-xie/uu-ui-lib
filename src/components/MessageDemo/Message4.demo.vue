<demo>
支持 duration，表示消息框在 duration 秒后自动关闭，默认值为 3，如果该值设为 0 ，表示不会自动关闭。
</demo>
<template>
  <Button @click="defaultDuration">默认 duration</Button>
  <Button @click="setDuration1">duration 设为 1</Button>
  <Button @click="setDuration0">duration 设为 0</Button>
</template>
    
<script lang="ts">
import { h } from "@vue/runtime-core";
import Button from "../../lib/Button/Button.vue";
import { openMessage } from "../../lib/Message/openMessage";
export default {
  components: { Button },
  methods: {
    defaultDuration() {
      openMessage("This is a message.");
    },
    setDuration1() {
      openMessage({
        message: "This is a message.",
        duration: 1,
      });
    },
    setDuration0() {
      openMessage({
        message: "This is a message.",
        duration: 0,
        showClose: true,
      });
    },
  },
};
</script>

<style lang="scss">
</style>