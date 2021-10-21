<template>
  <div>
    <h2>tabs 示例一</h2>
    <Tabs v-model:selected="selected">
      <Tab title="标题一">tab1</Tab>
      <Tab title="标题二3343">tab2</Tab>
      <Tab title="标题三aaaaaaa">tab3</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { ref } from "vue";
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const selected = ref("标题一");
    return { selected };
  },
};
</script>