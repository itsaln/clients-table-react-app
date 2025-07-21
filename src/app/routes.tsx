import { createBrowserRouter, Navigate } from 'react-router'
import { ClientsLazy } from '@pages/clients'
import { ROUTES } from '@shared/constants'

export const router = createBrowserRouter([
	{
		path: ROUTES.home,
		element: <Navigate to={ROUTES.clients} />
	},
	{
		path: ROUTES.clients,
		element: <ClientsLazy />
	}
])
