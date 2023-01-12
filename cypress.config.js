import { defineConfig } from 'cypress'

export default defineConfig({
	projectId: '',
	viewportWidth: 1920,
	viewportHeight: 1080,
	watchForFileChanges: false,
	chromeWebSecurity: false,
	reporter: 'mochawesome',
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
