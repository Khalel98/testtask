<template>
  <div class="field">
    <span class="title">{{ title }}:</span>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  title: string;
}>();
</script>

<style scoped lang="css">
.field {
  display: flex;
  gap: 5px;
}
.title {
  font-weight: bold;
}
</style>
