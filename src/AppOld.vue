<template>
    <div id="app">
        <component :is="buttonComponent" />
    </div>
</template>

<script>
import ButtonBY from "@/components/button/Button-BY"
import ButtonIN from "@/components/button/Button-IN"

export default {
    computed: {
        buttonComponent() {
            return process.env.VUE_APP_COUNTRY === 'IN' ? ButtonIN : ButtonBY
        }
    }
}
</script>

<style lang="scss">
#app {
    display: flex;
    justify-content: center;
}
</style>
