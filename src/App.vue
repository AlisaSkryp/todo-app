<script setup>
import DoneList from "./components/DoneList.vue";
import ItemList from "./components/ItemList.vue";
import TodoApp from "./components/TodoApp.vue";

</script>

<template>
  <main>
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
  /* background-color: black; */
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
