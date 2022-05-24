<template>
    <div id="contact" class="contact-section">
        <div class="block-number">5.</div>
        <h1 class="section__h1">Contact</h1>
        <hr class="section__devider" />
        <form
            name="contact"
            method="post"
            action="/message-sent"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            class="contact-section__form"
        >
            <input type="hidden" name="form-name" value="contact" />
            <input
                required
                name="name"
                placeholder="Name"
                type="text"
                class="contact-section__input"
            />
            <input
                required
                name="email"
                placeholder="Email"
                type="email"
                class="contact-section__input"
            />
            <input
                required
                name="message"
                placeholder="Message"
                type="text"
                class="contact-section__input"
            />
            <button class="button contact-section__button" type="submit">Send message</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.contact-section__form {
    max-width: 440px;
}

.contact-section__input {
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    color: $blue;
    background-color: $dark;
    border-radius: 5px;
    padding: 27px 35px;
    width: 440px;
    box-sizing: border-box;
    margin-bottom: 30px;
    transition: all 0.3s ease;

    &::placeholder {
        color: $blue;
    }

    &:valid {
        border: solid 1px $green;
    }

    &:-webkit-autofill {
        -webkit-text-fill-color: $blue;
        -webkit-box-shadow: 0 0 0px 1000px $dark inset;

        &:hover,
        &:focus {
            -webkit-text-fill-color: $blue;
            -webkit-box-shadow: 0 0 0px 1000px $dark inset;
        }
    }
}

.contact-section__bot-input {
    display: none;
}

.contact-section__button {
    margin-top: 10px;
    display: block;
}

@media only screen and (max-width: $medium-devices) {
    .contact-section__input {
        font-size: 16px;
        line-height: 20px;
        border-radius: 5px;
        padding: 16px 20px;
        max-width: 440px;
        width: 100%;
        margin-bottom: 20px;
    }

    .contact-section__button {
        margin-top: 10px;
    }
}

@media only screen and (max-width: $extra-small-devices) {
    .contact-section__button {
        margin-top: 10px;
        width: 100%;
    }
}
</style>