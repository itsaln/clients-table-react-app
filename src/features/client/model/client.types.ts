export interface Client {
	id: string
	name: string
	inn: string
	status: 'active' | 'inactive'
	registeredAt: string
}
