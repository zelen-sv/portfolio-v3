<template>
    <div class="navbar__container">
        <div class="navbar">
            <Logo />
            <nav class="navbar__links">
                <a
                    class="navbar__link"
                    v-for="item in sections"
                    :key="`nav-${item}`"
                    :href="`#${item}`"
                    :class="{ 'navbar__link--active': active === item }"
                    @click="scrollToSection(item)"
                >
                    {{ item }}
                </a>
            </nav>
        </div>
    </div>
</template>

<script setup>
const { active, sections, scrollToSection } = useNavigation()
</script>

<style lang="scss" scoped>
.navbar {
    max-width: $content-restriction;
    margin: auto;
    height: $navbar-height;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar__container {
    position: sticky;
    top: 0;
    z-index: $navbar-index;
    background-color: $dark-blue-75;
    backdrop-filter: blur(10px);
}

.navbar__links {
    display: flex;
    justify-content: flex-end;
    z-index: calc(#{$navbar-index} + 1);
}

.navbar__link {
    padding-left: 50px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    text-transform: capitalize;
    line-height: 25px;
    color: $blue;
    z-index: calc(#{$navbar-index} + 1);
    transition: color 0.3s ease;

    &--active {
        color: $green;
        transition: color 0.3s ease;
    }
}

@media only screen and (max-width: $medium-devices) {
    .navbar__container {
        display: none;
    }
}
</style>