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
        <div className="flex flex-col items-center h-[98dvh]" >
            <div
                className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url(/images/background-hex.jpg)",
                    minHeight: '100%',
                    height: '100%',
                }}
            />

            <div className="w-full relative">
                <div className="relative h-[65px] w-full flex flex-row items-center justify-center bg-indigo-800/50">
                    <div className="text-[40px] text-white font-semibold pb-1">Overview</div>
                </div>
            </div>
            <div className="mt-2 h-[85dvh] relative max-w-sm rounded-xl overflow-hidden  ">
                <div className="relative flex h-[86dvh] flex-col  rounded-xl pb-8">
                    <div className="overflow-y-auto h-[100dvh]">
                        <div className="text-[24px] text-white text-center font-semibold">
                            The Daily Sync Loop
                        </div>
                        <div className="bg-white/30 rounded-3xl p-1 mx-10 my-2">
                        </div>
                        <div className="text-[20px] text-white text-center font-semibold">
                            Begin with DAWN SYNC
                        </div>
                        <div className="bg-white/30 rounded-3xl p-1 mx-10 my-2">
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            Weigh yourself right after waking up. Before food, water, or clothes — this is your cleanest, most consistent reading of the day.
                        </div>
                        <div className="text-[20px] text-white text-center font-semibold">
                            Why Morning?
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            Weight can fluctuate by 2-6 lbs throughout the day based on food, water, training, and digestion. Logging it first thing in the morning gives you:
                        </div>
                        <div className="p-2 text-[18px] text-white px-12">
                            ● Consistency
                        </div>
                        <div className="p-2 text-[18px] text-white px-12">
                            ● Reliable trend tracking
                        </div>
                        <div className="p-2 text-[18px] text-white px-12">
                            ● A mindset of momentum before the world grabs you
                        </div>

                        <div className="bg-white/30 rounded-3xl p-1 mx-10 my-2">
                        </div>

                        <div className="text-[20px] text-white text-center font-semibold">
                            End With DUSK SYNC
                        </div>
                        <div className="bg-white/30 rounded-3xl p-1 mx-10 my-2">
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            As the day winds down, return to BodySync for your second checkpoint: DUSK SYNC. This is where you log:
                        </div>
                        <div className="p-2 text-[18px] text-white px-12">
                            ● Steps
                        </div>
                        <div className="p-2 text-[18px] text-white px-12">
                            ● Exercise Duration
                        </div>
                        <div className="p-2 text-[18px] text-white px-12">
                            ● Exercise Intensity
                        </div>
                        <div className="text-[20px] text-white text-center font-semibold">
                            What is Calorie Adjustment?
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            Inside GOAL SETTINGS (via the ControlHub), you can choose a daily Calorie Adjustment, a number added to or subtracted from your baseline to guide your desired progress:
                        </div>
                        <div className="p-2 text-[18px] text-white px-12">
                            ● Negative number = Fat Loss Path
                        </div>
                        <div className="p-2 text-[18px] text-white px-12">
                            ● Positive number = Mass Gain Path
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            Your ENERGY BURN summary shows what intake would align with that goal based on your actual movement that day. DuskSync Can always be recalculated if any of your activity changes. This can be done in the SYNC OVERRIDE (via the ControlHub).
                        </div>
                        <div className="text-[20px] text-white text-center font-semibold">
                            Important Perspective
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            You are not a robot. DUSK SYNC is a mirror, not a judge.
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            There will be days when life wins. When numbers don&apos;t align. When the steps weren&apos;t tracked or the burn was off.
                            That&apos;s not failure — that&apos;s data.
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            The real power comes when you return the next day and resync.
                        </div>
                        <div className="bg-white/30 rounded-3xl p-1 mx-10 my-2">
                        </div>
                        <div className="text-[20px] text-white text-center font-semibold">
                            HYDRO SYNC timing
                        </div>
                        <div className="bg-white/30 rounded-3xl p-1 mx-10 my-2">
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            Staying hydrated is one of the simplest ways to feel better, move better, and sync better
                            which is why water tracking is part of your daily loop.
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            You can set your personal water intake goal in GOAL SETTINGS (found in the ControlHub).
                            Once set, you&apos;ll see your progress bar update as you log water throughout the day.
                        </div>
                        <div className="p-2 px-8 text-[18px] text-white text-center">
                            But remember: the goal isn&apos;t perfect tracking — it&apos;s improved awareness.
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            Every time you see the water tracker, it gives you a subtle nudge.
                            You might catch yourself thinking: “Wait… do I need more water?”
                            That&apos;s the magic. Not pressure, just presence.
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            Whether you log every glass or just check in once or twice, the goal is to encourage hydration, not obsess over it.
                            Your body will thank you, and so will your future self.
                        </div>
                        <div className="bg-white/30 rounded-3xl p-1 mx-10 my-2">
                        </div>
                        <div className="text-[20px] text-white text-center font-semibold">
                            DAILY SYNC SUMMARY
                        </div>
                        <div className="bg-white/30 rounded-3xl p-1 mx-10 my-2">
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            The Daily Sync Bar gives you a quick glance at how many of your daily syncs you&apos;ve completed so far.
                            Tap it at any time to open the Daily Sync Summary — a breakdown of what you&apos;ve done and what&apos;s still waiting for you.
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            Once you&apos;ve completed all available syncs, you&apos;ll unlock a little reward:
                        </div>
                        <div className="p-2 text-[18px] text-white px-12">
                            ● Free version: +10 bonus experience points
                        </div>
                        <div className="p-2 text-[18px] text-white px-12">
                            ● Pro version: +20 bonus experience points
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            Look for the glowing bar, it&apos;s your sign that you&apos;re eligible to claim your XP.
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            This small loop helps keep your momentum going, one sync at a time. Progress doesn&apos;t
                            always have to be huge. Sometimes it&apos;s just finishing the checklist.
                        </div>
                        <div className="bg-white/30 rounded-3xl p-1 mx-10 my-2">
                        </div>
                        <div className="text-[20px] text-white text-center font-semibold">
                            MASTER SYNC Protect Your Progress
                        </div>
                        <div className="bg-white/30 rounded-3xl p-1 mx-10 my-2">
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            MasterSync is recommended at least once per day.
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            When you trigger a MasterSync, your latest data is safely uploaded to the AetherPulse Database,
                            where it stays secure, private, and tied to your account. Only you have access to it — not even we can see your data.
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            MasterSync ensures your progress is protected in key situations:
                        </div>
                        <div className="p-2 text-[18px] text-white px-12">
                            ● If you log out of the app
                        </div>
                        <div className="p-2 text-[18px] text-white px-12">
                            ● If you uninstall and reinstall BodySync
                        </div>
                        <div className="p-2 text-[18px] text-white px-12">
                            ● If you change phones or devices
                        </div>
                        <div className="text-[20px] text-white text-center font-semibold">
                            Connection Tips
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            MasterSync requires an internet connection. It is not recommended to perform a MasterSync while using
                            cellular data, or when you&apos;re moving (like on a bus or in a vehicle).
                            Unstable connections may result in data loss, and a proper sync cannot be guaranteed.
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            For best results Always perform MasterSync over Wi-Fi, ideally when you&apos;re home or on a stable network.
                        </div>
                        <div className="text-[20px] text-white text-center font-semibold">
                            Offline Mode
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            Besides MasterSync and the InfoDex, the entire BodySync app can be used completely offline. You can log your workouts,
                            track your water, add meals, update your weight — all without a connection.
                            Just make sure to sync up when you&apos;re back on Wi-Fi, and you&apos;re good.
                        </div>
                        <div className="bg-white/30 rounded-3xl p-1 mx-10 my-2">
                        </div>
                        <div className="text-[20px] text-white text-center font-semibold">
                            CONTROL HUB Your Settings Command Center
                        </div>
                        <div className="bg-white/30 rounded-3xl p-1 mx-10 my-2">
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            The Control Hub is where you&apos;ll find all your key settings and customization tools in BodySync.
                        </div>
                        <div className="text-[20px] text-white text-center font-semibold">
                            CUSTOM SETTINGS
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            Personalize the app experience by choosing your background theme and icon set.
                            This includes unlockable themes that can be found in EXP SHOP, and more. All part of your Sync journey.
                        </div>
                        <div className="text-[20px] text-white text-center font-semibold">
                            BIOMETRIC SETTINGS
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            Update your name, height, weight, and units of measurement (e.g., pounds/kilograms, inches/cm) to
                            keep your data accurate and personalized.
                        </div>
                        <div className="text-[20px] text-white text-center font-semibold">
                            GOAL SETTINGS
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            This is where you define your:
                        </div>
                        <div className="p-2 text-[18px] text-white px-12">
                            ● Daily Water Goal
                        </div>
                        <div className="p-2 text-[18px] text-white px-12">
                            ● Calorie Adjustment - used to shift your energy balance for Weight Loss (cutting) or Weight Gain (bulking)
                        </div>
                        <div className="p-2 text-[18px] text-white px-12">
                            ● Macro Targets for use on the Energy Burn page
                        </div>
                        <div className="p-2 text-[18px] text-white px-12">
                            ● Night Hawk Mode - enables tracking past midnight for night hawks
                        </div>
                        <div className="text-[20px] text-white text-center font-semibold">
                            SYNC OVERRIDE
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            Use this feature to recalculate your Dawn Sync or Dusk Sync values if you update your step count, workout, or exercise data later in the day.
                        </div>
                        <div className="text-[20px] text-white text-center font-semibold">
                            SYNC SIMULATOR
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            This is the Total Daily Energy Expenditure (TDEE) calculator that powers BodySync&apos;s Energy Burn system.
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            Use it to:
                        </div>
                        <div className="p-2 text-[18px] text-white px-12">
                            ● Estimate your total daily burn from steps + exercise
                        </div>
                        <div className="p-2 text-[18px] text-white px-12">
                            ● Test out different calorie adjustments or hypothetical routines
                        </div>
                        <div className="p-2 text-[18px] text-white px-12">
                            ● Show someone BodySync by plugging in their info to generate a fully custom burn suggestion. Great for demos or introducing friends!
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            Control Hub gives you the levers to fine-tune the BodySync experience. Whether you&apos;re optimizing performance or simply customizing your vibe.
                        </div>
                        <div className="bg-white/30 rounded-3xl p-1 mx-10 my-2">
                        </div>
                        <div className="text-[20px] text-white text-center font-semibold">
                            TELEMETRY Snapshot
                        </div>
                        <div className="bg-white/30 rounded-3xl p-1 mx-10 my-2">
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            Telemetry is your Sync Summary. It shows data from all your completed
                            Syncs so far, including steps, sleep, energy burn, nutrition, and more.
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            Its purpose is to give you a quick snapshot of where you are and what your next steps might be.
                        </div>
                        <div className="p-2 text-[18px] text-white text-center">
                            Remember: BodySync isn&apos;t here to tell you what to do. It&apos;s here to give
                            you the tools to reflect on your habits, analyze patterns, and decide if anything needs to shift
                            in order to move closer to your progress goals.
                        </div>
                    </div>
                </div>
            </div>
            <footer className=" text-white py-4 mt-auto">
                <div className="container mx-auto text-center">
                    <InfoNavBar />
                </div>
            </footer>
        </div>


    )
};
