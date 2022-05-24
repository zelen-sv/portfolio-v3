<template>
    <div
        ref="contentElement"
        class="markdown"
        v-html="md.render(content)"
    ></div>
</template>

<script setup>
import Markdown from "markdown-it";
import hljs from "highlight.js";

const props = defineProps({
    content: {
        type: String,
        default: "",
    },
});
const contentElement = ref(null);
const md = computed(() => new Markdown());

onMounted(() => {
    contentElement.value.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightElement(block);
    });
});
</script>

<style lang="scss" scoped>
.markdown :deep {
    h2 {
        font-size: 32px;
        color: $white;
    }

    p {
        font-size: 15px;
        line-height: 20px;
    }

    img {
        display: block;
        margin: 30px auto;
        border-radius: 5px;
        max-width: 100%;
    }

    a {
        color: $green;
    }

    .hljs {
        display: block;
        overflow-x: auto;
        padding: 20px;
        background: $dark;
        border-radius: 5px;
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 30px;
    }

    .hljs-keyword,
    .hljs-literal,
    .hljs-section,
    .hljs-link {
        color: $green;
    }

    .hljs-function .hljs-keyword {
        color: $white;
    }

    .hljs,
    .hljs-string,
    .hljs-subst {
        color: $blue;
    }

    .hljs-title,
    .hljs-name,
    .hljs-type,
    .hljs-attribute,
    .hljs-attr,
    .hljs-symbol,
    .hljs-bullet,
    .hljs-addition,
    .hljs-template-tag,
    .hljs-template-variable {
        color: $green;
    }

    .hljs-comment,
    .hljs-quote,
    .hljs-deletion,
    .hljs-selector-class,
    .hljs-variable,
    .hljs-selector-tag,
    .hljs-meta {
        color: $red;
    }

    .hljs-keyword,
    .hljs-selector-tag,
    .hljs-literal,
    .hljs-title,
    .hljs-section,
    .hljs-doctag,
    .hljs-type,
    .hljs-name,
    .hljs-strong {
        font-weight: 400;
    }

    .hljs-emphasis {
        font-style: italic;
    }
}
</style>
