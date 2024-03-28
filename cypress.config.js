const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require("cypress-image-diff-js/plugin");

module.exports = defineConfig({
  projectId: 'qkzn8r',
  e2e: {
    setupNodeEvents(on, config) {
		return getCompareSnapshotsPlugin(on, config);
    },
	experimentalStudio: true
  },
});
