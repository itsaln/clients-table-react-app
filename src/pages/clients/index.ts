import { lazy } from 'react'

export const ClientsLazy = lazy(() =>
	import('./ui/Clients').then((module) => ({ default: module.Clients }))
)
