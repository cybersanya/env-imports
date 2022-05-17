<template>
    <button class="c-button" @click="onClick">
        I'm IN button
    </button>
</template>

<script>
import button from "./button"
export default {
    mixins: [ button ],
    // Здесь логика специфичная для страны
    methods: {
        showAlert() {
            alert('А этот алерт виден только индусам')
        }
    }
}
</script>

<style lang="scss" src="./button.scss" />
<style lang="scss">
.c-button {
    // Здесь стили специфичные для страны
    background-color: blue;
}
</style>
