module.exports = {
	output        : 'export',
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
		unoptimized         : true,
		formats             : [
			'image/webp',
		],
	},
	devIndicators : {
		autoPrerender : false,
	},
};
