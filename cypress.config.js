const {defaultOptions} = require('@cypress/browserify-preprocessor');
const {defineConfig} = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
	e2e: {
		baseUrl: 'http://localhost:3000',
		supportFile: './cypress/support/index.ts',
		specPattern: '**/*.feature',
		async setupNodeEvents(on, config) {
			on(
				'file:preprocessor',
				cucumber({
					...defaultOptions,
					typescript: require.resolve('typescript'),
				})
			);

			return config;
		},
	},
	retries: 0,
});
