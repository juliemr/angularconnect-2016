exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    '../dist-e2e/**/*.js'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:9095/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },
  useAllAngular2AppRoots: true,
};
