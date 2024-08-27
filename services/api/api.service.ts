import axios, { Axios, AxiosInstance, AxiosResponse } from "axios";

const apiClient: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    timeout: 6000
})

interface ApiError {
    message: string;
    status: string | number;
    error?: any;
}

export const apiService = async (endpoint: string, method: 'POST' | 'GET' | 'PATCH' | 'DELETE' = 'GET', data?: Record<string, unknown> | FormData) => {
    try {
        const config = { method, url: endpoint, ...(data && { data }) }
        const response: AxiosResponse = await apiClient(config)
        return { data: response.data }
    } catch (error) {
        let apiError: ApiError | undefined
        if (axios.isAxiosError(error)) {
            apiError = {
                message: error.response?.data?.message,
                status: error.response?.status || 'Error',
                error: error.response?.data
            }
        }
        console.log('api Error:', apiError)
        
        return { error: apiError }
    }
}