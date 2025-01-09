export default function Todo({ index, value, checked, key }) {
    return (
        <>
            <form>
                <div className="">
                    <div className="relative group flex flex-row items-center mt-2 border-b-2 border-[#e6e5ea] dark:border-[#37394e]">
                        <div className="flex flex-row items-center justify-center mt-[-0.3rem]">
                            <input
                                defaultChecked={checked ? checked : checked}
                                type="checkbox"
                                className="appearance-none peer w-8 h-8 rounded-full border-2 hover:border-[#8dabcf] border-[#eae9ee] dark:border-[#37394e] bg-transparent cursor-pointer checked:bg-gradient-to-br from-[#57ddff] to-[#c058f3] max-[650px]:mr-4 mx-6 "
                            ></input>
                            <div className="peer-checked:bg-[url(../../public/icon-check.svg)] w-3 h-2 ml-[0.1rem] pointer-events-none cursor-pointer absolute bg-no-repeat scale-125"></div>
                        </div>
                        <input
                            type="text"
                            defaultValue={value}
                            placeholder="Create a new todo..."
                            className="bg-transparent h-[5rem] max-[650px]:text-[1.3rem] text-[1.5rem] text-[#3c3b41] placeholder:text-[#3c3b41] dark:text-[#c9cbe2] dark:placeholder:text-[#c9cbe2]"
                        ></input>
                        <button className="max-[650px]:bg-[url(../../public/icon-cross.svg)] max-[650px]:right-[1.5rem] group-hover:bg-[url(../../public/icon-cross.svg)] w-[18px] h-[18px] absolute right-12 top-[1.7rem] scale-125"></button>
                    </div>
                </div>
            </form>
        </>
    );
}
