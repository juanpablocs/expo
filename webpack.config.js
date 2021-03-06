module.exports = {
    entry:"./src/app.js",
    output:{
        filename:"./build/bundle.js"
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                query:{presets:['es2015']}
            }
        ]
    }

};