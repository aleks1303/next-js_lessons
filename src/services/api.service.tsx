
const baseUrl = 'https://jsonplaceholder.typicode.com'

export const apiService = {
    getAll: async <T,>(endpoint: string):Promise<T> => {
    return await fetch(`${baseUrl}${endpoint}`)
        .then((response) => response.json())
    }
}