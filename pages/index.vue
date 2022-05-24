<template>
    <div class="index-page">
        <div class="index-page__data">
            <VHeader class="section section--top" />
            <SkillsSection :skills="data.skills" class="section" />
            <ProjectsSection :projects="data.projects" class="section" />
            <ArticlesSection :articles="data.articles" class="section" />
            <ContactSection class="section section--bottom" />
        </div>
        <div class="index-page__paginator">
            <Paginator />
        </div>
    </div>
</template>

<script setup>
import { siteData } from "~/api/queries";
const { $graphcms } = useNuxtApp();

const { data } = await useAsyncData("siteData", () =>
    $graphcms.request(siteData)
);
</script>