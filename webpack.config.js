module.exports = {
    // mode: 'development'
    // 约定大于配置
    mode: 'production', 
    plugins:[
        ...
    ],
   module: { //要打包的第三方模块
	    rules: [
	      { test: /\.js|jsx$/, use: 'babel-loader', 
	      exclude: /node_modules/ }
	    ]
	}
}
