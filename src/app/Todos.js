import { useEffect } from "react";
import Todo from "./Todo.js";
export default function Todos() {
    let todos = JSON.parse(localStorage.getItem("todos"));
    let hope = todos.map((item) => {
        return (
            <>
                <Todo index={item[0]} value={item[1]} checked={item[2]} key={crypto.randomUUID()} />
            </>
        );
    });
    return (
        <>
            <div key={crypto.randomUUID()}>{hope}</div>
        </>
    );
}
