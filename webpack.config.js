var webpack = require("webpack");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry   : {
        app : './views/app.js'
    },
    output  : {
        path     : __dirname + '/builds',
        filename : '[name].js'
    },
    module  : {
        loaders : [
            { test : /\.css$/, loader : 'style!css' },
            { test : /\.vue$/, loader : "vue" }
        ]
    },
    plugins : [
        commonsPlugin
    ],
    devtool: 'source-map'
};