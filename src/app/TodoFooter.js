"use client";

import { useEffect, useState } from "react";

function clearCompleted() {
    if (localStorage.getItem("todos") != null)
        localStorage.setItem("todos", JSON.stringify(JSON.parse(localStorage.getItem("todos")).filter((item) => item[1] == false)));
}
export default function TodoFooter({ setFilter, setRender, filter }) {
    const [todos, setTodos] = useState();
    useEffect(() => {
        let value = JSON.parse(localStorage.getItem("todos"));
        if (value != null) {
            value = value.filter((item) => item[1] == false).length;
            setTodos(value);
        }
    }, [setRender]);
    return (
        <>
            <div className="transition-all max-[650px]:justify-between max-[650px]:px-6 flex flex-row justify-evenly items-center border-t-2 text-[#9999a3] dark:text-[#60627b] border-[#e6e5ea] dark:border-[#37394e] w-[100%] h-[4rem]">
                <div>{`${todos == undefined ? 0 : todos} items left`}</div>
                <div className="max-[650px]:hidden flex flex-row mr-8 ml-12">
                    <button
                        onClick={() => setFilter("All")}
                        className={`${filter == "All" && "text-[#5776c3] "}hover:text-[#525161] dark:hover:text-[#c6c9dc] cursor-pointer`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter("Active")}
                        className={`${filter == "Active" && "text-[#5776c3] "} mx-4 hover:text-[#525161] dark:hover:text-[#c6c9dc] cursor-pointer`}
                    >
                        Active
                    </button>
                    <button
                        onClick={() => setFilter("Completed")}
                        className={`${filter == "Completed" && "text-[#5776c3] "} hover:text-[#525161] dark:hover:text-[#c6c9dc] cursor-pointer`}
                    >
                        Completed
                    </button>
                </div>
                <button
                    onClick={() => {
                        clearCompleted();
                        setRender();
                    }}
                    className="hover:text-[#525161] dark:hover:text-[#c6c9dc] cursor-pointer"
                >
                    Clear Completed
                </button>
            </div>
        </>
    );
}
