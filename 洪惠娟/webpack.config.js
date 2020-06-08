var webpack = require("webpack")
var path = require("path")
module.exports = {
    entry: "./src/app.js",      //设置的是入口文件
    output: {                  //设置出口文件
        path: path.resolve(__dirname,"./"),                  //如果把出口文件放在一个文件夹中，那么需要使用path：path.resolve:dirname代表的是除了文件之外的路径,记得是两个杠杠__dirname
        // path: path.resolve(__dirname,'dist'), 如果出口文件是在dist文件夹里
        filename: "index.js"                  //哪一个出口文件，这个文件是需要放到index.html中的，是自动生成的。
    },
    module: {                  //安装的模块有哪些          
        rules: [                  //把所有的loader都放到rules里面进行匹配，规则匹配
            {
                test: /\.js$/,    //解析的文件是谁
                exclude: /node_modules/,                  //不包含node_modules中的js文件
                use: {
                    loader: "babel-loader",               //用的什么转换器
                    options:{
                        presets:["es2015","stage-0","react"]    //安装了当前转换器的那些包
                    }
                  }
                // use:'babel-loader'  //这种写法也可以 
                },{
                  test:/\.css$/,
                  use:['style-loader','css-loader']
                },
                {
                    test:/\.(ttf|woff|svg|eot)$/,
                    use:[{
                        loader:"file-loader",
                        options:{}
                    }]
                },
                {
                    test:/\.(png|jpg|jpeg|gif)$/,
                    use:[{ //代表的是用了什么转换器，同时也可以对其他内容进行配置，例如：name格式，图片大小，图片路径等等。
                          loader:'url-loader',
                          options:{}
    
                        //   options:{
                        //         name:"[name]-[hash:5].min.[ext]",  //图片上名称
                        //         limit:20000,        //图片大小限制，可以不写就没有限制。
                        //         publicPath:"./img",   //入口路径
                        //         outputPath:"./"         //出口路径，一般会自动生成
    
                        //   }  //有属性值就用json 格式
                    }]          
                },
    
     
        ]
    }
}
