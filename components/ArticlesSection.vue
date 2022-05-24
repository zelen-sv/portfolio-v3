<template>
    <div id="articles" class="articles-section">
        <div class="block-number">5.</div>
        <h1 class="section__h1">Articles</h1>
        <hr class="section__devider" />
        <ContentSlider>
            <template v-slot="{ currentSlideIndex }">
                <div
                    v-for="(slideArticles, index) in splitArticlesForSlider"
                    :key="`articles-slide-${index}`"
                    v-show="currentSlideIndex === index"
                    class="articles-section__list slide"
                >
                    <NuxtLink
                        v-for="item in slideArticles"
                        :to="{
                            name: 'articles-slug',
                            params: { slug: item.slug },
                        }"
                        :key="item.id"
                    >
                        <Card :hovered="false" class="articles-section__item">
                            <div class="articles-section__content">
                                <h5 class="articles-section__item-title">
                                    {{ item.title }}
                                </h5>
                                <p class="articles-section__item-description">
                                    {{ item.previewDesc }}
                                </p>
                                <Tags
                                    class="articles-section__tags"
                                    :list="item.tags"
                                    inline
                                />
                            </div>
                            <div class="articles-section__date">
                                <p class="articles-section__item-date">
                                    {{ getArticleDate(item) }}
                                </p>
                            </div>
                        </Card>
                    </NuxtLink>
                </div>
            </template>
        </ContentSlider>
    </div>
</template>

<script setup>
const { $filters } = useNuxtApp();
const props = defineProps({
    articles: {
        type: Array,
        default: () => [],
    },
});

const splitArticlesForSlider = computed(() => {
    let results = [];
    let index = 0;
    while (index < props.articles.length) {
        results.push(props.articles.slice(index, 2 + index));
        index += 2;
    }
    return results;
});

function getArticleDate(article) {
    return $filters.toDate(article.createdAt);
}
</script>

<style lang="scss" scoped>
.articles-section__list {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
}

.articles-section__item {
    display: grid;
    grid-template-columns: 1fr 100px;
    gap: 20px;
}

.articles-section__item-title {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: $white;
    margin: 20px 0;
    margin-top: 0;
}

.articles-section__item-description {
    margin-bottom: 0;
}

.articles-section__item-date {
    font-weight: 200;
    font-size: 16px;
    line-height: 19px;
    color: $green;
    text-align: right;
    margin: 0;
}

.articles-section__tags {
    margin-top: 20px;
}

@media only screen and (max-width: $medium-devices) {
    .articles-section__item-date {
        display: none;
    }

    .articles-section__item {
        grid-template-columns: 1fr;
    }
}
</style>
