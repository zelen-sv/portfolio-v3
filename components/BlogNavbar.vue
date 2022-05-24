<template>
    <div class="blog-navbar__container">
        <div class="blog-navbar">
            <nuxt-link to="/">
                <Logo />
            </nuxt-link>
            <nuxt-link to="/">
                <div class="blog-navbar__back">
                    <svg
                        class="blog-navbar__back-arrow"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 16L12 5.33333V13.3333H32V18.6667H12V26.6667L0 16Z"
                            fill="#78FFF1"
                        />
                    </svg>
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.blog-navbar {
    max-width: $content-restriction;
    margin: auto;
    height: $navbar-height;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.blog-navbar__container {
    position: sticky;
    top: 0;
    z-index: $navbar-index;
    background-color: $dark-blue-75;
    backdrop-filter: blur(10px);
}

.blog-navbar__back {
    background: $white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    right: 0px;
    transition: all 0.4s ease;

    &:hover {
        right: 5px;
        transition: all 0.4s ease;
    }
}

@media only screen and (max-width: $large-devices) {
    .blog-navbar {
        padding-left: $mobile-side-space;
        padding-right: $mobile-side-space;
    }
}
</style>