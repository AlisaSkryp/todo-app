
<script setup>
defineProps({
    label: {
        type: String,
        required: true,
    },
});

</script>

<template>
    <li class="todo-item">
        <div class="label">{{ label }}</div>
        <button class="remove">Remove</button>
    </li>
</template>


<style lang="scss">
.todo-item {
    display: flex;
    justify-content: space-between;

    &:not(:first-child) {
        margin-top: 16px
    }
}
</style>