var webpack = require("webpack")
var path = require("path")
module.exports = {
    // entry: "./src/index.js", 
    // output: {
    //     path: path.resolve(__dirname, "./"),  
    //     filename: "main.js"                
    // },
    mode: "development",  //development  production
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015", "stage-0", "react"]
                    }
                },
            },
            {
                test: /\.css/, use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader"
                        , options: {
                            modules: {
                                localIdentName: "[path][name]-[local]-[hash:5]"
                            }
                        }
                    },
                    { loader: "less-loader" }
                ]
            },
            {
                test: /\.ttf|woff|woff2|eot|svg$/, use: ['url-loader']

            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [{
                    loader: "url-loader",
                }]
            }, {
                test: /\.(ttf|woff|svg|eot)$/,
                use: ["file-loader"]               //方式①
            },
            {
                test: /\.ttf|woff|woff2|eot|svg$/, use: ['url-loader']

            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],  //表示这几个文件的后缀名可以不写
        alias: {  //表示别名
            '@': path.join(__dirname, './src')  //这样 @ 就表示 项目根目录下面的src的这一层路径
        }
    }
}