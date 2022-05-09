<demo>
常规使用
</demo>
<template>
  <Tabs v-model:selected="currentTab">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
    <Tab title="导航3">内容3</Tab>
  </Tabs>
</template>

<script lang="ts">
import { Tabs, Tab } from "uu-ui-vue3";
import { ref } from "vue";
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const currentTab = ref("导航2");
    return {
      currentTab,
    };
  },
};
</script>