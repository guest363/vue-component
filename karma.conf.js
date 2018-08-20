var webpackConfig = require('./dev-webpack.js');
/* 
Если хочется запускать тесты только в консоли используй ChromeHeadless
так как с PhantomJS будет много мороки 

ChromeHeadless не работает номально через прокси и флаги запуска не помогут
--proxy-server=http://bob:password123@proxy.example.com:8000
Нет, не поможет.
Решение - поднимать локальный прокси (squid) с прозразной аутентификацией

squid.conf
http_port 3128
cache_peer proxy.example.com parent 8000 0 \
  no-query \
  login=bob:password123 \
  connect-fail-limit=99999999 \
  proxy-only \
  name=my_peer
cache_peer_access my_peer allow all
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
    // spec файлы, условимся называть по маске **_*.spec.js_**
    files: [
      'test/*.spec.js'
    ],
    browsers: ['ChromeHeadless'],
     customLaunchers: {
      Chrome_without_security: {
        base: 'ChromeHeadless',
        flags: ['--remote-debugging-port=9222']
      },
    }, 
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