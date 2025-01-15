"use client";
import { useEffect, useState } from "react";
import Todo from "./Todo.js";

export default function Todos({ setRender, filter }) {
    console.log("todos");
    const [todos, setTodos] = useState();
    let hope;
    useEffect(() => {
        let value = JSON.parse(localStorage.getItem("todos"));
        if (filter == "Active") {
            value = value.filter((item) => item[1] == false);
        } else if (filter == "Completed") {
            value = value.filter((items) => items[1] == true);
        }
        setTodos(value);
    }, [setRender]);

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
