<script setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";

const message = ref("");
// function addItem() {
//   (label) => {
//     state.useTodosStore.push(...label);
//     console.log(label);
//   };
// }

function addItem(item) {
  if (item.length === 0) {
    return;
  }
  store.todos(item)
  todo.value = ''
  console.log('trigger action in store to add item')
  console.log(message.value)
}
</script>

<template>
  <input v-model="message" placeholder="edit me" />
  <button class="add_item" @click="addItem(todo)">Add item</button>
</template>

<style>
input {
  border: 3px solid lightblue;
  width: 400px;
  padding: 20px;
  font-size: 1.1em;
}

input:active,
input:focus {
  border: 3px solid lightblue;
}

.add_item {
  margin-top: 20px;
  border: 3px solid lightblue;
  width: 400px;
  padding: 10px;
  background-color: rgb(202, 207, 211);
  color: white;
  font-size: 1.5em;
  text-transform: uppercase;
  font-weight: 500;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  cursor: pointer;
}

button:hover {
  color: rgb(65, 65, 65);
  background-color: white;
}
</style>
