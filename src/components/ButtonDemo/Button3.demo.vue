<demo>
支持 level：primary、success、info、warn、danger
</demo>
<template>
  <div>
    <div>
      <uu-button>default</uu-button>
      <uu-button level="primary">primary</uu-button>
      <uu-button level="success">success</uu-button>
      <uu-button level="info">info</uu-button>
      <uu-button level="warn">warn</uu-button>
      <uu-button level="danger">danger</uu-button>
    </div><br />
    <div>
      <uu-button theme="link">default</uu-button>
      <uu-button theme="link" level="primary">primary</uu-button>
      <uu-button theme="link" level="success">success</uu-button>
      <uu-button theme="link" level="info">info</uu-button>
      <uu-button theme="link" level="warn">warn</uu-button>
      <uu-button theme="link" level="danger">danger</uu-button>
    </div><br />
    <div>
      <uu-button theme="text">default</uu-button>
      <uu-button theme="text" level="primary">primary</uu-button>
      <uu-button theme="text" level="success">success</uu-button>
      <uu-button theme="text" level="info">info</uu-button>
      <uu-button theme="text" level="warn">warn</uu-button>
      <uu-button theme="text" level="danger">danger</uu-button>
    </div>
  </div>
</template>

<script lang="ts">
import UuButton from "../../lib/Button/Button.vue";
export default {
  components: {
    UuButton,
  },
};
</script>