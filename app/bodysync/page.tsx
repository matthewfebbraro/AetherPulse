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
                backgroundImage: "url(/images/background-hex.jpg)",
                minHeight: '100%',
                height: '100%',
            }}
        />

            <div className="mt-2 w-full max-w-sm relative">
                <div className=" w-full  absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-cover bg-center bg-no-repeat " />
                </div>
                <div className="relative h-[85px] rounded-2xl   flex flex-col items-center justify-center bg-indigo-800/50">
                    <div className="absolute text-[20px] text-white font-semibold  mb-14">powered by BodySync</div>
                    <div className="absolute text-[40px] text-white font-semibold  mt-2">InfoDex</div>
                </div>
            </div>
            <div className="mt-2 h-[75dvh] relative max-w-sm rounded-xl overflow-hidden">
                <div className="relative flex h-[75dvh] flex-col  rounded-xl pb-2 ">
                    <div>
                        <div className="p-4 text-[18px] text-white mb-2 text-center">
                            Welcome to the BodySync InfoDex — your central hub for guidance, tips, and deep
                            dives into every part of the BodySync experience. Here you&apos;ll find clear
                            explanations of core features, how to track your progress, and strategies for
                            getting the most out of your training, nutrition, and sync reports. Whether you&apos;re
                            looking up nutrient details, exploring the meaning of crowns and achievements, or
                            unlocking the hidden glyphs, the InfoDex is designed to keep everything in one place.
                            Think of it as your built-in manual and knowledge base — always accessible, always
                            evolving with new updates.
                        </div>
                    </div>
                </div>
            </div>
            <footer className="text-white py-4 mt-auto">
                <div className="container mx-auto text-center">
                    <InfoNavBar />
                </div>
            </footer>
        </div>


    )
};
