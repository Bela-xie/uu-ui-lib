<demo>
示例二
</demo>
<template>
  <uu-container>
    <uu-header>header</uu-header>
    <uu-main>main</uu-main>
  </uu-container>
</template>

<script lang="ts">
import UuContainer from "../../lib/container/Container.vue";
import UuAside from "../../lib/container/Aside.vue";
import UuMain from "../../lib/container/Main.vue";
import UuHeader from "../../lib/container/header.vue";
import UuFooter from "../../lib/container/footer.vue";
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