"use client";
import Header from "./Header.js";
import TodoContainer from "./TodoContainer.js";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="w-[100%] h-[300px] relative">
                <Image
                    alt="background picture"
                    className="bg-no-repeat bg-cover bg-[url(../../public/bg-desktop-light.jpg)] dark:bg-[url(../../public/bg-desktop-dark.jpg)] max-[650px]:bg-[url(../../public/bg-mobile-light.jpg)] max-[650px]:dark:bg-[url(../../public/bg-mobile-dark.jpg)]"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    layout="fill"
                    loading="eager"
                />
            </div>
            <div id="container" className="max-[650px]:w-[20rem] w-[35rem] flex flex-col items-center mx-auto relative top-[-15rem] justify-center">
                <Header />
                <TodoContainer />
            </div>
        </>
    );
}
