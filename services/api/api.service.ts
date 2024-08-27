import axios, { Axios, AxiosInstance, AxiosResponse } from "axios";

const apiClient: AxiosInstance = axios.create({
    baseURL: '',
    timeout: 6000
})

export const apiService = async (endpoint: string, method: 'POST' | 'GET' | 'PATCH' | 'DELETE' = 'GET', data?: Record<string, unknown> | FormData) => {
    try {
        const config = {method, url: endpoint, ...(data && {data})}
        const response: AxiosResponse = await apiClient(config)
        return {data: response.data}
    } catch (error) {
        return error
    }
}