// Здесь общая логика

export default {
    name: 'Button',

    methods: {
        onClick() {
            if (confirm('Этот конфирм общий для всех стран')) {
                this.showAlert()
            }
        },
        showAlert() {

        }
    }
}
