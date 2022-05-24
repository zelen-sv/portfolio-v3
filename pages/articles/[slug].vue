<template>
    <div class="article-page">
        <h1 class="article-page__header">{{ article.title }}</h1>
        <div class="article-page__info">
            <tags  :list="article.tags" inline class="article-page__tags" />
            <div  class="article-page__date">
                {{ getArticleDate(article) }}
            </div>
        </div>
        <Markdown :content="article.content" />
    </div>
</template>

<script setup>
import { getArticle } from "~/api/queries";
const { $filters, $graphcms } = useNuxtApp();
const { params } = useRoute()
const { data } = await useAsyncData("getArticle", () =>
    $graphcms.request(getArticle, { slug: params.slug })
);
const article = computed(() => data.value.article)

function getArticleDate(article) {
    return $filters.toDate(article.createdAt);
}

definePageMeta({
    layout: "blog",
});
</script>
