<demo>
响应式布局，支持五种 offset：xsOffset、smOffset、mdOffset、lgOffset、xlOffset
</demo>
<template>
  <uu-row :gutter="10">
    <uu-col :xs="3" :sm="3" :md="2" :lg="5" :xl="1" :xlOffset="2" :xsOffset="1"
      ><div class="colContent lightBlue"
    /></uu-col>
    <uu-col :xs="2" :sm="3" :md="4" :lg="1" :xl="4"
      ><div class="colContent grayColor"
    /></uu-col>
    <uu-col :xs="2" :sm="3" :md="4" :lg="1" :xl="4"
      ><div class="colContent lightBlue"
    /></uu-col>
    <uu-col :xs="4" :sm="3" :md="2" :lg="5" :xl="1"
      ><div class="colContent grayColor"
    /></uu-col>
  </uu-row>
</template>
<script lang="ts">
import UuCol from "../../lib/layout/col.vue";
import UuRow from "../../lib/layout/row.vue";
export default {
  components: { UuCol, UuRow },
};
</script>

<style lang="scss">
.uu-row {
  margin-bottom: 10px;
}

.uu-row:last-child {
  margin-bottom: 0px;
}

.colContent {
  min-height: 36px;
}

.lightBlue {
  background-color: rgba(173, 216, 230, 1);
}

.grayColor {
  background-color: #d9d9d9;
}
</style>