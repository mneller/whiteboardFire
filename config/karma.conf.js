var webpackConfig = require('./webpack.test');

module.exports = function (config) {
    var _config = {
        basePath: '',

        frameworks: ['jasmine'],

       plugins: [
           'karma-jasmine',
           // 'karma-sourcemap-writer',
           'karma-sourcemap-loader',
           'karma-webpack',
           'karma-coverage',
           // 'karma-remap-istanbul',
           'karma-phantomjs-launcher'
           //'karma-chrome-launcher'
        ],

        files: [
            {pattern: './config/karma-test-shim.js', watched: false}
        ],

        preprocessors: {
            './config/karma-test-shim.js': ['webpack', 'sourcemap', 'coverage']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        reporters: ['progress', 'coverage'],

        // Generate the code coverage report (lots of formats available)

        coverageReporter: {
            reporters: [
                {type: 'json'},
            ],
            dir: './coverage/',
            subdir: (browser) => {
                return browser.toLowerCase().split(/[ /-]/)[0]; // returns 'chrome'//
            }
        },


        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        //browsers: ['Chrome'],
        //browsers: ['Firefox'],
        singleRun: true
    };

    config.set(_config);
};
