module.exports = {
	webpack       : function(config){
		config.module.rules.push({
			test : /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
			use  : {
				loader  : 'url-loader',
				options : {
					name : '[name].[ext]',
				},
			},
		});
		return config;
	},
	images        : {
		disableStaticImages : true,
	},
	devIndicators : {
		autoPrerender : false,
	},
	output        : 'export',
	unoptimized   : true,
};
