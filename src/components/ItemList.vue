<script setup>
import { useTodosStore } from "@/store/todos";
import Item from "@/components/Item.vue";

const store = useTodosStore();
</script>

<template>
  <div class="todo-list">
    <p>ToDo List</p>
    <ul class="itemlist">
      <Item
        v-for="(item, idx) in store.getUndoneItems"
        :key="'item' + idx"
        v-bind="item"
      />
    </ul>
  </div>
</template>

<style scoped>
.todo-list {
  color: #ffff;

  margin-top: 24px;
}
p {
  font-size: 1.2em;
  font-weight: 600;
  color: #ffff;
}
.itemlist {
  width: 100%;
  list-style-type: none;
  padding: 0;
  border: 1px solid #bea3d6;
  border-radius: 7px;
  padding: 10px 20px;
  margin-top: 10px;
}

.mes {
  width: 100%;
  height: 100%;
  color: white;
  font-size: 1em;
}

.remove {
  margin: 10px;
  width: 100px;
  padding: 5px;
  background-color: rgb(194, 115, 220);
  border: none;
  color: white;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 500;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  cursor: pointer;
}

.remove:hover,
.clear:hover {
  color: rgb(194, 115, 220);
  background-color: white;
}

.clear {
  align-self: flex-end;
  margin-top: 30px;
  margin-right: 10px;

  padding: 5px 17px;
  background-color: rgb(194, 115, 220);
  border: none;
  color: white;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 500;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  cursor: pointer;
}
</style>
