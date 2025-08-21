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
        <div className="flex flex-col items-center" >
            <div
                className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url(/images/home-page-background.jpg)",
                    minHeight: '100%',
                    height: '100%',
                }}
            />

            <div className="mt-2 w-full max-w-sm relative">
                <div className=" w-full  absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/images/aether-logo-image.jpg')]" />
                </div>
                <div className="relative h-[85px] rounded-2xl border border-indigo-300 shadow-xl flex flex-col items-center justify-center bg-[rgba(20,55,129,0.29)]">
                    <div className="absolute text-[20px] text-gray-600  mb-14">powered by AetherPulse</div>
                    <div className="absolute text-[50px] text-gray-600  mt-2">BodySync</div>
                </div>
            </div>
            <div className="mt-2 h-[75dvh] relative max-w-sm rounded-xl overflow-hidden border border-indigo-300 shadow-xl">
                <div className="relative flex h-[75dvh] flex-col bg-[rgba(77,89,150,0.3)] rounded-xl pb-2 ">
                    {Page === "1" && (
                        <div>
                            <div className="p-4 text-[18px] text-gray-600 mb-2 text-center">
                                BodySync is a fitness and wellness tracker built to feel like a game.
                                It unites your workouts, hydration, sleep, nutrition, and daily habits
                                into one clean system, then rewards your progress with experience points,
                                unlockable themes, and hidden glyphs. More than just logging data, BodySync
                                makes growth visible and motivating — turning consistency into a journey
                                you actually want to keep playing.
                            </div>
                            <div className="absolute bottom-20 flex justify-center w-full">
                                <button onClick={() => setPage("4")} className="relative mt-2 m-3 p-2 flex rounded-xl justify-center h-[85px] z-20 w-[94%] flex items-center 
            justify-center  
           border border-indigo-300 overflow-hidden">
                                    <p className="absolute h-full w-full bg-[rgba(39,87,133,0.4)]" />
                                    <p className="text-[28px] font-semibold pb-1 z-20">Download APK</p>
                                </button>
                            </div>
                        </div>
                    )}
                    {Page === "2" && (
                        <div>
                            <div className="font-semibold text-[42px] text-gray-600 mb-2 text-center bg-[rgba(20,55,129,0.29)] w-full pb-1">Free Version</div>

                            <div className="overflow-y-auto h-[380px]">
                                <div className="p-4 text-gray-600 space-y-2 text-center">

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-gray-500">Track for Free</p>
                                    <p>- You dont need to spend money to make progress. With the free features alone, you can track
                                        your health, see your trends, and keep moving forward.
                                    </p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-gray-500">Gamified Experience</p>
                                    <p>- earn experience points to spend on customizables</p>
                                    <p>- earn titles</p>
                                    <p>- earn Robots, Crowns, Diamonds & More.</p>
                                    <p>- Holographic avatar appears male or female depending on gender selected.</p>
                                    <p>- change Color Themes, Background Image, Titles & Experience Icons</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-gray-500">Daily Motivational Quote</p>
                                    <p className="text-[18px] font-semibold">--Coming Soon--</p>
                                    <p>- Daily Motivational in-app Notifications.</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-gray-500">SyncSimulator</p>
                                    <p>- in depth TDEE calculator powered by FusionCore.</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-gray-500">HydroSync</p>
                                    <p>- Water tracking</p>
                                    <p>- set a daily Water goal to achieve.</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-gray-500">DawnSync</p>
                                    <p>- Weight Tracking & set a weight Goal (or disable weight goal)</p>
                                    <p>- Sleep Duration Tracking</p>
                                    <p>- Sleep Quality Tracking</p>
                                    <p>- RecoveryTDEE</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-gray-500">DuskSync</p>
                                    <p>- Steps Tracking</p>
                                    <p>- exercise Minutes Tracking</p>
                                    <p>- ActiveTDEE Tracking</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-gray-500">Daily Energy Burn</p>
                                    <p>- Including Calorie Goal Adjustment (-500 to +500 kcal)</p>
                                    <p>- Including thermic effect of food. (10%)</p>
                                    <p>- Pie Chart / macro percent adjustments</p>
                                    <p>- Vitamin & Mineral Breakdown</p>
                                    <p>- 7 day Rolling average ActiveTDEE</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-gray-500">SyncReport</p>
                                    <p>- Visual Trends & graphs For Daily Syncs.</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-gray-500">SyncAnalysis</p>
                                    <p>- Your data quantified to help you better understand your habits.</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-gray-500">Hidden Glyphs Game</p>
                                    <p className="text-[18px] font-semibold">--Coming Soon--</p>
                                    <p>- Find and unlock 12 color themes and backgrounds</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-gray-500">Experience Points</p>
                                    <p>- ExpSync (with friends)</p>
                                    <p>- ExpStore (unlock customizables)</p>
                                    <p>- ExpOverview (point allocation)</p>
                                    <p>- ExpLevels (Exp Multipliers Coming Soon)</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-gray-500">Nighthawk mode</p>
                                    <p>- 3am date offset, for all the nighthawks</p>
                                </div>

                            </div>

                        </div>
                    )}
                    {Page === "3" && (
                        <div>
                            <div className="font-semibold text-[42px] text-gray-600 mb-2 text-center bg-[rgba(20,55,129,0.29)] w-full pb-1">Pro Version</div>
                            <div className="overflow-y-auto h-[380px]">
                                <div className="p-4 text-gray-600 space-y-2 text-center">

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-gray-500">$5.00 Subscription</p>
                                    <p>- Unlock every premium feature for only $5/month. No grind, no hidden costs — just tools to push your progress further</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-gray-500">Fitness Tracker</p>
                                    <p>- Full Workout History</p>
                                    <p>- Workout tracking</p>
                                    <p>- Save 3 Workouts per Day</p>
                                    <p>- PR notification mid-workout</p>
                                    <p>- Hall of Personal Records - movement mastery challenge</p>
                                    <p>- Track Weekly Muscle Volume with 52 muscles.</p>
                                    <p>- 319 exercise Movements library</p>
                                    <p>- Built in workout Duration (Tracks start and end time of workouts)</p>
                                    <p>- Save custom movement profiles</p>
                                    <p>- Freestyle workout Mode</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-gray-500">Nutrition Log</p>
                                    <p className="text-[18px] font-semibold">--Coming Soon--</p>
                                    <p>- Full Nutriton History</p>
                                    <p>- Calorie Tracker</p>
                                    <p>- Sync with ActiveTDEE from free tier.</p>
                                    <p>- 8k built in food library to choose from.</p>
                                    <p>- Add your own foods & save meals</p>
                                    <p>- Nutrient Bars that fill as you log.</p>
                                    <p>- 5 Meals instead of traditional 4.</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-gray-500">Daily Tasks</p>
                                    <p>- Full Tasks History with Daily Tasks Score</p>
                                    <p>- Grocery list maker.</p>
                                    <p>- Stay on track with tasks, chores, and errands.</p>
                                    <p>- Quick add tasks</p>
                                    <p>- Save to multi-add list for re-adding common tasks</p>
                                    <p>- Earn experience for completing tasks.</p>
                                    <p>- Static long-term goals List.</p>
                                    <p>- Delete un-used tasks</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-gray-500">Hidden Glyph Game</p>
                                    <p className="text-[18px] font-semibold">--Coming Soon--</p>
                                    <p>- Unlock even more and Backgrounds & Experience Icons</p>


                                </div>

                            </div>

                        </div>
                    )}
                    {Page === "4" && (
                        <div>
                            <div className="font-semibold text-[36px] text-gray-600 mb-2 text-center bg-[rgba(20,55,129,0.29)] w-full pb-1">Pre-Release Access</div>
                            <div className="p-4 overflow-y-auto h-[380px]">
                                <div className="text-gray-600 space-y-2 text-center">
                                    <p className="text-[18px] pt-2 pb-3 px-3 font-semibold bg-white/30 rounded-xl pb-1 text-center text-gray-500 text-lg italic mt-2">
                                        Scroll down to access your download & installation guide.
                                    </p>
                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1"></p>
                                    <p>
                                        You are accessing a pre-release version of <span className="font-semibold">Adaptive Metabolic Interface v3.0</span>.
                                        This build is functional and includes most major features, but may still contain occasional bugs or unfinished elements.
                                    </p>
                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1"></p>
                                    <p>
                                        If you encounter any issues or have feedback to share, please contact us at
                                        <a href="mailto:aetherpulse.one@protonmail.com" className="underline text-blue-500 ml-1">
                                            aetherpulse.one@protonmail.com
                                        </a>.
                                    </p>
                                    <p>
                                        Your insights are deeply appreciated as we continue refining the experience.
                                    </p>

                                </div>
                                <div className="mt-2 max-w-sm z-10 flex rounded-xl justify-center h-[85px] z-20 w-full flex items-center 
            justify-center bg-contain bg-center bg-no-repeat bg-[url('/images/android-banner.png')] ">
                                </div>
                                <div className="text-gray-600 space-y-2 text-center">
                                    <p>BodySync is only available on <span className="font-semibold">Android</span>.</p>
                                </div>
                                <div className="mt-2 bg-indigo-300/45 border border-white/20 rounded-xl p-4 text-gray-600 space-y-2 text-sm">
                                    <p className="font-semibold">How to Install</p>
                                    <p>
                                        This app is not from the Play Store, so Android may block the install at first.
                                    </p>
                                    <p>
                                        If prompted, tap <span className="italic">“Settings”</span> and enable
                                        <span className="font-semibold"> “Allow from this source”</span>.
                                        Then return and tap <span className="italic">“Install”</span> again.
                                    </p>
                                    <p className="text-gray-600/50 italic text-center">You only need to do this once.</p>
                                </div>
                                <button
                                    onClick={() => {
                                        window.location.href = "https://pub-3363d301a0464ea9b80627e178331274.r2.dev/BodySync-v2.1.0.apk";
                                    }}
                                    className="bg-[rgba(39,87,133,0.4)] relative mt-2 max-w-sm w-full z-10 flex rounded-xl justify-center h-[85px] z-20 flex-col w-full flex items-center 
            justify-center 
           border border-indigo-300 overflow-hidden">
                                    <p className="absolute pb-6 text-[28px] font-semibold">Unlock Sync Access</p>
                                    <p className=" absolute pt-6 text-base text-white mt-2 italic">APK Download — 113MB</p>
                                </button>
                            </div>
                        </div>
                    )}
                    <div className="absolute bottom-1 px-1 flex flex-row justify-center w-full">
                        <button
                            onClick={() => {
                                if (Page === "1") {
                                    setPage("2")
                                } else if (Page === "2") {
                                    setPage("1")
                                } else if (Page === "3") {
                                    setPage("2")
                                } else if (Page === "4") {
                                    setPage("2")
                                }
                            }}
                            className="mr-1 w-[50%] border border-indigo-300 rounded-xl bg-[rgba(20,55,129,0.29)] px-4 py-3 text-gray-600 transition text-center text-[24px] font-semibold">
                            {Page === "1" && <p>v.Free</p>}
                            {Page === "2" && <p>Home</p>}
                            {Page === "3" && <p>v.Free</p>}
                            {Page === "4" && <p>v.Free</p>}
                        </button>
                        <button
                            onClick={() => {
                                if (Page === "1") {
                                    setPage("3")
                                } else if (Page === "2") {
                                    setPage("3")
                                } else if (Page === "3") {
                                    setPage("1")
                                } else if (Page === "4") {
                                    setPage("3")
                                }
                            }}
                            className="ml-2 w-[50%] border border-indigo-300  rounded-xl bg-[rgba(20,55,129,0.29)] px-4 py-3 text-gray-600 transition text-center text-[24px] font-semibold">
                            {Page === "1" && <p>v.Pro</p>}
                            {Page === "2" && <p>v.Pro</p>}
                            {Page === "3" && <p>Home</p>}
                            {Page === "4" && <p>v.Pro</p>}
                        </button>
                    </div>
                </div>
            </div>
            <footer className="bg-gray-900 text-gray-600 py-4 mt-auto">
                <div className="container mx-auto text-center">
                    <NavBar />
                </div>
            </footer>
        </div>


    )
};
