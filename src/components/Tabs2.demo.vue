<demo>
支持 disabled
</demo>
<template>
  <Tabs v-model:selected="currentTab">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
    <Tab title="导航3" disabled>内容3</Tab>
  </Tabs>
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
    const currentTab = ref("导航1");
    return {
      currentTab,
    };
  },
};
</script>