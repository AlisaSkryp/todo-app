<script setup>
import DoneList from "./components/DoneList.vue";
import ItemList from "./components/ItemList.vue";
import TodoApp from "./components/TodoApp.vue";
</script>

<template>
  <main>
    <div v-if="false">Hello</div>
    <div class="wrapper">
      <TodoApp />
      <ItemList />
      <DoneList />
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100%;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(59, 56, 56);
  padding: 48px;
}
</style>
