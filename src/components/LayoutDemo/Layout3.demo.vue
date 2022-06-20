<demo>
混合布局
</demo>
<template>
  <uu-row>
    <uu-col :span="8">
      <div class="colContent lightBlue"></div>
    </uu-col>
    <uu-col :span="4">
      <div class="colContent grayColor"></div>
    </uu-col>
  </uu-row>
  <uu-row>
    <uu-col :span="4">
      <div class="colContent lightBlue"></div>
    </uu-col>
    <uu-col :span="4">
      <div class="colContent grayColor"></div>
    </uu-col>
    <uu-col :span="2">
      <div class="colContent lightBlue"></div>
    </uu-col>
    <uu-col :span="2">
      <div class="colContent grayColor"></div>
    </uu-col>
  </uu-row>
  <uu-row>
    <uu-col :span="2">
      <div class="colContent lightBlue"></div>
    </uu-col>
    <uu-col :span="8">
      <div class="colContent grayColor"></div>
    </uu-col>
    <uu-col :span="2">
      <div class="colContent lightBlue"></div>
    </uu-col>
  </uu-row>
</template>

<script lang="ts">
import { UuCol, UuRow } from "uu-ui-vue3";
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