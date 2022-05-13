<demo>
列偏移--offset
</demo>
<template>
  <uu-row>
    <uu-col :span="8"><div class="colContent lightBlue"></div></uu-col>
    <uu-col :span="2" :offset="2"
      ><div class="colContent grayColor"></div
    ></uu-col>
  </uu-row>
  <uu-row>
    <uu-col :span="3" :offset="3"
      ><div class="colContent lightBlue"></div
    ></uu-col>
    <uu-col :span="3" :offset="3"
      ><div class="colContent grayColor"></div
    ></uu-col>
  </uu-row>
  <uu-row>
    <uu-col :offset="4" :span="4"
      ><div class="colContent lightBlue"></div
    ></uu-col>
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