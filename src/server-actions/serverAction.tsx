'use server'
import sql from 'better-sqlite3'
import {revalidatePath} from "next/cache";



const db = sql('meals.db')

export const saveAction = async (formData: FormData) => {
   const titleValue = formData.get('title')
   const creatorValue = formData.get('creator');
   db.prepare( `insert into meals (title, creator) values (?,?)`)
       .run(titleValue, creatorValue)
revalidatePath('/form')
};

type MealType = {
   id:number,
   title: string,
   creator: string
}

export const getMeals = async (): Promise<MealType[]> => {
   return db.prepare<MealType[]>(`select * from meals`).all() as MealType[]
}