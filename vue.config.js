const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const COUNTRY = process.env.VUE_APP_COUNTRY
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        plugins: [
            new BundleAnalyzerPlugin(),
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
