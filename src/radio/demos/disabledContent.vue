<template>
  <div>
    <t-radio-group v-model="radio" @change="change">
      <t-radio name="1" title="单选框1" content-disabled></t-radio>
      <t-radio name="2" title="单选框2" content-disabled></t-radio>
    </t-radio-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  setup() {
    const radio = ref('1');

    watch(
      () => radio.value,
      (val) => {
        console.log(val);
      },
    );

    return {
      radio,
      change: (val: any) => console.log(val),
    };
  },
});
</script>
