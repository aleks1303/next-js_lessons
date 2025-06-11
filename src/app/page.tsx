import Form from "next/form";
import {getMeals, saveAction} from "@/server-actions/serverAction";

export default async function Home  () {
    const meals = await getMeals()
  const classInput = 'border-1 m-2'
  return (
    <div className=" bg-black text-white grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <Form action={saveAction}>
        <input className={classInput} type="text" name={'title'} placeholder={'enter title'}/>
        <input className={classInput} type="text" name={'creator'} placeholder={'enter creator'}/>
        <button className={'border-1 w-20'}>sent</button>
      </Form>
        <div>
            {meals.map(meal => <div key={meal.id}>{meal.id}. {meal.title} {meal.creator}</div>)}
        </div>
    </div>
  );
}
