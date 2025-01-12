function clearCompleted() {
    localStorage.setItem("todos", JSON.stringify(JSON.parse(localStorage.getItem("todos")).filter((item) => item[1] == false)));
}

export default function TodoFooter({ setFilter, setRender }) {
    return (
        <>
            <div className="transition-all max-[650px]:justify-between max-[650px]:px-6 flex flex-row justify-evenly items-center border-t-2 text-[#9999a3] dark:text-[#60627b] border-[#e6e5ea] dark:border-[#37394e] w-[100%] h-[4rem]">
                <div>{`${JSON.parse(localStorage.getItem("todos")).length} items left`}</div>
                <div className="max-[650px]:hidden flex flex-row mr-8 ml-12">
                    <button onClick={() => setFilter("All")} className="hover:text-[#525161] dark:hover:text-[#c6c9dc] cursor-pointer">
                        All
                    </button>
                    <button onClick={() => setFilter("Active")} className="mx-4 hover:text-[#525161] dark:hover:text-[#c6c9dc] cursor-pointer">
                        Active
                    </button>
                    <button onClick={() => setFilter("Completed")} className="hover:text-[#525161] dark:hover:text-[#c6c9dc] cursor-pointer">
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
