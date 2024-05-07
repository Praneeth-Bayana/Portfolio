module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            // Find the rule that handles source maps
            const sourceMapRule = webpackConfig.module.rules.find(rule =>
                rule.use && rule.use.find(u => u.loader && u.loader.includes('source-map-loader'))
            );

            // If the rule is found, exclude SSRProvider.mjs.map from being processed by source-map-loader
            if (sourceMapRule) {
                sourceMapRule.exclude = [/SSRProvider\.mjs\.map$/];
            }

            return webpackConfig;
        }
    }
};
