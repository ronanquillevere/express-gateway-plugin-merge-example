/*eslint no-console: "warn"*/
import policy from './merge-example-policy';

export default {
  version: 'v1.0', //plugin engine version
  init: function (pluginContext) {
    pluginContext.registerPolicy(policy);
    console.log('merge-example-policy registered');

    pluginContext.eventBus.on('hot-reload', function ({ type, newConfig }) {
      console.log('hot-reload', type, newConfig);
    });
    pluginContext.eventBus.on('http-ready', function ({ httpServer }) {
      console.log('http ready');
    });
    pluginContext.eventBus.on('https-ready', function ({ httpsServer }) {
      console.log('https ready');
    });
    pluginContext.eventBus.on('admin-ready', function ({ adminServer }) {
      console.log('admin ready');
    });
  }
};
