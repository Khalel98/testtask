<template>
  <div class="main">
    <item-list
      :transportData="transportData"
      class="sidebar"
      @click="(item) => (selectedItem = item)"
    />
    <item-content v-if="selectedItem" :item="selectedItem" @click="onClick" />
  </div>
</template>

<script setup lang="ts">
import ItemList from "@/components/ItemList.vue";
import ItemContent from "@/components/ItemContent.vue";
import transportMock from "@/mock/mockData";
import Product from "@/types/types";
import { ref } from "vue";

const transportData = ref<Product[]>(transportMock);

const selectedItem = ref<Product | null>();

const onClick = (value: string) => {
  switch (value) {
    case "color": {
      selectedItem.value?.attributes.push({
        code: "new code",
        name: "new field",
        color: "color",
      });
      break;
    }
    case "size": {
      selectedItem.value?.attributes.push({
        code: "new code",
        name: "new field",
        size: {
          width: 0,
          height: 0,
        },
      });
      break;
    }
    case "weight": {
      selectedItem.value?.attributes.push({
        code: "new code",
        name: "new field",
        weight: 0,
      });
      break;
    }
  }
};
</script>

<style scoped lang="css">
.main {
  display: flex;
  gap: 20px;
}
.sidebar {
  width: auto;
}
</style>
