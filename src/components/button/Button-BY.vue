<template>
    <button class="c-button">
        I'm BY button
    </button>
</template>

<script>
import button from "./button"
export default {
    mixins: [ button ],
}
</script>

<style lang="scss" src="./button.scss" />
<style lang="scss">
.c-button {
    background-color: red;
}
</style>
