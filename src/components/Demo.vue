<template>
  <div class="demo">
    <h2>{{ component.__sourceTitle }}</h2>
    <div class="demo-component">
      <Component :is="component" />
    </div>
    <div class="demo-actions">
      <Button @click="hideCode" v-if="codeVisible">隐藏代码</Button>
      <Button @click="showCode" v-else>显示代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template>

<script lang="ts">
import "prismjs";
import "prismjs/themes/prism-okaidia.css";
import { computed, ref } from "vue";
import { Button } from "uu-ui-vue3";
import "uu-ui-vue3/dist/lib/uu.css";
const Prism = (window as any).Prism;
export default {
  components: {
    Button,
  },
  props: {
    component: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const codeVisible = ref(false);
    const showCode = () => {
      codeVisible.value = true;
    };
    const hideCode = () => {
      codeVisible.value = false;
    };
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    return { Prism, codeVisible, showCode, hideCode, html };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/vars.scss";
.demo {
  border: 1px solid $grayColor;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $grayColor;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $grayColor;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $grayColor;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>