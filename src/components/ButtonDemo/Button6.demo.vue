<demo>
支持按钮组
</demo>
<template>
  <div>
    <uu-button-group>
      <uu-button>上一页</uu-button>
      <uu-button>更多</uu-button>
      <uu-button>下一页</uu-button>
    </uu-button-group>
  </div>
</template>

<script lang="ts">
import UuButtonGroup from "../../lib/Button/ButtonGroup.vue";
import UuButton from "../../lib/Button/Button.vue";
export default {
  components: {
    UuButton,
    UuButtonGroup
  },
};
</script>