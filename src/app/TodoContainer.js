import Todos from "./Todos.js";
import AddTodo from "./AddTodo.js";
import TodoFooter from "./TodoFooter.js";
import { useState } from "react";
function dropHandler(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text/plain");
    let hoverId = data.match(/[0-9]/g).join("");

    let hoverOnId = ev.target.parentElement.id.match(/[0-9]/g);
    if (hoverOnId == null) hoverOnId = ev.target.parentElement.parentElement.id.match(/[0-9]/g);
    if (hoverOnId == null) hoverOnId = ev.target.parentElement.parentElement.parentElement.id.match(/[0-9]/g);
    hoverOnId.join("");

    let rect = ev.target.parentElement.getBoundingClientRect();
    let x = ev.clientX - rect.left;
    let y = ev.clientY - rect.top;

    if (y < 81.6 / 2) {
        let todos = JSON.parse(localStorage.getItem("todos"));
        let removed = todos.splice(hoverId, 1);
        todos.splice(hoverOnId, 0, removed[0]);
        localStorage.setItem("todos", JSON.stringify(todos));
    } else if (y > 81.6 / 2) {
        if (hoverId - 1 == hoverOnId) return;
        let todos = JSON.parse(localStorage.getItem("todos"));
        let removed = todos.splice(hoverId, 1);
        todos.splice(hoverOnId, 0, removed[0]);
        localStorage.setItem("todos", JSON.stringify(todos));
    }
}
function dragOverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}

export default function TodoContainer() {
    const [render, setRender] = useState(false);
    const [filter, setFilter] = useState("All");
    return (
        <>
            <AddTodo setRender={() => setRender(!render)} />
            <div
                onDrop={(e) => {
                    dropHandler(e);
                    setRender(!render);
                }}
                onDragOver={(e) => dragOverHandler(e)}
                id="todo-container"
                className="transition-all duration-200 bg-white dark:bg-[#25273c] w-[100%] mt-6 h-[30rem] rounded-lg flex flex-col justify-between"
            >
                <Todos filter={filter} setRender={() => setRender(!render)} />
                <TodoFooter filter={filter} setRender={() => setRender(!render)} setFilter={(filter) => setFilter(filter)} />
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
