<template>
    <div id="skills" class="skills-section">
        <div class="block-number">2.</div>
        <h1 class="section__h1">Skills</h1>
        <hr class="section__devider" />
        <div class="skills-section__list">
            <Card
                v-for="item in skills"
                :key="item.id"
                class="skills-section__item" >
                <img :src="item.icon.url" :alt="item.title" />
                <h5 class="skills-section__item-title">{{ item.title }}</h5>
                <p class="skills-section__item-description">
                    {{ item.description }}
                </p>
            </Card>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    skills: {
        type: Array,
        default: () => [],
    }
});
</script>

<style lang="scss" scoped>
.skills-section__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
}

.skills-section__item-title {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: $white;
    margin: 20px 0;
}

.skills-section__item-description {
    margin-bottom: 0;
}

@media only screen and (max-width: $medium-devices) {
    .skills-section__list {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(6, 1fr);
    }
}
</style>