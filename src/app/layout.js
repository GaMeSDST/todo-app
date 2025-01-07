"use client";
import { useEffect } from "react";
import "./globals.css";

export default function RootLayout({ children }) {
    function handleTheme() {
        let body = document.querySelector("body").classList;
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            body.add("dark");
            body.remove("hidden");
        } else {
            body.remove("hidden");
        }
    }

    useEffect(() => {
        handleTheme();
    });

    return (
        <>
            <html className="">
                <head>
                    <title>todo-app</title>
                    <link rel="icon" href="favicon-32x32.png"></link>
                    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                    <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
                        rel="stylesheet"
                    ></link>
                </head>
                <body className="transition-all duration-200 dark:bg-[#181824] bg-[#fafafa] font-josef hidden">{children}</body>
            </html>
        </>
    );
}
