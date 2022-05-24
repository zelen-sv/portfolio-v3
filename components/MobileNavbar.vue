<template>
    <nav class="mobile-navbar" id="mobile-navbar">
        <div class="mobile-navbar__nav">
            <Logo class="mobile-navbar__logo" />

            <Hamburger
                class="mobile-navbar__hamburger"
                @click="toggleNavbar"
                :active="menuExpanded"
            />
        </div>
        <transition name="slide">
            <div v-show="menuExpanded" class="mobile-navbar__content">
                <div class="mobile-navbar__links">
                    <a
                        href="#"
                        class="mobile-navbar__link"
                        v-for="item in sections"
                        :key="`nav-${item}`"
                        :class="{
                            'mobile-navbar__link--active': active === item,
                        }"
                        @click="clickOnLink(item)"
                    >
                        {{ item }}
                    </a>
                </div>
                <div class="mobile-navbar__social">
                    <a href="" class="mobile-navbar__email">st.zelenko@gmail.com</a>
                    <div class="mobile-navbar__icons">
                        <a href="https://github.com/zelen-sv" target="blank">
                            <IconsGithub class="mobile-navbar__icon-item" />
                        </a>
                        <a href="https://t.me/st_zelenko" target="blank">
                            <IconsTelegram class="mobile-navbar__icon-item" />
                        </a>
                        <a href="https://wa.me/375293079905" target="blank">
                            <IconsWhatsapp class="mobile-navbar__icon-item" />
                        </a>
                    </div>
                </div>
            </div>
        </transition>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const menuExpanded = ref(false);
const { active, sections, scrollToSection } = useNavigation();

function toggleNavbar() {
    menuExpanded.value = !menuExpanded.value
}
function clickOnLink(link) {
    menuExpanded.value = false
    scrollToSection(link)
}
</script>

<style lang="scss" scoped>
.mobile-navbar {
    display: none;
    position: sticky;
    top: 0;
    z-index: $navbar-index;
    padding-left: $mobile-side-space;
    padding-right: $mobile-side-space;
    background-color: $dark-blue-75;
    backdrop-filter: blur(10px);
}

.mobile-navbar__nav {
    height: $mobile-navbar-height;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.mobile-navbar__logo {
    z-index: calc(#{$navbar-index} + 1);
}

.mobile-navbar__hamburger {
    z-index: calc(#{$navbar-index} + 1);
}

.mobile-navbar__content {
    width: calc(100vw - 40px);
    box-sizing: border-box;
    padding: 40px 0px;
    padding-top: calc(#{$mobile-navbar-height} + 40px);
    position: fixed;
    top: 0px;
    height: 100vh;
    background-color: $dark-blue;
    display: flex;
    flex-direction: column;
}

.mobile-navbar__links {
    text-align: right;
    margin-bottom: 10px;
}

.mobile-navbar__link {
    text-transform: capitalize;
    display: block;
    font-size: 20px;
    line-height: 26px;
    color: $green;
    padding-bottom: 30px;
}

.mobile-navbar__link--active {
    text-decoration-line: underline;
}

.mobile-navbar__social {
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: canter;
}

.mobile-navbar__email {
    text-align: center;
    font-size: 18px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: $blue;
    margin-bottom: 25px;
}

.mobile-navbar__icons {
    margin: auto;
    display: grid;
    grid-template-columns: 46px 46px 46px;
    grid-column-gap: 40px;
}

.mobile-navbar__icon-item {
    fill: $blue;
    position: relative;
    bottom: 0;
    transition: all 0.3s ease;

    &:hover {
        bottom: 3px;
        transition: all 0.3s ease;
        fill: $green;
    }
}

@media only screen and (max-width: $medium-devices) {
    .mobile-navbar {
        display: block;
    }
}

@media only screen and (max-width: $extra-small-devices) {
    .mobile-navbar__social {
        margin-top: 0px;
    }
}
</style>