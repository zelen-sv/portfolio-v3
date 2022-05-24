module.exports = {
    extends: ["plugin:eslint-plugin-vue"],
    rules: {
        'vue/no-deprecated-slot-attribute': 'off',
        'vue/valid-v-slot': ['error', { allowModifiers: true }]
    }
};
