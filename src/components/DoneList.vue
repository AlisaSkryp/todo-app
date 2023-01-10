<template>
  <div class="done_list">
    <div>{{}}</div>
    <button class="restore">Restore</button>
  </div>
</template>

<style scoped>
.done_list {
  margin-top: 40px;
  width: 100%;
  display: flex;
  border: 3px solid lightblue;
}

div {
  width: 100%;
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
</style>
