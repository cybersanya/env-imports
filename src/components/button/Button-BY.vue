<template>
    <button class="c-button" @click="onClick">
        I'm BY button
    </button>
</template>

<script>
import button from "./button"
export default {
    // Тут общая логика
    mixins: [ button ],

    // Здесь логика специфичная для страны
    methods: {
        showAlert() {
            alert('А этот алерт виден только белоруссам')
        }
    }
}
</script>

// Тут общие стили
<style lang="scss" src="./button.scss" />

<style lang="scss">
// Здесь стили специфичные для страны
.c-button {
    background-color: red;
}
</style>
