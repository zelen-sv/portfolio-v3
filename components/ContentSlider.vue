<template>
    <div
        ref="element"
        class="content-slider">
        <div
            class="content-slider__container"
            v-touch:swipe.left="nextSlide"
            v-touch:swipe.right="prevSlide">
            <slot :currentSlideIndex="currentSlideIndex" />
        </div>

        <div v-if="slidesCount > 1" class="content-slider__controls">
            <div class="content-slider__dots">
                <span
                    v-for="(dot, index) in slidesCount"
                    :key="'slider-pagination-' + index"
                    class="content-slider__dot-item"
                    :class="{
                        'content-slider__dot-item--active':
                            currentSlideIndex == index,
                    }"
                    @click="goToSlide(index)"
                ></span>
            </div>
        </div>
        <div class="content-slider__preload">
            <slot name="preload" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    autoplay: {
        type: Boolean,
        default: false
    },
    timeout: {
        type: Number,
        default: 8000
    }
});

const currentSlideIndex = ref(0);
const slidesCount = ref(null);
const element = ref(null);
let slideInterval = null;

function goToSlide(index) {
    currentSlideIndex.value = index;
    resetAutoplay()
};
function nextSlide() {
    if (currentSlideIndex.value === slidesCount.value - 1) return currentSlideIndex.value = 0
    currentSlideIndex.value += 1;
};
function prevSlide() {
    if (currentSlideIndex.value === 0) return slidesCount.value - 1
    currentSlideIndex.value -= 1;
};
function resetAutoplay() {
    clearInterval(slideInterval)
    if (props.autoplay) {
        slideInterval = setInterval(nextSlide, props.timeout)
    }
};

onMounted(() => {
    slidesCount.value = element.value.querySelectorAll(".slide").length;
    if (props.autoplay) {
        resetAutoplay()
    }
})
onUnmounted(() => {
    if (props.autoplay) {
        clearInterval(slideInterval)
    }
})
</script>

<style lang="scss" scoped>
.content-slider__controls {
    margin-top: 10px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content-slider__dots {
    margin-top: 40px;
    display: flex;
    justify-content: center;
}

.content-slider__dot-item {
    box-sizing: border-box;
    margin: 0 15px;
    width: 25px;
    height: 25px;
    display: block;
    border-radius: 25px;
    background: $green;
    cursor: pointer;
    transition: all 0.3s;
}

.content-slider__dot-item--active {
    opacity: 1;
    background: $green;
    width: 60px;
    transition: all 0.3s;
}

.content-slider__preload {
    display: none;
}

@media only screen and (max-width: $medium-devices) {
    .content-slider__dots {
        margin-top: 30px;
    }

    .content-slider__dot-item {
        margin: 0 10px;
    }
}
</style>
