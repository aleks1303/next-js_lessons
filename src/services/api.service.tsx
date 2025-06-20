type Props = {
    id: number,
    name: string,
    username: string
}

type PropsPost = {
    id: number,
    title: string
}

export const apiService = {
    getAllUsers: async ():Promise<Props[]> => {
        return await fetch('http://localhost:3000/users/api')
            .then((response) => response.json())
    },
    getAllPosts: async ():Promise<PropsPost[]> => {
    return await fetch('http://localhost:3000/posts/api')
        .then((response) => response.json())
    }
}