'use client';

import { useEffect, useState } from 'react';

export default function HomeComp() {

    useEffect(() => {
        setPage("1");
    }, []);

    const [Page, setPage] = useState("1");

    const BG: Record<string, string> = {
        "homepage2": "/images/home-background.jpg",
    };

    return (
        <div className="flex flex-col items-center" >
            <div
                className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url(/images/hexpulse.jpg)",
                    minHeight: '100%',
                    height: '100%', // Not 100vh!
                }}
            />

            <div className="mt-2 w-full max-w-sm relative">
                <div className=" w-full  absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/images/menu-aether.webp')]" />
                </div>
                <div className="relative h-[85px] rounded-2xl border border-indigo-300 shadow-xl flex flex-col items-center justify-center bg-[rgba(20,55,129,0.58)]">
                    <div className="absolute text-[20px] text-white mb-12 mr-28">powered by</div>
                    <div className="absolute text-[50px] text-white mt-2">AetherPulse</div>

                </div>
            </div>


            {Page === "1" && (
                <div>
                    <div className="mt-2 h-[60dvh] relative w-full max-w-sm rounded-xl overflow-hidden border border-indigo-300 shadow-xl">
                        <div className="flex h-[60dvh] items-center flex-col bg-[rgba(77,89,150,0.7)] rounded-xl pb-2 ">
                            <div className="font-semibold text-[38px] text-white text-center bg-[rgba(64,66,180,0.8)] w-full pb-1">What is BodySync?</div>
                            <div className="overflow-y-auto h-[400px]">
                                <div className="p-4 text-[18px] text-white mb-2 text-center">
                                    BodySync is a fitness and wellness tracker built to feel like a game.
                                    It unites your workouts, hydration, sleep, nutrition, and daily habits
                                    into one clean system, then rewards your progress with experience points,
                                    unlockable themes, and hidden glyphs. More than just logging data, BodySync
                                    makes growth visible and motivating — turning consistency into a journey
                                    you actually want to keep playing.
                                </div>
                                <p className="text-[28px] mx-4 flex justify-center font-semibold bg-white/30 rounded-xl pb-1 text-black">Screenshots Below</p>
                                <div className="mt-2 mx-auto z-10 flex rounded-xl justify-center h-[85px] z-20 w-[80%] flex items-center 
            justify-center bg-contain bg-center bg-no-repeat bg-[url('/images/android-banner.png')] ">
                                </div>
                                <div className="mt-2 z-10 flex rounded-xl justify-center w-full h-[70dvh] z-20 flex items-center 
                                bg-contain bg-center bg-no-repeat bg-[url('/images/bodysync-preview2.webp')] ">
                                </div>
                                <div className="mt-2 z-10 flex rounded-xl justify-center w-full h-[70dvh] z-20 flex items-center 
                                bg-contain bg-center bg-no-repeat bg-[url('/images/bodysync-preview3.webp')] ">
                                </div>
                                <div className="mt-2  z-10 flex rounded-xl justify-center w-full h-[70dvh] z-20 flex items-center 
                                bg-contain bg-center bg-no-repeat bg-[url('/images/bodysync-preview4.webp')] ">
                                </div>
                                <div className="mt-2  z-10 flex rounded-xl justify-center w-full h-[70dvh] z-20 flex items-center 
                                bg-contain bg-center bg-no-repeat bg-[url('/images/bodysync-preview5.webp')] ">
                                </div>
                                <div className="mt-2  z-10 flex rounded-xl justify-center w-full h-[70dvh] z-20 flex items-center 
                                bg-contain bg-center bg-no-repeat bg-[url('/images/bodysync-preview1.webp')] ">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {Page === "2" && (
                <div>
                    <div className="mt-2  h-[60dvh] relative w-full max-w-sm rounded-xl shadow-xl overflow-hidden border border-indigo-300">
                        <div className="flex  h-[60dvh] items-center flex-col bg-[rgba(77,89,150,0.7)] rounded-xl">
                            <div className="font-semibold text-[42px] text-white mb-2 text-center bg-[rgba(64,66,180,0.8)] w-full pb-1">Free Version</div>
                            <div className="overflow-y-auto h-[400px]">
                                <div className="p-4 text-white space-y-2 text-center">

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-black">Track for Free</p>
                                    <p>- You dont need to spend money to make progress. With the free features alone, you can track
                                        your health, see your trends, and keep moving forward.
                                    </p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-black">Gamified Experience</p>
                                    <p>- earn experience points to spend on customizables</p>
                                    <p>- earn titles</p>
                                    <p>- earn Robots, Crowns, Diamonds & More.</p>
                                    <p>- Holographic avatar appears male or female depending on gender selected.</p>
                                    <p>- change Color Themes, Background Image, Titles & Experience Icons</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-black">Daily Motivational Quote</p>
                                    <p className="text-[18px] font-semibold">--Coming Soon--</p>
                                    <p>- Daily Motivational in-app Notifications.</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-black">SyncSimulator</p>
                                    <p>- in depth TDEE calculator powered by FusionCore.</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-black">HydroSync</p>
                                    <p>- Water tracking</p>
                                    <p>- set a daily Water goal to achieve.</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-black">DawnSync</p>
                                    <p>- Weight Tracking & set a weight Goal (or disable weight goal)</p>
                                    <p>- Sleep Duration Tracking</p>
                                    <p>- Sleep Quality Tracking</p>
                                    <p>- RecoveryTDEE</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-black">DuskSync</p>
                                    <p>- Steps Tracking</p>
                                    <p>- exercise Minutes Tracking</p>
                                    <p>- ActiveTDEE Tracking</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-black">Daily Energy Burn</p>
                                    <p>- Including Calorie Goal Adjustment (-500 to +500 kcal)</p>
                                    <p>- Including thermic effect of food. (10%)</p>
                                    <p>- Pie Chart / macro percent adjustments</p>
                                    <p>- Vitamin & Mineral Breakdown</p>
                                    <p>- 7 day Rolling average ActiveTDEE</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-black">SyncReport</p>
                                    <p>- Visual Trends & graphs For Daily Syncs.</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-black">SyncAnalysis</p>
                                    <p>- Your data quantified to help you better understand your habits.</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-black">Hidden Glyphs Game</p>
                                    <p className="text-[18px] font-semibold">--Coming Soon--</p>
                                    <p>- Find and unlock 12 color themes and backgrounds</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-black">Experience Points</p>
                                    <p>- ExpSync (with friends)</p>
                                    <p>- ExpStore (unlock customizables)</p>
                                    <p>- ExpOverview (point allocation)</p>
                                    <p>- ExpLevels (Exp Multipliers Coming Soon)</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-black">Nighthawk mode</p>
                                    <p>- 3am date offset, for all the nighthawks</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            )}
            {Page === "3" && (
                <div>
                    <div className="mt-2  h-[60dvh] relative w-full max-w-sm rounded-xl shadow-xl overflow-hidden border border-indigo-300">
                        <div className="flex  h-[60dvh] items-center flex-col bg-[rgba(77,89,150,0.7)] rounded-xl">
                            <div className="font-semibold text-[42px] text-white mb-2 text-center bg-[rgba(64,66,180,0.8)] w-full pb-1">Pro Version</div>
                            <div className="overflow-y-auto h-[400px]">
                                <div className="p-4 text-white space-y-2 text-center">

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-black">$5.00 Subscription</p>
                                    <p>- Unlock every premium feature for only $5/month. No grind, no hidden costs — just tools to push your progress further</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-black">Fitness Tracker</p>
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

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-black">Nutrition Log</p>
                                    <p className="text-[18px] font-semibold">--Coming Soon--</p>
                                    <p>- Full Nutriton History</p>
                                    <p>- Calorie Tracker</p>
                                    <p>- Sync with ActiveTDEE from free tier.</p>
                                    <p>- 8k built in food library to choose from.</p>
                                    <p>- Add your own foods & save meals</p>
                                    <p>- Nutrient Bars that fill as you log.</p>
                                    <p>- 5 Meals instead of traditional 4.</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-black">Daily Tasks</p>
                                    <p>- Full Tasks History with Daily Tasks Score</p>
                                    <p>- Grocery list maker.</p>
                                    <p>- Stay on track with tasks, chores, and errands.</p>
                                    <p>- Quick add tasks</p>
                                    <p>- Save to multi-add list for re-adding common tasks</p>
                                    <p>- Earn experience for completing tasks.</p>
                                    <p>- Static long-term goals List.</p>
                                    <p>- Delete un-used tasks</p>

                                    <p className="text-[28px] font-semibold bg-white/30 rounded-xl pb-1 text-black">Hidden Glyph Game</p>
                                    <p className="text-[18px] font-semibold">--Coming Soon--</p>
                                    <p>- Unlock even more and Backgrounds & Experience Icons</p>


                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            )}
            {Page === "4" && (
                <div>
                    <div className="mt-2  h-[60dvh] relative w-full max-w-sm rounded-xl shadow-xl overflow-hidden border border-indigo-300">
                        <div className="flex  h-[60dvh] items-center flex-col bg-[rgba(77,89,150,0.7)] rounded-xl">
                            <div className="font-semibold text-[36px] text-white mb-2 text-center bg-[rgba(64,66,180,0.8)] w-full pb-1">Pre-Release Access</div>
                            <div className="p-4 overflow-y-auto h-[400px]">
                                <div className="text-white space-y-2 text-center">
                                    <p className="text-[18px] pt-2 pb-3 px-3 font-semibold bg-white/30 rounded-xl pb-1 text-center text-black text-lg italic mt-2">
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
                                        <a href="mailto:aetherpulse.one@protonmail.com" className="underline text-indigo-300 ml-1">
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
                                <div className="text-white space-y-2 text-center">
                                    <p>BodySync is only available on <span className="font-semibold">Android</span>.</p>
                                </div>
                                <div className="mt-2 bg-indigo-500/45 border border-white/20 rounded-xl p-4 text-white space-y-2 text-sm">
                                    <p className="font-semibold">How to Install</p>
                                    <p>
                                        This app is not from the Play Store, so Android may block the install at first.
                                    </p>
                                    <p>
                                        If prompted, tap <span className="italic">“Settings”</span> and enable
                                        <span className="font-semibold"> “Allow from this source”</span>.
                                        Then return and tap <span className="italic">“Install”</span> again.
                                    </p>
                                    <p className="text-white/50 italic text-center">You only need to do this once.</p>
                                </div>
                                <button
                                    onClick={() => {
                                        window.location.href = "https://pub-3363d301a0464ea9b80627e178331274.r2.dev/BodySync.apk";
                                    }}
                                    className=" relative mt-2 max-w-sm w-full z-10 flex rounded-xl justify-center h-[85px] z-20 flex-col w-full flex items-center 
            justify-center bg-cover bg-center bg-no-repeat bg-[url('/images/login.webp')] 
           border border-indigo-400 overflow-hidden">
                                    <p className="absolute pb-6 text-[28px] font-semibold">Unlock Sync Access</p>
                                    <p className=" absolute pt-6 text-base text-white mt-2 italic">APK Download — 113MB</p>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="mt-2 relative w-full max-w-sm ">
                <div className="flex items-center flex-row">
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
                        className="mr-1 w-[50%] border border-indigo-300 rounded-xl bg-[rgba(39,41,133,0.8)] px-4 py-3 text-white transition text-center text-[24px] font-semibold">
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
                        className="ml-2 w-[50%] border border-indigo-300  rounded-xl bg-[rgba(39,41,133,0.8)] px-4 py-3 text-white transition text-center text-[24px] font-semibold">
                        {Page === "1" && <p>v.Pro</p>}
                        {Page === "2" && <p>v.Pro</p>}
                        {Page === "3" && <p>Home</p>}
                        {Page === "4" && <p>v.Pro</p>}
                    </button>
                </div>
            </div>
            {(Page === "1" || Page === "2" || Page === "3") &&
                <button onClick={() => setPage("4")} className="relative mt-2 max-w-sm w-full z-10 flex rounded-xl justify-center h-[85px] z-20 w-full flex items-center 
            justify-center bg-cover bg-center bg-no-repeat bg-[url('/images/download-now.jpg')] 
           border border-indigo-400 overflow-hidden">
                    <p className="absolute h-full w-full bg-[rgba(39,87,133,0.4)]" />
                    <p className="text-[28px] font-semibold pb-1 z-20">Download APK</p>
                </button>}
            {Page === "4" &&
                <button onClick={() => setPage("1")} className=" relative mt-2 max-w-sm w-full z-10 flex rounded-xl justify-center h-[85px] z-20 w-full flex items-center 
            justify-center bg-cover bg-center bg-no-repeat bg-[url('/images/download-now.jpg')] 
           border border-indigo-400 overflow-hidden">
                    <p className="absolute h-full w-full bg-[rgba(39,87,133,0.4)]" />
                    <p className="text-[28px] font-semibold pb-1 z-20">Return Home</p>
                </button>}
        </div>

    )
};
