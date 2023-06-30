import { TodoItem } from "@/app/components/Todoitem"
import { prisma } from "@/app/db"
import Link from "next/link"

function getTodos() {
    return prisma.todo.findMany()
}

async function toggleTodo(id: string, complete: boolean) {
    "use server"

    await prisma.todo.update({ where: { id }, data: { complete } })
}

export default async function Todolist() {
    const todos = await getTodos()

    return (
    <>
        <div className="h-screen pt-12">
            <header className="flex justify-around items-center mb-4 ">
            <h1 className="text-5xl">Todos</h1>
            <Link
                className="border border-slate-300 text-slate-300 px-2 py-1 text-4xl rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
                href="/new"
            >
                New
            </Link>
            </header>
            <ul className="flex flex-col justify-center">
            {todos.map(todo => (
                <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}  />
            ))}
            </ul>
        </div>
    </>
    )
}