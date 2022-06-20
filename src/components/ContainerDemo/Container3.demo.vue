<demo>
示例三
</demo>
<template>
  <uu-container>
    <uu-header>header</uu-header>
    <uu-container>
      <uu-aside>aside</uu-aside>
      <uu-container>
        <uu-main>main</uu-main>
        <uu-footer>footer</uu-footer>
      </uu-container>
    </uu-container>
  </uu-container>
</template>

<script lang="ts">
import { UuContainer, UuAside, UuMain, UuHeader, UuFooter } from "uu-ui-vue3";
export default {
  components: {
    UuContainer,
    UuAside,
    UuMain,
    UuHeader,
    UuFooter,
  },
};
</script>