<template>
    <div class="card" :class="{ 'card--hovered': hovered }">
        <slot />
    </div>
</template>

<script setup>
const props = defineProps({
    hovered: {
        type: Boolean,
        default: true,
    }
});
</script>

<style lang="scss" scoped>
.card {
    background: $dark;
    padding: 20px;
    border-radius: 5px;
    position: relative;
    bottom: 0;
    transition: all 0.3s ease;
}

.card--hovered:hover {
    bottom: 5px;
    transition: all 0.3s ease-in;
}
</style>