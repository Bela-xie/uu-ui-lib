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
import { UuButton, UuButtonGroup } from 'uu-ui-vue3'
export default {
  components: {
    UuButton,
    UuButtonGroup
  },
};
</script>