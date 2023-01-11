<script setup>
import { useTodosStore } from "@/store/todos";
const store = useTodosStore();

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
});

function completeItem() {
  store.completeItem({ id: props.id });
}
</script>

<template>
  <li class="todo-item">
    <div class="label">{{ label }}</div>
    <button v-if="!done" class="doneItem" @click="completeItem">Done</button>
  </li>
</template>
<style lang="scss">
.todo-item {
  display: flex;
  justify-content: space-between;

  &:not(:first-child) {
    margin-top: 16px;
  }
  .doneItem {
    background-color: #bea3d6;
    border: none;
    border-radius: 8px;
    font-weight: 700;
  }
}
</style>
