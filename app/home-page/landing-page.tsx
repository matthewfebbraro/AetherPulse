'use client';

import { useEffect, useState } from 'react';
import NavBar from "@/components/nav-bar/nav-bar";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function LandingPage() {

    useEffect(() => {
        setPage("1");
    }, []);
    const router = useRouter();
    const [Page, setPage] = useState("1");

    const BG: Record<string, string> = {
        "homepage2": "/images/home-page-background.jpg",
    };

    return (
        <div className="flex flex-col items-center h-[98dvh]" >            <div
            className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url(/images/background-hex.jpg)",
                minHeight: '100%',
                height: '100%', // Not 100vh!
            }}
        />

            <div className="mt-2 w-full max-w-sm relative">
                <div className=" w-full  absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-cover bg-center bg-no-repeat " />
                </div>
                <div className="relative h-[85px] rounded-2xl   flex flex-col items-center justify-center bg-indigo-800/50">
                    <div className="absolute text-[20px] text-white font-semibold  mb-12 mr-28">powered by</div>
                    <div className="absolute text-[40px] text-white font-semibold  mt-2">AetherPulse</div>

                </div>
            </div>
            {Page === "1" && (
                <div>
                    <div className="mt-2 h-[75dvh] relative max-w-sm rounded-xl overflow-hidden ">
                        <div className="flex h-[75dvh] flex-col  rounded-xl pb-2 ">

                            <div className="p-4 text-[18px] text-white mb-2 text-center">
                                AetherPulse is a database-driven ecosystem of apps designed to help you track, analyze,
                                and transform your life—physically, mentally, and beyond.
                            </div>

                            <div className="text-xl font-semibold text-center text-white mb-4">Available Apps</div>

                            <div className="flex flex-row justify-center w-full">
                                <button onClick={() => {
                                    router.push('/bodysync-download');
                                }}
                                    className="flex flex-col items-center">
                                    <div className="bg-cover bg-center bg-no-repeat bg-[url('/icons/bodysync-icon.png')] rounded-xl h-[150px] w-[150px]">
                                        <div className="text-lg font-bold text-white mb-1 text-center ">BodySync</div>
                                    </div>
                                    <div className="text-lg font-bold text-white mb-1 text-center">Gamified Health & Fitness Journey</div>
                                </button>

                                {/* Add more app cards here */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <footer className=" text-white py-4 mt-auto">
                <div className="container mx-auto text-center">
                    <NavBar />
                </div>
            </footer>
        </div>


    )
};
