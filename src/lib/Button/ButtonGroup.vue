<template>
    <div class="uu-buttonGroup">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component } from '@vue/runtime-core';
import UuButton from './Button.vue'
export default {
    name: 'UuButtonGroup',
    setup(props, context) {
        const defaultSlots = context.slots.default()
        defaultSlots.forEach((btn) => {
            if (btn.type !== UuButton) {
                throw new Error("ButtonGroup 中必须是 Button 组件");
            }
        });
    }
}
</script>

<style lang="scss">
.uu-buttonGroup {
    display: flex;

    .uu-button {
        margin: 0;
        border-radius: 0;

        &:not(:first-child) {
            margin-left: -1px;
        }

        &:first-child {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }

        &:last-child {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }

        &:hover {
            position: relative;
            z-index: 1;
        }
    }

}
</style>