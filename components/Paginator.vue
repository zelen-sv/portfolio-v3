<template>
    <div class="paginator">
        <a
            class="paginator__dot"
            v-for="item in sections"
            :key="item"
            :href="`#${item}`"
            :class="{ 'paginator__dot--active': active === item }"
            @mouseover="setTooltip(item)"
            @mouseleave="hideTooltip()"
            @click="scrollToSection(item)"
        >
            <span
                class="paginator__text"
                :class="{ 'paginator__text--visible': tooltipIsVisible(item) }"
            >
                {{ item }}
            </span>
        </a>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { usePaginatorStore } from "@/stores/paginator";

const currentTooltip = ref(null);
const { active, sections, scrollToSection } = useNavigation();

function tooltipIsVisible(section: string) {
    return currentTooltip.value == section;
}
function setTooltip(section: string) {
    currentTooltip.value = section;
}
function hideTooltip() {
    currentTooltip.value = null;
}
function trackSections() {
    let sectionBlocks = sections.value.map((id) => document.getElementById(id));
    let currentSection = sectionBlocks.find((current) => {
        if (current === null) return false;
        const sectionHeight = current.offsetHeight;
        const offsetTop = current.offsetTop - 50;
        const currentScrollPosition = window.pageYOffset;

        return (
            currentScrollPosition > offsetTop &&
            currentScrollPosition <= offsetTop + sectionHeight
        );
    });

    if (currentSection && currentSection.getAttribute("id") != active.value) {
        usePaginatorStore().updatePaginator(currentSection.getAttribute("id"));
    }
}

onMounted(() => {
    window.addEventListener("scroll", trackSections);
});
onDeactivated(() => {
    window.removeEventListener("scroll", trackSections);
});
</script>

<style lang="scss" scoped>
.paginator {
    position: sticky;
    top: 190px;
    display: flex;
    flex-direction: column;
    width: 25px;
}

.paginator__dot {
    position: relative;
    box-sizing: border-box;
    width: 25px;
    height: 25px;
    display: block;
    border-radius: 25px;
    background: $green;
    transition: all 0.3s;
    margin-bottom: 25px;
}

.paginator__dot--active {
    height: 60px;
    transition: all 0.3s;
}

.paginator__text {
    position: absolute;
    right: 40px;
    text-transform: capitalize;
    color: $blue;
    font-size: 18px;
    line-height: 25px;
    z-index: 10;
    height: 100%;
    display: flex;
    align-items: center;

    background: $blue -webkit-gradient(linear, 100% 0, 0 0, from($blue), color-stop(0.5, rgba(255, 255, 255, 0.8)), to($blue));

    background-position: -2rem top; /*50px*/
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation-name: shimmer;
    -webkit-animation-duration: 2.4s;
    -webkit-animation-iteration-count: infinite;
    -webkit-background-size: 2rem 100%; /*50px*/

    visibility: hidden;
    opacity: 0;
    transition: opacity 0.15s, visibility 0.15s;

    &--visible {
        visibility: visible;
        opacity: 1;
        transition: opacity 0.15s;
    }
}

@-webkit-keyframes shimmer {
    0% {
        background-position: -3rem top; /*50px*/
    }

    100% {
        background-position: 8rem top; /*200px*/
    }
}
</style>