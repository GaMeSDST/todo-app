import Todo from "./Todo.js";
export default function Todos() {
    let todos = JSON.parse(localStorage.getItem("todos"))[0];
    return (
        <>
            <Todo value={todos[1]} index={todos[0]} checked={todos[2]} />
        </>
    );
}
