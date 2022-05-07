<template>
  <div>
    <h1>Tabs 组件示例</h1>
    <Demo :component="Tabs1Demo" />
    <Demo :component="Tabs2Demo" />
  </div>
</template>

<script lang="ts">
import Tabs1Demo from "./Tabs1.demo.vue";
import Tabs2Demo from "./Tabs2.demo.vue";
import Demo from "./Demo.vue";
export default {
  components: { Demo },
  setup() {
    return { Tabs1Demo, Tabs2Demo };
  },
};
</script>