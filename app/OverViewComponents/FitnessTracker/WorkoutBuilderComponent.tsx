"use client";


import { FitnessSettingsData, LiftIndexData, UserProfile } from "@/app/Global/BodySyncManifest";
import { useGlobalData } from "@/app/Global/GlobalData";
import { getGlobalDataState } from "@/app/Global/store/globalStoreInstance";

import ScrollLoad from "@/Backgrounds/ScrollLoad";
import { db } from "@/lib/firebase";
import useAuth from "@/lib/useAuth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";


export default function CoreStackComponent() {


    //CENTRAL INTELLIGENCE
    const { user } = useAuth();

    const userProfileSTORE = getGlobalDataState().userProfileSTORE;
    const userProfile = userProfileSTORE
    const setUserProfileSTORE = getGlobalDataState().setUserProfileSTORE;

    const setLiveUserProfileState = useGlobalData((s) => s.setLiveUserProfileState);
    const liveUserProfileState = useGlobalData((s) => s.liveUserProfileState);


    const currentSplit = userProfile?.fitnessSettings?.currentSplit || "null";
    const lastBodygroup = userProfile?.fitnessSettings?.lastBodygroup || "null";

    const liftIndex = useGlobalData((s) => s.liveUserProfileState?.fitnessSettings?.liftIndex as LiftIndexData);


    const setSelectedPage = useGlobalData((s) => s.setSelectedPage);
    // const activeSessionStatus = useGlobalData((s) => s.activeSessionStatus);
    //const setActiveSessionStatus = useGlobalData((s) => s.setActiveSessionStatus);


    //const setTemporaryFitnessSync = useGlobalData((s) => s.setTemporaryFitnessSync);
    const setWorkoutSessionData = useGlobalData((s) => s.setWorkoutSessionData); // read live

    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const dateString = `${yyyy}-${mm}-${dd}`;

    //QUARTER STRING
    const quarter = Math.floor((parseInt(mm) - 1) / 3) + 1;
    const quarterString = `Q${quarter}-${yyyy}`;

    const [activeSplit, setActiveSplit] = useState("");
    const [activeBodygroup, setActiveBodygroup] = useState("");
    const [activeProfile, setActiveProfile] = useState("");

    const profile1 = liftIndex?.[activeBodygroup]?.profile1;
    const profile2 = liftIndex?.[activeBodygroup]?.profile2;
    const profile3 = liftIndex?.[activeBodygroup]?.profile3;

    //Workout selector view pages NEXT BACK BUTTONS/ 

    const [selectedSetup, setSelectedSetup] = useState<"splits" | "bodygroup" | "movements">("splits");


    const handleSetupClick = (page: "splits" | "bodygroup" | "movements") => {
        setSelectedSetup(page); // No toggling, just always set the new one
    };

    //SPLIT SELECTOR BUTTONS

    const [SplitButton, setSplitButton] = useState<"pushpulllegs" | "fullbody" | "brosplit5" | "upperlower" | "brosplit3" | null>(null);

    const handleSplitClick = (selection: "pushpulllegs" | "fullbody" | "brosplit5" | "upperlower" | "brosplit3") => {
        setSplitButton(selection); // No toggling, just always set the new one
    };

    //BODYGROUP SELECTOR BUTTONS

    const [bodygroupButton, setBodygroupButton] = useState<"push" | "pull" | "legs" | "upper" | "lower" | "fullbody" | "chest" | "back" | "shoulders" | "brolegs" | "arms" | null>(null);

    const handleBodygroupClick = (selection: "push" | "pull" | "legs" | "upper" | "lower" | "fullbody" | "chest" | "back" | "shoulders" | "brolegs" | "arms") => {
        setBodygroupButton(selection); // No toggling, just always set the new one
    };

    //MOVEMENT SELECTOR BUTTONS

    const [movementButton, setMovementButton] = useState<"profile1" | "profile2" | "profile3" | null>(null);

    const handleMovementClick = (selection: "profile1" | "profile2" | "profile3") => {
        setMovementButton(selection); // No toggling, just always set the new one
    };

    const SplitDisplayNames: { [key: string]: string } = {
        pushpulllegs: "Push-Pull-Legs",
        upperlower: "Upper-Lower",
        fullbody: "Full Body",
        brosplit5: "5-Day Bro Split",
        brosplit3: "3-Day Bro Split",

    };

    const BodyGroupDisplayNames: { [key: string]: string } = {
        push: "Push",
        pull: "Pull",
        legs: "Legs",
        upper: "Upper",
        lower: "Lower",
        fullbody: "FullBody",
        broLegs: "Legs",
        chest: "Chest",
        back: "Back",
        shoulders: "Shoulders",
        arms: "Arms",
    };


    //NEW CURRENT ACTIVE SPLIT DETECTED
    const [warningSeen, setWarningSeen] = useState(false)
    useEffect(() => {
        if (
            activeSplit &&
            liveUserProfileState?.fitnessSettings?.currentSplit &&
            activeSplit !== liveUserProfileState?.fitnessSettings.currentSplit
        ) {
            if (!warningSeen) {
                setWarningSeen(true);
            }
        }
    }, [activeSplit, liveUserProfileState?.fitnessSettings?.currentSplit]);



    const [activeSessionWarningSeen, setActiveSessionWarningSeen] = useState(false)
    useEffect(() => {
        if (

            liveUserProfileState?.fitnessSettings?.activeSession === true
        ) {
            if (!activeSessionWarningSeen) {
                setActiveSessionWarningSeen(true);
            }
        }
    }, []);



    return (
        <>
            <ScrollLoad />
            <div>
                <div className="relative z-0 h-32 bg-[url('/images/menus/register.webp')] bg-cover bg-center bg-no-repeat rounded-2xl border 
        border-white/30 shadow-xl text-white text-5xl glowing-button mb-2">
                    <div className="absolute flex flex-col pb-2 items-center bg-indigo-500/30 justify-center inset-0 text-center rounded-xl">
                        <div className="flex items-center gap-2 pulse-glow ">CoreStack</div>
                        <h2 className="text-lg font-bold text-white">
                            Workout Builder
                        </h2>
                    </div>
                </div>
            </div>

            <div className="relative w-full rounded-xl ">
                <AnimatePresence mode="wait">

                    {selectedSetup === "splits" && (
                        <motion.div
                            key="splits"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >



                          

                           

                        </motion.div>
                    )}
                    {selectedSetup === "bodygroup" && (
                        <motion.div
                            key="bodygroup"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >

                            <div className="p-2 backdrop-blur-sm mb-2 items-center rounded-lg shadow bg-indigo-300/70 text-white">


                                <div className="w-full glowing-purple-button text-center rounded-xl mb-2">
                                    Last Active Session: {BodyGroupDisplayNames[lastBodygroup]} <br />
                                    <div className="bg-white/40 rounded-xl mx-24 my-1 pb-1"></div>
                                    {activeBodygroup && (
                                        <p className="text-green-300 text-center font-semibold">
                                            Please proceed to apply your Movements
                                        </p>)}
                                    {!activeBodygroup && (
                                        <p className="text-yellow-300 text-center font-semibold">
                                            Please choose a BodyGroup
                                        </p>)}

                                </div>

                                <div className="grid grid-cols gap-2 left-0 ">


                                    {activeSplit === "pushpulllegs" ? (
                                        <>

                                            <button
                                                onClick={() => {
                                                    setActiveBodygroup("push");
                                                    handleBodygroupClick("push");
                                                }}
                                                className={`mb-2 p-2 w-full rounded-xl ${bodygroupButton === "push" ? "bg-indigo-300/70 relative z-10 text-white font-bold px-4 py-2 rounded-xl overflow-hidden border border-indigo-400" : "glowing-button"}`}>
                                                Push
                                            </button>

                                            <button
                                                onClick={() => {
                                                    setActiveBodygroup("pull");
                                                    handleBodygroupClick("pull");
                                                }}
                                                className={`mb-2 p-2 w-full rounded-xl ${bodygroupButton === "pull" ? "bg-indigo-300/70 relative z-10 text-white font-bold px-4 py-2 rounded-xl overflow-hidden border border-indigo-400" : "glowing-button"}`}>
                                                Pull
                                            </button>

                                            <button
                                                onClick={() => {
                                                    setActiveBodygroup("legs");
                                                    handleBodygroupClick("legs");
                                                }}
                                                className={`mb-2 p-2 w-full rounded-xl ${bodygroupButton === "legs" ? "bg-indigo-300/70 relative z-10 text-white font-bold px-4 py-2 rounded-xl overflow-hidden border border-indigo-400" : "glowing-button"}`}>
                                                Legs
                                            </button>


                                        </>
                                    ) : activeSplit === "upperlower" ? (
                                        <>

                                            <button
                                                onClick={() => {
                                                    setActiveBodygroup("upper");
                                                    handleBodygroupClick("upper");
                                                }}
                                                className={`mb-2 p-2 w-full rounded-xl ${bodygroupButton === "upper" ? "bg-indigo-300/70 relative z-10 text-white font-bold px-4 py-2 rounded-xl overflow-hidden border border-indigo-400" : "glowing-button"}`}>
                                                Upper
                                            </button>

                                            <button
                                                onClick={() => {
                                                    setActiveBodygroup("lower");
                                                    handleBodygroupClick("lower");
                                                }}
                                                className={`mb-2 p-2 w-full rounded-xl ${bodygroupButton === "lower" ? "bg-indigo-300/70 relative z-10 text-white font-bold px-4 py-2 rounded-xl overflow-hidden border border-indigo-400" : "glowing-button"}`}>
                                                Lower
                                            </button>

                                        </>
                                    ) : activeSplit === "fullbody" ? (
                                        <>


                                            <button
                                                onClick={() => {
                                                    setActiveBodygroup("fullbody");
                                                    handleBodygroupClick("fullbody");
                                                }}
                                                className={`mb-2 p-2 w-full rounded-xl ${bodygroupButton === "fullbody" ? "bg-indigo-300/70 relative z-10 text-white font-bold px-4 py-2 rounded-xl overflow-hidden border border-indigo-400" : "glowing-button"}`}>
                                                FullBody
                                            </button>


                                        </>
                                    ) : activeSplit === "brosplit5" ? (
                                        <>


                                            <button
                                                onClick={() => {
                                                    setActiveBodygroup("chest");
                                                    handleBodygroupClick("chest");
                                                }}
                                                className={`mb-2 p-2 w-full rounded-xl ${bodygroupButton === "chest" ? "bg-indigo-300/70 relative z-10 text-white font-bold px-4 py-2 rounded-xl overflow-hidden border border-indigo-400" : "glowing-button"}`}>
                                                Chest
                                            </button>

                                            <button
                                                onClick={() => {
                                                    setActiveBodygroup("back");
                                                    handleBodygroupClick("back");
                                                }}
                                                className={`mb-2 p-2 w-full rounded-xl ${bodygroupButton === "back" ? "bg-indigo-300/70 relative z-10 text-white font-bold px-4 py-2 rounded-xl overflow-hidden border border-indigo-400" : "glowing-button"}`}>
                                                Back
                                            </button>

                                            <button
                                                onClick={() => {
                                                    setActiveBodygroup("shoulders");
                                                    handleBodygroupClick("shoulders");
                                                }}
                                                className={`mb-2 p-2 w-full rounded-xl ${bodygroupButton === "shoulders" ? "bg-indigo-300/70 relative z-10 text-white font-bold px-4 py-2 rounded-xl overflow-hidden border border-indigo-400" : "glowing-button"}`}>
                                                Shoulders
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setActiveBodygroup("brolegs");
                                                    handleBodygroupClick("brolegs");
                                                }}
                                                className={`mb-2 p-2 w-full rounded-xl ${bodygroupButton === "brolegs" ? "bg-indigo-300/70 relative z-10 text-white font-bold px-4 py-2 rounded-xl overflow-hidden border border-indigo-400" : "glowing-button"}`}>
                                                Legs
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setActiveBodygroup("arms");
                                                    handleBodygroupClick("arms");
                                                }}
                                                className={`mb-2 p-2 w-full rounded-xl ${bodygroupButton === "arms" ? "bg-indigo-300/70 relative z-10 text-white font-bold px-4 py-2 rounded-xl overflow-hidden border border-indigo-400" : "glowing-button"}`}>
                                                Arms
                                            </button>

                                        </>
                                    ) : (null)}

                                </div>
                            </div>
                        </motion.div>
                    )}


                    {selectedSetup === "movements" && (
                        <motion.div
                            key="movements"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >



                            <div className="p-2 mb-10 bg-white/30 backdrop-blur-sm text-white rounded-lg flex flex-col">


                                <div className="w-full glowing-purple-button text-center rounded-xl mb-2">
                                    Choose a {BodyGroupDisplayNames[activeBodygroup]} Profile  <br />
                                    <div className="bg-white/40 rounded-xl mx-24 my-1 pb-1"></div>
                                    {activeProfile && (
                                        <p className="text-green-300 text-center font-semibold">
                                            Cleared for Tracking
                                        </p>)}
                                    {!activeProfile && (
                                        <p className="text-yellow-300 text-center font-semibold">
                                            No profile selected
                                        </p>)}

                                </div>

                                <div className="grid grid-cols gap-2 left-0 ">

                                    <button
                                        onClick={() => {
                                            setActiveProfile("profile1");
                                            handleMovementClick("profile1");
                                        }}
                                        className={`mb-2 p-2 w-full rounded-xl ${movementButton === "profile1" ? "bg-indigo-300/70 relative z-10 text-white font-bold px-4 py-2 rounded-xl overflow-hidden border border-indigo-400" : "glowing-button"}`}>
                                        Profile 1: {profile1?.name}
                                    </button>
                                    <button
                                        onClick={() => {
                                            setActiveProfile("profile2");
                                            handleMovementClick("profile2");
                                        }}
                                        className={`mb-2 p-2 w-full rounded-xl ${movementButton === "profile2" ? "bg-indigo-300/70 relative z-10 text-white font-bold px-4 py-2 rounded-xl overflow-hidden border border-indigo-400" : "glowing-button"}`}>
                                        Profile 2: {profile2?.name}
                                    </button>

                                    <button
                                        onClick={() => {
                                            setActiveProfile("profile3");
                                            handleMovementClick("profile3");
                                        }}
                                        className={`mb-2 p-2 w-full rounded-xl ${movementButton === "profile3" ? "bg-indigo-300/70 relative z-10 text-white font-bold px-4 py-2 rounded-xl overflow-hidden border border-indigo-400" : "glowing-button"}`}>
                                        Profile 3: {profile3?.name}
                                    </button>



                                </div>

                                <div className="flex px-12 pt-3 justify-center">
                                    <button
                                        disabled={!(activeSplit && activeBodygroup && activeProfile)}
                                        className={`w-full text-md rounded-xl p-2 shadow transition-all duration-50
                                     ${!(activeSplit && activeBodygroup && activeProfile) ? "bg-gray-800/80 text-gray-400 cursor-not-allowed relative z-10 font-bold rounded-xl overflow-hidden border border-indigo-400" : "glowing-purple-button cursor-pointer"}`}
                                        onClick={async () => {
                                            if (!user) return;


                                            const userRef = doc(db, "users", user.uid);

                                            // Set meta initialized
                                            await setDoc(userRef, {
                                                fitnessSettings: {
                                                    currentSplit: activeSplit,
                                                    activeSession: true,
                                                    lastBodygroup: activeBodygroup,
                                                    lastMovements: activeProfile
                                                },
                                            }, { merge: true });

                                            const quarterDocRef = doc(db, "users", user.uid, "fitness", quarterString);

                                            await setDoc(
                                                quarterDocRef,
                                                {
                                                    [dateString]: {
                                                        id: dateString,
                                                        quarterId: quarterString,

                                                        split: activeSplit,
                                                        bodygroup: activeBodygroup,
                                                        whichProfile: activeProfile,
                                                        completed: false,
                                                        StartTime: serverTimestamp(),
                                                    }
                                                },
                                                { merge: true }
                                            );


                                            const setLatestFitnessSyncSTORE = getGlobalDataState().setLatestFitnessSyncSTORE;

                                            setLatestFitnessSyncSTORE({
                                                id: dateString,
                                                split: activeSplit,
                                                bodygroup: activeBodygroup,
                                                whichProfile: activeProfile,
                                                completed: false,
                                                StartTime: serverTimestamp(),
                                            });


                                            const setFitnessHistorySTORE = getGlobalDataState().setFitnessHistorySTORE;
                                            const fitnessHistorySTORE = getGlobalDataState().fitnessHistorySTORE;
                                            const latestHistory = fitnessHistorySTORE?.[dateString];
                                            const { [dateString as keyof typeof fitnessHistorySTORE]: _, ...restOfHistory } = fitnessHistorySTORE;

                                            setFitnessHistorySTORE({
                                                ...fitnessHistorySTORE,
                                                [dateString as keyof typeof fitnessHistorySTORE]: {
                                                    id: dateString,
                                                    split: activeSplit,
                                                    bodygroup: activeBodygroup,
                                                    whichProfile: activeProfile,
                                                    completed: false,
                                                    StartTime: serverTimestamp(),
                                                }
                                            }
                                            );

                                            setSelectedPage("RepSync");
                                            //setActiveSessionStatus(true);
                                            //  setTemporaryFitnessSync({
                                            //     profileSlot: activeProfile,
                                            //      bodygroup: activeBodygroup,
                                            //  });
                                            const live = getGlobalDataState().userProfileSTORE as UserProfile;
                                            const fitness = live.fitnessSettings as FitnessSettingsData;

                                            setLiveUserProfileState({
                                                ...live,
                                                fitnessSettings: {
                                                    ...fitness,
                                                    activeSession: true,
                                                    lastBodygroup: activeBodygroup,
                                                    lastMovements: activeProfile,
                                                },
                                            });
                                        }}


                                    >
                                        Start Workout
                                    </button>

                                </div>

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="w-full max-w-md fixed bottom-28 px-2 left-1/2 -translate-x-1/2">
                    <div className="grid grid-cols-3 gap-1 w-full rounded-xl">
                        <button
                            onClick={() => handleSetupClick("splits")}
                            className={`px-5 w-full text-md rounded-xl transition-all duration-50 shadow ${selectedSetup === "splits" ? "bg-indigo-300/70" : "glowing-purple-button"}`}>
                            Splits
                        </button>


                        <button
                            disabled={!activeSplit}
                            onClick={() => handleSetupClick("bodygroup")}
                            className={`w-full text-md rounded-xl shadow transition-all duration-50 ${!activeSplit ? "bg-gray-800 text-gray-400 cursor-not-allowed relative z-10 font-bold px-4 py-2 rounded-xl overflow-hidden border border-indigo-400"
                                : selectedSetup === "bodygroup" ? "bg-indigo-300/70 relative z-10 text-white font-bold px-4 py-2 rounded-xl overflow-hidden border border-indigo-400" : "glowing-purple-button cursor-pointer"}`}>
                            BodyGroup
                        </button>



                        <button
                            disabled={!activeBodygroup}
                            onClick={() => handleSetupClick("movements")}
                            className={`w-full text-md rounded-xl shadow transition-all duration-50 ${!activeBodygroup ? "bg-gray-800 text-gray-400 cursor-not-allowed relative z-10 font-bold px-4 py-2 rounded-xl overflow-hidden border border-indigo-400"
                                : selectedSetup === "movements" ? "bg-indigo-300/70 relative z-10 text-white font-bold px-4 py-2 rounded-xl overflow-hidden border border-indigo-400" : "glowing-purple-button cursor-pointer"}`}>
                            Movements
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
