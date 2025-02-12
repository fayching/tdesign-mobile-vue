<template>
  <t-popup v-model="open" placement="left">
    <div :class="dSideBarClassName">
      <div v-for="item in sidebar" :key="item.name" :class="dSideBarItemClassName" @click="takePath(item.path)">
        <div :class="dSideBarItemNameClassName">{{ item.name }}</div>
      </div>
    </div>
  </t-popup>
</template>

<script lang="ts">
import { ref, watch, toRefs, computed, PropType, SetupContext, defineComponent, h } from 'vue';
import TPopup from '../popup';
import config from '../config';
import { useEmitEvent } from '../shared';
import { SidebarItem } from './drawer.interface';

const { prefix } = config;
const name = `${prefix}-drawer`;

export default defineComponent({
  name,
  components: { TPopup },
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    sidebar: {
      type: Array as PropType<SidebarItem[]>,
      default: () => [],
    },
  },
  emits: ['update:modelValue'],
  setup(props, context: SetupContext) {
    const emitEvent = useEmitEvent(props, context.emit);
    const { modelValue } = toRefs(props);
    const open = ref(false) || modelValue;

    const dSideBarClassName = computed(() => `${name}__sidebar`);
    const dSideBarItemClassName = computed(() => `${name}__sidebar-item`);
    const dSideBarItemIconClassName = computed(() => `${name}__sidebar-item-icon`);
    const dSideBarItemNameClassName = computed(() => `${name}__sidebar-item-name`);

    const takePath = (path: string) => {
      if (path) {
        window.location.href = path;
      }
    };
    watch(open, () => {
      emitEvent('update:modelValue', open.value);
    });
    watch(modelValue, () => {
      open.value = modelValue.value;
    });

    return {
      open,
      takePath,
      dSideBarClassName,
      dSideBarItemClassName,
      dSideBarItemIconClassName,
      dSideBarItemNameClassName,
    };
  },
});
</script>
