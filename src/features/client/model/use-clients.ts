import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import type { Client } from '@features/client'
import { API_URL } from '@shared/constants/app'

export const useClients = () => {
	const {
		data: clients,
		isLoading: isLoadingClients
	} = useQuery({
		queryKey: ['get clients'],
		queryFn: () => axios.get<Client[]>(`${API_URL}/clients`),
		select: ({ data }) => data
	})

	return {
		clients: clients || [],
		isLoading: isLoadingClients
	}
}
