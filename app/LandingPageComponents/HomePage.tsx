'use client';

import { useEffect, useState } from 'react';
import PageFadeWrapper from "@/Backgrounds/PageFadeWrapper"
import { motion, AnimatePresence } from "framer-motion";
import { getGlobalDataState } from "@/app/Global/store/globalStoreInstance";
import { useGlobalData } from "@/app/Global/GlobalData";

export default function HomeComp() {

    const HomeDefault = useGlobalData((s) => s.HomeDefault);
    useEffect(() => {
        setSelectedHomePage(HomeDefault);
    }, []);


    const selectedHomePage = useGlobalData((s) => s.selectedHomePage);
    const pageView = selectedHomePage || "home";

    const setSelectedHomePage = useGlobalData((s) => s.setSelectedHomePage);

    const BG: Record<string, string> = {
        "homepage2": "/images/aetherpulsebackground.jpg",
    };
    const backgroundURL = BG["homepage2"];

    return (
        <>
            <PageFadeWrapper>


                <div
                    className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url(/images/aetherpulsebackground.jpg)",
                        minHeight: '100%',
                        height: '100%', // Not 100vh!
                    }}
                />




                <div className=" z-0 scrollbar-hide">
                    {/*PAGE ONE === Home*/}
                    <div className="rounded-xl z-50">
                        <AnimatePresence mode="wait">
                            {pageView === "home" && (
                                <motion.div
                                    key="home"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}>
                                    <>

                                        <div className="">
                                            <div className="z-10 flex justify-center">
                                                <div className="fixed top-4 px-2 w-full max-w-md">
                                                    <div className="h-32  bg-cover bg-center bg-no-repeat rounded-2xl border 
        border-white/30 shadow-xl text-white text-7xl glowing-button2 mb-2">
                                                        <div className="h-32 flex flex-col pb-5 items-center bg-indigo-500/30 justify-center inset-0 text-center rounded-xl">
                                                            <div className="flex items-center gap-2">AetherPulse</div>
                                                            <h2 className="text-lg font-bold text-white">

                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>





                                            <div className="z-20 relative flex justify-center ">
                                                <div className="fixed bottom-14 px-2 w-full grid grid-cols-2 gap-3 max-w-md">



                                                </div>
                                            </div>
                                        </div>
                                    </>
                                </motion.div>)}

                            {/*PAGE 2 - STATS ECHO*/}
                            {pageView === "login" && (
                                <motion.div
                                    key="login"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6 }}>
                                    <>
                                        <div className="z-20 relative flex justify-center ">
                                            <div className="fixed bottom-14 px-2 w-full grid grid-cols-2 gap-3 max-w-md">



                                            </div>
                                        </div>


                                    </>
                                </motion.div>)}

                        </AnimatePresence>

                    </div>

                </div>


            </PageFadeWrapper>
        </>
    )
};
