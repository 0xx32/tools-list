import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), TanStackRouterVite()],
	resolve: {
		alias: {
			'@': '/src',
			assets: '/src/assets',
			hooks: '/src/hooks',
			components: '/src/components',
			utils: '/src/utils',
			lib: '/src/utlibils',
		},
	},
})
