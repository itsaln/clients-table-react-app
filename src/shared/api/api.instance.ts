import axios from 'axios'
import { API_URL } from '../constants/app'

export const apiInstance = axios.create({
	baseURL: API_URL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json'
	}
})
