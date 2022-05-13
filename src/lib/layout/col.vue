<template>
  <div :class="colClass" :style="colStyle">
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  name: "UuCol",
  props: {
    span: {
      type: [String, Number],
      default: 12,
    },
    offset: {
      type: [String, Number],
      default: 0,
    },
    xsOffset: {
      type: [String, Number],
      default: 0,
    },
    smOffset: {
      type: [String, Number],
      default: 0,
    },
    mdOffset: {
      type: [String, Number],
      default: 0,
    },
    lgOffset: {
      type: [String, Number],
      default: 0,
    },
    xlOffset: {
      type: [String, Number],
      default: 0,
    },
    xs: {
      type: [String, Number],
    },
    sm: {
      type: [String, Number],
    },
    md: {
      type: [String, Number],
    },
    lg: {
      type: [String, Number],
    },
    xl: {
      type: [String, Number],
    },
  },
  inject: ["gutter"],
  computed: {
    colStyle() {
      const paddingValue = this.gutter.value / 2;
      return paddingValue === 0
        ? {}
        : {
            paddingLeft: paddingValue + "px",
            paddingRight: paddingValue + "px",
          };
    },
    colClass() {
      const spanString = "uu-col-" + this.span;
      const offsetString = this.offset ? "uu-col-offset-" + this.offset : "";
      const xsString = this.xs ? "uu-col-xs-" + this.xs : "";
      const smString = this.sm ? "uu-col-sm-" + this.sm : "";
      const mdString = this.xs ? "uu-col-md-" + this.md : "";
      const lgString = this.xs ? "uu-col-lg-" + this.lg : "";
      const xlString = this.xs ? "uu-col-xl-" + this.xl : "";
      const xsOffsetString = this.xsOffset
        ? "uu-col-xs-offset-" + this.xsOffset
        : "";
      const smOffsetString = this.smOffset
        ? "uu-col-sm-offset-" + this.smOffset
        : "";
      const mdOffsetString = this.mdOffset
        ? "uu-col-md-offset-" + this.mdOffset
        : "";
      const lgOffsetString = this.lgOffset
        ? "uu-col-lg-offset-" + this.lgOffset
        : "";
      const xlOffsetString = this.xlOffset
        ? "uu-col-xl-offset-" + this.xlOffset
        : "";
      return [
        "uu-col",
        spanString,
        offsetString,
        xsString,
        smString,
        mdString,
        lgString,
        xlString,
        xsOffsetString,
        smOffsetString,
        mdOffsetString,
        lgOffsetString,
        xlOffsetString,
      ];
    },
  },
};
</script>
<style lang="scss">
@use "sass:math";
@mixin colSize($classPre) {
  @for $i from 1 through 12 {
    $ratio: math.div($i, 12) * 100 * 1%;
    .#{$classPre}-#{$i} {
      flex: 0 0 $ratio;
      max-width: $ratio;
    }
    .#{$classPre}-offset-#{$i} {
      margin-left: $ratio;
    }
  }
}

@include colSize(uu-col);

@media screen and (max-width: 576px) {
  @include colSize(uu-col-xs);
}

@media screen and (min-width: 576px) {
  @include colSize(uu-col-sm);
}

@media screen and (min-width: 768px) {
  @include colSize(uu-col-md);
}

@media screen and (min-width: 992px) {
  @include colSize(uu-col-lg);
}

@media screen and (min-width: 1200px) {
  @include colSize(uu-col-xl);
}
</style>