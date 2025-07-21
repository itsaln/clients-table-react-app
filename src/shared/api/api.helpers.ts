export const errorCatch = (error: any): string =>
	error.response && error.response.data
		? typeof error.response.data.error.message === 'object'
			? error.response.data.error.message[0]
			: error.response.data.error.message
		: error.message
