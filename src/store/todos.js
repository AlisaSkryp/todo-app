import { defineStore } from "pinia";

export const useTodosStore = defineStore("todos", {
  state: () => ({
    items: JSON.parse(localStorage.getItem("items")) || [],
  }),
  getters: {
    getUndoneItems: (state) => {
      return state.items.filter((item) => !item.done);
    },
    getDoneItems: (state) => {
      return state.items.filter((item) => item.done);
    },
  },
  actions: {
    addItem({ label }) {
      this.items.push({
        label,
        done: false,
        id: new Date().getTime(),
      });
      this.updateStorage();
    },
    completeItem({ id }) {
      const item = this.items.find((item) => {
        return item.id === id;
      });

      item.done = true;

      this.updateStorage();
    },
    clearDoneItems() {
      this.items = this.items.filter((item) => !item.done);
      this.updateStorage();
    },
    updateStorage() {
      console.log(this.items);
      localStorage.setItem("items", JSON.stringify(this.items));

      // put this.items into the localeStorage
    },
  },
});
