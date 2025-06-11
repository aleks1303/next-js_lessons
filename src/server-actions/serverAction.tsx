'use server'
import sql from 'better-sqlite3';
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";


const db = sql('users.db')
export const usersAction = async (formData: FormData) => {
   const nameValue = formData.get('name')
   const usernameValue = formData.get('username')
   db.prepare(`insert into users (name, username) values (?,?)`)
       .run(nameValue, usernameValue)
revalidatePath('/')
   redirect('/about')
}

type UserType = {
   id:number,
   name: string,
   username:string
}

export const getUsers = async ():Promise<UserType[]> => {
return db.prepare<UserType[]>(`select * from users`).all() as UserType[]
}