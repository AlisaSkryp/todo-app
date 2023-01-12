<script setup>
import { useTodosStore } from "@/store/todos";
import { ref } from "vue";

const store = useTodosStore();
const label = ref("");
console.log(label);

function addItem() {
  store.addItem({ label: label.value });
  label.value = "";
}
</script>

<template>
  <p>New ToDo</p>
  <input v-model="label" @keyup.enter="addItem" placeholder="edit me" />
  <button class="add_item" :disabled="label === ''" @click="addItem">
    Add ToDo
  </button>
</template>

<style>
input {
  border: 1px solid #bea3d6;
  width: 100%;
  padding: 20px;
  font-size: 1.1em;
  background-color: transparent;
  border-radius: 7px;
  margin-top: 10px;
  color: #ffff;
}
p {
  color: #ffff;
}
input:active,
input:focus {
  outline: none;
}

.add_item {
  margin-top: 20px;
  border-radius: 7px;
  border: none;
  width: 100%;
  padding: 10px;
  background-color: #bea3d6;
  color: black;
  font-size: 1.2em;
  font-weight: 500;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  cursor: pointer;
}

button:hover {
  color: rgb(65, 65, 65);
  background-color: white;
}

button:disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
