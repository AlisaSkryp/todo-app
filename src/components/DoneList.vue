<script setup>
import { useTodosStore } from "@/store/todos";
import Item from "@/components/Item.vue";
const store = useTodosStore();
</script>

<template>
  <div class="done_list">
    <p>Done Todo's</p>

    <ul class="itemlist">
      <Item
        v-for="(item, idx) in store.getDoneItems"
        :key="'item' + idx"
        :label="item.label"
        :id="item.id"
        :done="item.done"
      />
    </ul>
  </div>
  <button class="clear" @click="store.clearDoneItems">Clear</button>
</template>

<style scoped>
.done_list {
  margin-top: 40px;
}
p {
  font-size: 1.2em;
  font-weight: 600;
  color: #ffff;
}
.itemlist {
  width: 100%;
  border: 1px solid #bea3d6;
  border-radius: 8px;
  margin-top: 10px;
  padding: 10px 20px;
}

div {
  width: 100%;
}
li {
  list-style-type: none;
  color: white;
}
.restore {
  margin: 10px;
  width: 100px;
  padding: 5px;
  background-color: rgb(43, 79, 25);
  border: none;
  color: white;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 500;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  cursor: pointer;
}

.restore:hover {
  color: rgb(194, 115, 220);
  background-color: white;
}
.clear {
  margin-top: 20px;
  border-radius: 7px;
  border: none;
  width: 400px;
  padding: 10px;
  background-color: #bea3d6;
  color: black;
  font-size: 1.2em;
  font-weight: 500;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  cursor: pointer;
}
</style>
