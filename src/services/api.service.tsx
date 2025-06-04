import {IUsers} from "@/models/IUsers";
import {IPosts} from "@/models/IPosts";
import {IComments} from "@/models/IComments";

const baseUrl = 'https://jsonplaceholder.typicode.com'

export const ApiService = {
    getAllUsers: async (): Promise<IUsers[]> => {
      return await fetch(`${baseUrl}/users`)
            .then((response) => response.json())
    },
    getAllPosts: async (): Promise<IPosts[]> => {
        return await fetch(`${baseUrl}/posts`)
            .then((response) => response.json())
    },
    getAllComments: async (): Promise<IComments[]> => {
        return await fetch(`${baseUrl}/comments`)
            .then((response) => response.json())
    },
    getCommentById: async (id:string): Promise<IComments> => {
      return await fetch(`${baseUrl}/comments/${id}`)
            .then((response) => response.json())
    },
    getUserById: async (id:string):Promise<IUsers> => {
      return await fetch(`${baseUrl}/users/${id}`)
          .then((response) => response.json())
    },
    getPostById: async (id:string):Promise<IPosts> => {
        return await fetch(`${baseUrl}/posts/${id}`)
            .then((response) => response.json())

    }
}