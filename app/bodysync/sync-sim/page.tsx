'use client';

import { useEffect, useState } from 'react';
import InfoNavBar from "@/components/nav-bar/infodex-nav-bar";
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
                    backgroundImage: "url(/images/aether-new-back.jpeg)",
                    minHeight: '100%',
                    height: '100%',
                }}
            />

            <div className="mt-2 w-full max-w-sm relative">
                <div className=" w-full  absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-cover bg-center bg-no-repeat " />
                </div>
                <div className="relative h-[85px] rounded-2xl  shadow-xl flex flex-col items-center justify-center bg-indigo-800/30">
                    <div className="absolute text-[20px] text-white font-semibold  mb-14">BodySync InfoDex</div>
                    <div className="absolute text-[40px] text-white font-semibold  mt-2">SyncSim</div>
                </div>
            </div>
            <div className="mt-2 h-[75dvh] relative max-w-sm rounded-xl overflow-hidden  shadow-xl">
                <div className="relative flex h-[75dvh] flex-col  rounded-xl pb-2 ">
                    <div>
                        <div className="p-4 text-[18px] text-white mb-2 text-center">
                            This section is still under construction. Soon it will be filled with detailed guides, tips, and insights to help you get the most out of BodySync. Check back often — new information is always being added.
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-gray-900 text-white py-4 mt-auto">
                <div className="container mx-auto text-center">
                    <InfoNavBar />
                </div>
            </footer>
        </div>


    )
};
