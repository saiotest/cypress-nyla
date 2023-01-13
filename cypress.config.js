import { defineConfig } from 'cypress'

export default defineConfig({
	projectId: '211qjb',
	watchForFileChanges: false,
	chromeWebSecurity: false,
	reporter: 'cypress-multi-reporters',
	reporterOptions: {
		configFile: 'jsconfig.json',
	},
	retries: 0,
	video: true,
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: 'https://site-e2e-git-develop-nyla.vercel.app/products/qa',
	},
	env: {
		endpoints: {
			pdp: "/products/qa" 
		}
	}
})
