export default function Todo() {
    return (
        <>
            <div className="group">
                <div className="flex flex-row items-center mt-2 border-b-2 border-[#e6e5ea] dark:border-[#37394e]">
                    <div className="flex flex-row items-center justify-center mt-[-0.3rem]">
                        <input
                            type="checkbox"
                            className="appearance-none peer w-8 h-8 rounded-full border-2 hover:border-[#8dabcf] border-[#eae9ee] dark:border-[#37394e] bg-transparent cursor-pointer checked:bg-gradient-to-br from-[#57ddff] to-[#c058f3] mx-6 "
                        ></input>
                        <div className="peer-checked:bg-[url(../../public/icon-check.svg)] w-3 h-2 ml-[0.1rem] pointer-events-none cursor-pointer absolute bg-no-repeat scale-125"></div>
                    </div>
                    <input
                        type="text"
                        placeholder="Create a new todo..."
                        className="bg-transparent h-[5rem] text-[1.5rem] text-[#3c3b41] placeholder:text-[#3c3b41] dark:text-[#c9cbe2] dark:placeholder:text-[#c9cbe2] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    ></input>
                    <button className="group-hover:bg-[url(../../public/icon-cross.svg)] w-[18px] h-[18px] absolute right-12 top-[14.5rem] scale-125"></button>
                </div>
            </div>
        </>
    );
}
