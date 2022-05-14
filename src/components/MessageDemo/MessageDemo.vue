<template>
  <div>
    <h1>Message 组件示例</h1>
    <Demo :component="Message1Demo" />
    <Demo :component="Message2Demo" />
    <Demo :component="Message3Demo" />
    <Demo :component="Message4Demo" />
    <Demo :component="Message5Demo" />
    <Demo :component="Message6Demo" />
  </div>
</template>

<script lang="ts">
import Message1Demo from "./Message1.demo.vue";
import Message2Demo from "./Message2.demo.vue";
import Message3Demo from "./Message3.demo.vue";
import Message4Demo from "./Message4.demo.vue";
import Message5Demo from "./Message5.demo.vue";
import Message6Demo from "./Message6.demo.vue";
import Demo from "../Demo.vue";
export default {
  components: { Demo },
  setup() {
    return {
      Message1Demo,
      Message2Demo,
      Message3Demo,
      Message4Demo,
      Message5Demo,
      Message6Demo,
    };
  },
};
</script>