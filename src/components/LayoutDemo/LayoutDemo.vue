<template>
  <div>
    <h1>Layout 组件示例</h1>
    <Demo :component="Layout1Demo" />
    <Demo :component="Layout2Demo" />
    <Demo :component="Layout3Demo" />
    <Demo :component="Layout4Demo" />
    <Demo :component="Layout5Demo" />
    <Demo :component="Layout6Demo" />
    <Demo :component="Layout7Demo" />
  </div>
</template>

<script lang= 'ts'>
import Demo from "../Demo.vue";
import Layout1Demo from "./Layout1.demo.vue";
import Layout2Demo from "./Layout2.demo.vue";
import Layout3Demo from "./Layout3.demo.vue";
import Layout4Demo from "./Layout4.demo.vue";
import Layout5Demo from "./Layout5.demo.vue";
import Layout6Demo from "./Layout6.demo.vue";
import Layout7Demo from "./Layout7.demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Layout1Demo,
      Layout2Demo,
      Layout3Demo,
      Layout4Demo,
      Layout5Demo,
      Layout6Demo,
      Layout7Demo,
    };
  },
};
</script>