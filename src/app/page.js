"use client";
import Header from "./Header.js";
import AddTodo from "./AddTodo.js";
import TodoContainer from "./TodoContainer.js";
import { useState } from "react";
function handleTheme() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.querySelector("body").classList.add("dark");
    } else {
        return;
    }
}
export default function Home() {
    const [dark, setDark] = useState();
    return (
        <>
            <div className="w-[100%] h-[300px] bg-no-repeat bg-cover bg-[url(../../public/bg-desktop-light.jpg)] dark:bg-[url(../../public/bg-desktop-dark.jpg)]"></div>
            <div id="container" className="max-[650px]:w-[20rem] w-[35rem] flex flex-col items-center mx-auto relative top-[-15rem] justify-center">
                <Header />
                <AddTodo />
                <TodoContainer />
            </div>
        </>
    );
}
