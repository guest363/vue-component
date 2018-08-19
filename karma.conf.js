var webpackConfig = require('./dev-webpack.js');
/* 
Если хочется запускать тесты только в консоли используй ChromeHeadless
так как с PhantomJS будет много мороки 
*/

module.exports = function (config) {
  config.set({
    // конфигурация репортов о покрытии кода тестами
    coverageReporter: {
      dir: 'tmp/coverage/',
      reporters: [{
          type: 'html',
          subdir: 'report-html'
        },
        {
          type: 'lcov',
          subdir: 'report-lcov'
        }
      ],
      instrumenterOptions: {
        istanbul: {
          noCompact: true
        }
      }
    },
    client: {
      jasmine: {
        random: false
      }
    },
    customLaunchers: {
      'PhantomJS_custom': {
        base: 'PhantomJS',
        debug: true,
      },
    },
    // spec файлы, условимся называть по маске **_*.spec.js_**
    files: [
      'test/*.spec.js'
    ],
    browsers: ['ChromeHeadless'],
    frameworks: ['jasmine'],
    singleRun: false,
    // репортеры необходимы для  наглядного отображения результатов
    reporters: ['progress'],
    preprocessors: {
      'test/*.spec.js': ['webpack']
    },
    plugins: [
      'karma-jasmine',
      'karma-webpack',
      // Launchers
      'karma-chrome-launcher'
    ],
    // передаем конфигурацию webpack
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  });
};