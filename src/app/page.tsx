import Form from "next/form";
import {getUsers, usersAction} from "@/server-actions/serverAction";


const HomePage = async () => {
    const users = await getUsers()
    const classInput = "border-1 m-4"
  return (
    <div className="bg-black text-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <Form action={usersAction}>
        <input className={classInput} type="text" name={'name'} placeholder={'enter your name'}/>
        <input className={classInput} type="text" name={'username'} placeholder={'enter your username'}/>
        <button className={'w-30 border-1'}>send</button>
      </Form>

        <div>
            {
                users.map(user => <div key={user.id}>{user.id}. {user.name} {user.username}</div>)
            }
        </div>
    </div>
  );
}
export default HomePage