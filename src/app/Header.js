function handleThemeChange() {
    let body = document.querySelector("body").classList;
    let themeChanger = document.querySelector("#themeChanger").classList;
    if (body.contains("dark")) {
        body.remove("dark");
    } else {
        body.add("dark");
    }
}
export default function Header() {
    return (
        <>
            <div className="w-[100%] flex flex-row justify-between items-center">
                <div className="text-[50px] tracking-[1rem] font-extrabold text-white">TODO</div>
                <div
                    id="themeChanger"
                    onClick={handleThemeChange}
                    className="w-[26px] h-[26px] top-[-0.5rem] right-2 cursor-pointer relative scale-125 bg-[url(../../public/icon-moon.svg)] dark:bg-[url(../../public/icon-sun.svg)]"
                ></div>
            </div>
        </>
    );
}
