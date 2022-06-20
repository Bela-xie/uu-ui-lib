<template>
  <div class="uu-tabs">
    <div class="uu-tabs-nav" ref="containerEl">
      <div @click="() => clickSelect(tab)" class="uu-tabs-nav-item"
        :class="{ selected: (editable && tab.idName === selected) || tab.title === selected, disabled: tab.disabled }"
        v-for="tab in tabProps" :key="(editable && tab.idName) || tab.title" :ref="
          (el) => {
            if ((editable && tab.idName === selected) || tab.title === selected) selectedItem = el;
          }
        ">
        {{ tab.title }}
        <span class="deleteIconWrap" v-if="editable" @click.stop="() => editTab('delete', tab.idName)">
          <span class="deleteIcon"></span>
        </span>
      </div>
      <div class="uu-tabs-nav-addTab" v-if="editable" @click="() => editTab('add')"></div>
      <div ref="indicatorEl" class="uu-tabs-nav-indicator"></div>
    </div>
    <div class="uu-tabs-content">
      <component :key="selected" class="uu-tabs-content-item" :is="current">
      </component>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
import { nextTick, onMounted, ref, VNode, VNodeArrayChildren, watchEffect } from "vue";
export default {
  props: {
    selected: {
      type: [String, Number],
    },
    disabled: {
      type: Boolean,
      default: true,
    },
    editable: {
      type: Boolean
    }
  },
  emits: ['update:selected', 'edit'],
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>();
    const indicatorEl = ref<HTMLDivElement>();
    const containerEl = ref<HTMLDivElement>();
    let current = ref<any>(null)
    let tabProps = ref<any>(null)

    const setIndicatorStyle = () => {
      if (selectedItem.value && containerEl.value && indicatorEl.value) {
        const { width, left: left1 } =
          selectedItem.value.getBoundingClientRect();
        indicatorEl.value.style.width = width + "px";
        const { left: left2 } = containerEl.value.getBoundingClientRect();
        const left = left1 - left2;
        indicatorEl.value.style.left = left + "px";
      } else {
        if (indicatorEl.value) {
          indicatorEl.value.style.width = "0px";
        }
      }
    }

    const handleByDefaultSlots = () => {
      let tabList: Array<any> = []
      const defaults = context.slots.default();
      defaults.forEach((tab: VNode) => {
        if (tab.type === Tab) {
          tabList.push(tab)
        } else if (tab.type.toString() === 'Symbol(Fragment)') {
          (tab.children as VNodeArrayChildren).forEach((item) => {
            if ((item as VNode).type === Tab) {
              tabList.push(item)
            }
          })
        } else {
          throw new Error("Tabs 中必须是 Tab 组件");
        }
      });
      current.value = () => {
        return tabList.filter((tab) => {
          if (props.editable) {
            return tab.props.idName === props.selected
          } else {
            return tab.props.title === props.selected
          }
        })[0] || tabList[0];
      };
      tabProps.value = tabList.map((tab) => {
        const { title, disabled, idName } = tab.props;
        return { idName, title, disabled: disabled !== undefined };
        ;
      })
    }

    const clickSelect = (tab) => {
      if (!tab.disabled) {
        const selectedItem = props.editable ? tab.idName : tab.title
        context.emit("update:selected", selectedItem);
      }
    };

    const editTab = (type, idName?) => {
      context.emit('edit', type, idName)
      handleByDefaultSlots()
      nextTick(() => {
        setIndicatorStyle()
      })
    }

    onMounted(() => {
      watchEffect(() => {
        setIndicatorStyle()
      });
    });

    handleByDefaultSlots()

    return {
      tabProps,
      clickSelect,
      current,
      selectedItem,
      indicatorEl,
      containerEl,
      editTab,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/vars.scss";
$blue: lightBlue;
$color: #333;

.uu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $grayColor;
    position: relative;
    min-height: 40px;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }

      &.disabled {
        cursor: not-allowed;
        color: #ccc;
      }

      position: relative;

      .deleteIconWrap {
        display: none;
        margin: 0px;
        position: absolute;
        padding-left: 4px;

        .deleteIcon {
          font-size: 18px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: inline-block;
          position: relative;
          top: 4px;

          &:hover {
            background: rgb(199, 198, 198);

          }

          &::before {
            content: '×';
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }

      &:hover {
        .deleteIconWrap {
          display: inline-block;
        }
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: left 300ms;
    }

    &-addTab {
      position: absolute;
      padding: 10px;
      width: 15px;
      height: 15px;
      border: 1px solid #dcdcdc;
      top: 50%;
      transform: translateY(-50%);
      right: 0px;
      cursor: pointer;

      &:hover {

        &::before,
        &::after {
          border-color: rgb(125, 194, 218);
        }
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-color: gray;
      }

      &::before {
        width: 10px;
        border-top-width: 1px;
        border-top-style: solid;
      }

      &::after {
        height: 10px;
        border-left-width: 1px;
        border-left-style: solid;
      }

    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>