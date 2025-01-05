"use client";
export default function Home() {
    return (
        <>
            <div className="w-[100%] h-[300px] bg-no-repeat bg-cover" style={{ backgroundImage: "url(/bg-desktop-dark.jpg)" }}></div>
            <div className="w-[35rem] flex flex-col items-center mx-auto relative top-[-15rem] justify-center">
                <div className="w-[100%] flex flex-row justify-between items-center">
                    <div className="text-[50px] tracking-[1rem] font-extrabold">TODO</div>
                    <div
                        className="w-[26px] h-[26px] top-[-0.5rem] right-2 relative scale-125"
                        style={{ backgroundImage: "url(/icon-sun.svg" }}
                    ></div>
                </div>
                <div className="bg-[#25273c] w-[100%] mt-4 h-20 rounded-lg">
                    <form className="">
                        <input type="checkbox" className="mx-6"></input>
                        <input type="text" placeholder="Create a new todo..." className="bg-transparent h-[5rem] text-[1.5rem] text-[#4768b]"></input>
                    </form>
                </div>
                <div className="bg-[#25273c] w-[100%] mt-6 h-[30rem] rounded-lg flex flex-col justify-between">
                    <div>
                        <div className="mt-2 border-b-2 border-[#37394e]">
                            <input type="checkbox" className="mx-6"></input>
                            <input
                                type="text"
                                placeholder="Create a new todo..."
                                className="bg-transparent h-[5rem] text-[1.5rem] text-[#4768b]"
                            ></input>
                        </div>
                    </div>
                    <div className="flex flex-row justify-evenly items-center border-t-2 border-[#37394e] w-[100%] h-[4rem]">
                        <div className="text-[#60627b]">5 items left</div>
                        <div className="flex flex-row mr-8 ml-12">
                            <button className="text-[#60627b] hover:text-[#c6c9dc] cursor-pointer">All</button>
                            <button className="mx-4 text-[#60627b] hover:text-[#c6c9dc] cursor-pointer">Active</button>
                            <button className="text-[#60627b] hover:text-[#c6c9dc] cursor-pointer">Completed</button>
                        </div>
                        <div className="text-[#60627b] hover:text-[#c6c9dc] cursor-pointer">Clear Completed</div>
                    </div>
                </div>
            </div>
        </>
    );
}
