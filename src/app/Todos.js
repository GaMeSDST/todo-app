"use client";
import { useEffect } from "react";
import Todo from "./Todo.js";

export default function Todos({ setRender, filter }) {
    let todos;
    todos = JSON.parse(localStorage.getItem("todos"));

    let hope;

    if (filter == "Active") {
        todos = todos.filter((item) => item[1] == false);
    } else if (filter == "Completed") {
        todos = todos.filter((items) => items[1] == true);
    }

    if (todos != null) {
        hope = todos.map((item, index) => {
            return <Todo setRender={setRender} index={index} value={item[0]} checked={item[1]} key={crypto.randomUUID()} />;
        });
    } else {
        return <div></div>;
    }
    return (
        <>
            <div id="todos" className="h-[26rem] overflow-auto">
                {hope}
            </div>
        </>
    );
}
