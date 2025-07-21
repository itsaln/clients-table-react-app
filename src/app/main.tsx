import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { QueryProvider } from './providers/QueryProvider'
import { router } from './routes'

import './styles/global.scss'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryProvider>
			<RouterProvider router={router} />
		</QueryProvider>
	</StrictMode>
)
