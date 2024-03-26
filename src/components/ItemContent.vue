<template>
  <div class="content column">
    <span class="header"> {{ item.name }}</span>

    <div class="detail column" v-for="attr in item.attributes" :key="attr.code">
      <FieldComponent :title="'code'">
        <input :value="attr.code" />
      </FieldComponent>

      <FieldComponent :title="'name'">
        <input :value="attr.name" />
      </FieldComponent>

      <FieldComponent v-if="attr.color" :title="'color'">
        <input :value="attr.color" />
      </FieldComponent>

      <FieldComponent v-if="attr.size" :title="'size'">
        <span>
          <input :value="attr.size.width" type="number" /> x
          <input :value="attr.size.height" type="number" />
        </span>
      </FieldComponent>

      <FieldComponent v-if="attr.weight" :title="'weight'">
        <input :value="attr.weight" type="number" />
      </FieldComponent>
    </div>

    <div class="add">
      <label>
        type
        <select ref="selectRef">
          <option value="color">color</option>
          <option value="size">size</option>
          <option value="weight">weight</option>
        </select>
      </label>

      <button @click="emit('click', selectRef.value)">Add</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// не стал выносить input в компонент
import FieldComponent from "@/components/FieldComponent.vue";
import { defineProps, defineEmits, ref } from "vue";

import { Product } from "@/types/types";

defineProps<{
  item: Product;
}>();

const emit = defineEmits(["click"]);

const selectRef = ref<HTMLSelectElement>();

// полный отказ от использования watcher для объектов и массивов

// const innerItem = ref(props.item);
// watch(props.item, () => {
//   innerItem.value = props.item;
// });
</script>

<style scoped lang="css">
.header {
  font-weight: bold;
}
.column {
  display: flex;
  flex-direction: column;
}

.content {
  padding: 20px;
  gap: 20px;
}
.detail {
  padding: 10px;
  gap: 10px;
}

.add {
  display: flex;
  gap: 10px;
}
</style>
