const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack');

const COUNTRY = process.env.VUE_APP_COUNTRY
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        plugins: [
            new webpack.NormalModuleReplacementPlugin(
                /(.*)-COUNTRY(\.*)/,
                function (resource) {
                    resource.request = resource.request.replace(
                        /-COUNTRY/,
                        `-${COUNTRY}`
                    );
                }
            ),
        ],
    }
})
