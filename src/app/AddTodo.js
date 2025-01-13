function handleAdding(event) {
    event.preventDefault();
    let value = document.querySelector("#adding_value").value;

    if (JSON.parse(localStorage.getItem("todos")) == null) {
        localStorage.setItem("todos", JSON.stringify([[value, false]]));
    } else {
        let todos = JSON.parse(localStorage.getItem("todos"));
        todos.push([value, false]);
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    document.querySelector("#adding_value").value = "";
}
export default function AddTodo({ setRender }) {
    return (
        <>
            <div className="transition-all duration-200 bg-white dark:bg-[#25273c] w-[100%] mt-4 h-20 rounded-lg">
                <form
                    className="flex"
                    onSubmit={(event) => {
                        handleAdding(event);
                        setRender();
                    }}
                >
                    <div className="flex flex-row items-center justify-center mt-[-0.3rem]">
                        <input
                            type="checkbox"
                            className="transition-all appearance-none peer w-8 h-8 rounded-full bg-transparent border-2 border-[#f2f2f4] dark:border-[#37394e] max-[650px]:mr-4 mx-6 "
                        ></input>
                    </div>
                    <input
                        id="adding_value"
                        type="text"
                        placeholder="Create a new todo..."
                        className="w-full bg-transparent h-[5rem] max-[650px]:text-[1.3rem] text-[1.5rem] text-[#3c3b41] placeholder:text-[#3c3b41] dark:text-[#c9cbe2] dark:placeholder:text-[#c9cbe2]"
                    ></input>
                </form>
            </div>
        </>
    );
}
