<template>
    <button class="button">
        {{ text }}
    </button>
</template>

<script setup>
const props = defineProps({
    text: {
        type: String,
        default: "",
    },
});
</script>

<style lang="scss" scoped>
.button {
    background: $green;
    border-radius: 5px;
    padding: 16px 50px;
    color: $white;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    position: relative;
    bottom: 0;
    transition: all 0.3s ease;

    &:hover {
        transition: all 0.3s ease;
        bottom: 3px;
    }

    &:disabled {
        cursor: not-allowed;
        bottom: 0;
    }
}
</style>