<template>
    <header id="about" class="header">
        <div class="block-number">1.</div>
        <h1 class="section__h1 only-for-desktop">
            Hello, I’m a Stas Zelenko<br />
            Full stack Web Developer
        </h1>
        <h1 class="section__h1 only-for-mobile">Stas Zelenko</h1>
        <p class="header__description">
            I’m a full stack developer which means I can bring your project from
            concept to completion. I work primarily with Ruby on Rails on the
            backend and Vue.js on the frontend but picking up new languages or
            frameworks isn’t a problem.
        </p>
        <a href="mailto:st.zelenko@gmail.com">
            <button class="button">Say Hi!</button>
        </a>
    </header>
</template>

<style lang="scss" scoped>
.header__description {
    max-width: 480px;
    margin-bottom: 25px;
}
</style>