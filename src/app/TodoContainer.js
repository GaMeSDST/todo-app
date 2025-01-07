import Todos from "./Todos.js";
import TodoFooter from "./TodoFooter.js";

export default function TodoContainer() {
    return (
        <>
            <div
                id="todo-container"
                className="transition-all duration-200 bg-white dark:bg-[#25273c] w-[100%] mt-6 h-[30rem] rounded-lg flex flex-col justify-between"
            >
                <Todos />
                <TodoFooter />
            </div>
        </>
    );
}
