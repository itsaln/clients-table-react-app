import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint2'
import svgr from 'vite-plugin-svgr'

const getPath = (relativePath: string) => path.resolve(__dirname, relativePath)

// https://vite.dev/config/
export default defineConfig({
	server: {
		port: 3000
	},
	plugins: [eslint(), svgr(), react()],
	resolve: {
		alias: {
			'@': getPath('./src'),
			'@styles': getPath('./src/shared/styles'),

			'@pages': getPath('./src/pages'),
			'@widgets': getPath('./src/widgets'),
			'@features': getPath('./src/features'),
			'@entities': getPath('./src/entities'),
			'@shared': getPath('./src/shared')
		}
	},
	build: {
		chunkSizeWarningLimit: 4000,

		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					const name = assetInfo.names?.[0] ?? '' // Используем первый элемент массива или пустую строку

					if (name.endsWith('.css')) {
						return 'assets/css/[name].[hash][extname]'
					} else if (name.endsWith('.js')) {
						return 'assets/js/[name].[hash][extname]'
					} else {
						return 'assets/images/[name].[hash][extname]'
					}
				}
			}
		}
	}
})
