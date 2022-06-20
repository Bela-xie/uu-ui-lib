<demo>
支持 size：normal（默认值）、large、small
</demo>
<template>
  <div>
    <div>
      <uu-button size="large">large</uu-button>
      <uu-button>normal</uu-button>
      <uu-button size="small">small</uu-button>
    </div>
    <div>
      <uu-button theme="link" size="large">large</uu-button>
      <uu-button theme="link">normal</uu-button>
      <uu-button size="small" theme="link">small</uu-button>
    </div>
    <div>
      <uu-button size="large" theme="text">large</uu-button>
      <uu-button theme="text">normal</uu-button>
      <uu-button size="small" theme="text">small</uu-button>
    </div>
  </div>
</template>

<script lang="ts">
import { UuButton } from 'uu-ui-vue3'
export default {
  components: {
    UuButton,
  },
};
</script>