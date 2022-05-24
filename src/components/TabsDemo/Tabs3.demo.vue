<demo>
动态增加标签页
</demo>
<template>
  <Tabs v-model:selected="currentTab" :editable="true" @edit="editHandle">
    <Tab v-for="item in tabList" :idName="item.idName" :key="item.idName" :title="item.title">{{ item.content }}</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../../lib/Tabs.vue';
import Tab from '../../lib/Tab.vue';
import { reactive, ref } from "vue";
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const tabList = reactive([
      { idName: 1, title: '导航1', content: "内容1" },
      { idName: 2, title: "导航2", content: "内容2" },
      { idName: 3, title: "导航3", content: "内容3" },
    ])
    let tabIndex = 3
    const currentTab = ref(1);
    const editHandle = (action: 'add' | 'delete', targetIdName?) => {
      if (action === 'add') {
        const newTab = {
          idName: ++tabIndex,
          title: '新标签' + tabIndex,
          content: '新标签内容' + tabIndex
        }
        tabList.push(newTab)
        currentTab.value = newTab.idName
      } else if (action === 'delete') {
        let index = -1
        tabList.forEach((item, i) => {
          if (item.idName === targetIdName) { index = i }
        })
        if (currentTab.value === targetIdName) {
          const nextTab = tabList[index + 1] || tabList[index - 1]
          if (nextTab) {
            currentTab.value = nextTab.idName
          }
        }
        index !== -1 && tabList.splice(index, 1)
      }
    }
    return {
      currentTab,
      tabList,
      editHandle
    };
  },
};
</script>