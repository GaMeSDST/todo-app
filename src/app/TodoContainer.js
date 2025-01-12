import Todos from "./Todos.js";
import AddTodo from "./AddTodo.js";
import TodoFooter from "./TodoFooter.js";
import { useState } from "react";

export default function TodoContainer() {
    const [render, setRender] = useState(false);
    const [filter, setFilter] = useState("All");
    return (
        <>
            <AddTodo setRender={() => setRender(!render)} />
            <div
                id="todo-container"
                className="transition-all duration-200 bg-white dark:bg-[#25273c] w-[100%] mt-6 h-[30rem] rounded-lg flex flex-col justify-between"
            >
                <Todos filter={filter} setRender={() => setRender(!render)} />
                <TodoFooter setRender={() => setRender(!render)} setFilter={(filter) => setFilter(filter)} />
            </div>
            <div className="min-[650px]:hidden transition-all duration-200 bg-white dark:bg-[#25273c] mt-4 flex flex-row justify-center items-center gap-6 text-[#9999a3] dark:text-[#60627b] w-[100%] h-[4rem]">
                <button onClick={() => setFilter("All")} className="hover:text-[#525161] dark:hover:text-[#c6c9dc] cursor-pointer">
                    All
                </button>
                <button onClick={() => setFilter("Active")} className="hover:text-[#525161] dark:hover:text-[#c6c9dc] cursor-pointer">
                    Active
                </button>
                <button onClick={() => setFilter("Completed")} className="hover:text-[#525161] dark:hover:text-[#c6c9dc] cursor-pointer">
                    Completed
                </button>
            </div>
            <p className="text-[#a7a6ac] dark:text-[#515164] mt-8">Drag and drop to reorder list</p>
        </>
    );
}
