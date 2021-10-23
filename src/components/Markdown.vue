<template>
  <article class="markdown-body" v-html="md"></article>
</template>


<script>
import { ref } from "vue";
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const md = ref(null);
    const { path } = props;
    import(path).then((result) => {
      md.value = result.default;
    });
    return {
      md,
    };
  },
};
</script>