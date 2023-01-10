<script setup>
import { useTodosStore } from '@/store/todos'
import Item from '@/components/Item.vue'

const store = useTodosStore()

const { items } = store;

</script> 

<template>
  <ul class="itemlist">
    <Item v-for="(item, idx) in items" :key="'item' + idx" :label="item.label" />
  </ul>
  <button class="clear">Clear</button>
</template>

<style scoped>
.itemlist {
  margin-top: 40px;
  width: 100%;
  list-style-type: none;
  padding: 0;
  border: 3px solid lightblue;
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
