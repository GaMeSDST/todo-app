"use client";
function handleRemoval(event, setRender) {
    let index = event.target.id.match(/[0-9]/g).join("");
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleCheck(event) {
    let index = event.target.id.match(/[0-9]/g).join("");
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos[index][1] = event.target.checked;
    localStorage.setItem("todos", JSON.stringify(todos));
}

function handleChange(event) {
    let index = event.target.id.match(/[0-9]/g).join("");
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos[index][0] = event.target.value;
    localStorage.setItem("todos", JSON.stringify(todos));
}

function dragStartHandler(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
}

function dragLeaveHander(e) {
    e.preventDefault();
    let hoverId = e.target.id.match(/[0-9]/g);
    if (hoverId == null) {
        hoverId = e.target.parentElement.id.match(/[0-9]/g);
    } else if (hoverId == null) {
        hoverId = e.target.parentElement.parentElement.id.match(/[0-9]/g);
    } else {
        hoverId.join("");
    }
    let hoveredOnElement = document.getElementById("movable" + parseInt(hoverId));
    hoveredOnElement.classList.remove("border-t-2");
    hoveredOnElement.classList.remove("border-b-2");
    hoveredOnElement.classList.remove("border-green-700");
}

function dragOverHandler(e) {
    e.preventDefault();
    let hoverId = e.target.id.match(/[0-9]/g);
    if (hoverId == null) {
        hoverId = e.target.parentElement.id.match(/[0-9]/g);
    } else if (hoverId == null) {
        hoverId = e.target.parentElement.parentElement.id.match(/[0-9]/g);
    } else {
        hoverId.join("");
    }
    let hoveredOnElement = document.getElementById("movable" + parseInt(hoverId));

    let rect = e.target.parentElement.getBoundingClientRect();
    let y = e.clientY - rect.top;

    if (y < 81.6 / 2) {
        hoveredOnElement.classList.add("border-t-2");
        hoveredOnElement.classList.remove("border-b-2");
    } else if (y > 81.6 / 2) {
        hoveredOnElement.classList.add("border-b-2");
        hoveredOnElement.classList.remove("border-t-2");
    }
    hoveredOnElement.classList.add("border-green-700");
}
export default function Todo({ index, value, checked, setRender }) {
    return (
        <>
            <form
                id={"movable" + index}
                draggable
                onDragStart={(e) => dragStartHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
                onDragLeave={(e) => dragLeaveHander(e)}
                onSubmit={(e) => e.preventDefault()}
                className=""
            >
                <div
                    id={"inner" + index}
                    className="relative transition-all group flex flex-row items-center mt-2 border-b-2 border-[#e6e5ea] dark:border-[#37394e]"
                >
                    <div className="flex flex-row items-center justify-center mt-[-0.3rem]">
                        <input
                            id={`checkbox_${index}`}
                            onClick={(index) => {
                                handleCheck(index);
                                setRender();
                            }}
                            defaultChecked={checked ? checked : checked}
                            type="checkbox"
                            className="appearance-none transition-all peer w-8 h-8 rounded-full border-2 max-[650px]:mr-[1.4rem] hover:border-[#8dabcf] border-[#eae9ee] dark:border-[#37394e] bg-transparent cursor-pointer checked:bg-gradient-to-br from-[#57ddff] to-[#c058f3] mx-6 "
                        ></input>
                        <div className="peer-checked:bg-[url(../../public/icon-check.svg)] w-3 h-2 ml-[0.1rem] pointer-events-none cursor-pointer absolute bg-no-repeat scale-125"></div>
                    </div>
                    <input
                        id={"input" + index}
                        onChange={(event) => handleChange(event)}
                        type="text"
                        defaultValue={value}
                        placeholder="Create a new todo..."
                        className={`${
                            checked && "line-through"
                        } w-[25rem] bg-transparent max-[650px]:w-[12rem] h-[5rem] max-[650px]:text-[1.3rem] text-[1.5rem] text-[#3c3b41] placeholder:text-[#3c3b41] dark:text-[#c9cbe2] dark:placeholder:text-[#c9cbe2]`}
                    ></input>
                    <button
                        type="button"
                        onClick={(event) => {
                            handleRemoval(event);
                            setRender();
                        }}
                        id={"remove_" + index}
                        className="max-[650px]:bg-[url(../../public/icon-cross.svg)] max-[650px]:right-[1.5rem] group-hover:bg-[url(../../public/icon-cross.svg)] w-[18px] h-[18px] absolute right-12 top-[1.7rem] scale-125"
                    ></button>
                </div>
            </form>
        </>
    );
}
