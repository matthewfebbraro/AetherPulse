"use client";

import { useState, useEffect } from "react";
import { getGlobalDataState } from "../../Global/store/globalStoreInstance";
import { useGlobalData } from "@/app/Global/GlobalData";
import type { UserProfile } from "../../Global/BodySyncManifest"
import React from "react";
import useAuth from '@/lib/useAuth';
import { ensureDefaultsExist } from "../../Global/UpdateDatabase/ensureDefaultsExist";
import { motion, AnimatePresence } from "framer-motion";
import useDawnSyncPoints from '@/app/OverViewComponents/Sync/hasDawnSynced';
import useDuskSyncPoints from '@/app/OverViewComponents/Sync/hasDuskSynced';
import BiometricsComponent from "../../OverViewComponents/Settings/BiometricsComponentNEW";
import FitnessGoalsPageComponent from "../../OverViewComponents/Settings/MacroSettingsComponent";

import useFitnessSyncPoints from '@/app/OverViewComponents/Sync/hasFitnessSynced';
import { Crown, Flame, Zap, Star, Shield, Atom, Heart, Bird, Dna, KeyRound, Settings, Mars, Venus, Fingerprint } from 'lucide-react';
import { Sun, Moon, Lock, Sprout, CircleCheckBig, Rotate3d, CircleArrowLeft, CircleArrowRight, SmilePlus, Dumbbell, Utensils, ListChecks, StepForward, StepBack } from "lucide-react";


export default function BodySyncComponent() {

    const userProfileSTORE = getGlobalDataState().userProfileSTORE;
    const userProfile = userProfileSTORE;

    const liveUserProfileState = useGlobalData((s) => s.liveUserProfileState);

    const ProfileName = liveUserProfileState?.name;

    const Profile = liveUserProfileState;


    const latestSyncSTORE = getGlobalDataState().latestSyncSTORE;
    const latestSync = latestSyncSTORE;

    const latestNutritionSyncSTORE = getGlobalDataState().latestNutritionSyncSTORE;

    const setSelectedPage = useGlobalData((s) => s.setSelectedPage);
    const bodySyncPage = useGlobalData((s) => s.bodySyncPage);
    const setBodySyncPage = useGlobalData((s) => s.setBodySyncPage);

    const bodySyncPageView = (bodySyncPage || "landing");

    //DISPLAY INFORMATION FOR BODYSYNC PANEL

    //HEIGHT INFO
    const heightDisplay = userProfile?.preferredHeightUnit === "cm"
        ? `${Profile?.height_cm} cm`
        : `${Profile?.height_ft_in.feet}'${Profile?.height_ft_in.inches}"`;


    //WEIGHT INFO
    const weightDisplay = Profile?.preferredWeightUnit === "lbs"
        ? `${Profile?.lastKnownWeight_lbs} lbs`
        : `${Profile?.lastKnownWeight_kg} kg`;


    //DAWN SYNC BUTTON MANIPULATION
    useDawnSyncPoints();
    const hasDawnSyncedToday = useGlobalData((s) => s.hasDawnSyncedToday);
    useDuskSyncPoints();
    const hasDuskSyncedToday = useGlobalData((s) => s.hasDuskSyncedToday);
    useFitnessSyncPoints();
    const hasFitnessSyncedToday = useGlobalData((s) => s.hasFitnessSyncedToday);

    //DAILY SYNC PROGRESS BAR

    const DawnPoints = hasDawnSyncedToday ? 1 : 0;
    const DuskPoints = hasDuskSyncedToday ? 1 : 0;
    const FitnessPoints = hasFitnessSyncedToday ? 1 : 0;

    const TotalBarPoints = DawnPoints + DuskPoints + FitnessPoints | 0;

    const percentage = (TotalBarPoints / 3) * 100;

    //WATER GOAL PROGRESS BAR

    const waterIntake = latestNutritionSyncSTORE?.totalWater_ml;
    const waterGoal = userProfile?.nutritionSettings?.waterGoal_ml;


    const waterPercentage = (waterIntake / Number(waterGoal)) * 100;



    return (

        <div className="z-0 scrollbar-hide">
            {/*PAGE ONE === BODYSYNC*/}
            <div className="w-full rounded-xl">
                <AnimatePresence mode="wait">
                    {bodySyncPageView === "landing" && (
                        <motion.div
                            key="landing"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}>
                            <>
                                {/*BEGIN TRANSMISSION*/}

                                {/*BIOMETRICS*/}
                                <button onClick={() => { setBodySyncPage("bio"); }} >
                                    <div className="absolute bottom-0 left-0 text-indigo-100 bg-white/10 rounded-lg border border-indigo-100">

                                        <div className="relative pl-3 pr-9 h-full pb-1">
                                            <div className="absolute right-1 flex gap-2 ">

                                                <h2><Fingerprint size={36} /></h2>
                                            </div>
                                            <h2 className="text-left text-lg pulse-glow flex text-left">Biometrics</h2>
                                            <h2 className="text-left text-xs">Age: {Profile?.age} Years</h2>
                                            <h2 className="text-left text-xs">Height: {heightDisplay}</h2>
                                            <h2 className="text-left  text-xs">Weight: {weightDisplay}</h2>
                                            <h2 className="mt-1 text-center text-sm font-semibold pulse-glow ">Click to Modify</h2>
                                        </div>
                                    </div>
                                </button>
                                {/*HAS SYNCED BAR*/}

                                <div className="absolute rounded-xl top-0 left-0 w-[75%] border border-indigo-300 overflow-hidden">
                                    <div className="relative rounded-xl text-left pl-3 pb-1 text-indigo-100 ">Daily Sync Progress</div>
                                    <div className="absolute inset-0 h-full rounded-xl bg-white/10 overflow-hidden">
                                        <div
                                            className="left-0 h-full bg-green-300/30 transition-all duration-[5000ms]"
                                            style={{ width: `${percentage}%` }}
                                        />
                                    </div>
                                </div>

                                {/*WATER GOAL BAR*/}

                                <div className="absolute  rounded-xl top-10 left-0 w-[75%] border border-indigo-300 overflow-hidden">
                                    <div className="relative rounded-xl text-left pl-3 pb-1 text-indigo-100 ">Daily Water Goal</div>
                                    <div className="absolute inset-0 h-full rounded-xl bg-white/10 overflow-hidden">
                                        <div
                                            className="left-0 h-full bg-blue-500/30 transition-all duration-[5000ms]"
                                            style={{ width: `${waterPercentage}%` }}
                                        />

                                    </div>
                                </div>

                                {/*MARS vs VENUS*/}
                                <div className="absolute text-indigo-100 bottom-28 left-0">
                                    {Profile?.gender === 'male' ? (<Mars size={40} />) : (<Venus size={40} />)}
                                </div>

                                {/*BOTTOM RIGHT CORNER*/}
                                <div className="absolute bottom-0 right-0 flex flex-col text-indigo-100">

                                    {Profile?.isPaid ? (
                                        <>

                                            <button
                                                onClick={() => {
                                                    setBodySyncPage("nutrition");
                                                }}>

                                                <div className="bg-white/20 rounded-lg  border border-indigo-400  hover:bg-indigo-300/50 flex flex-col justify-between text-center backdrop-blur  py-1 pl-2 pr-1 mb-2">

                                                    <div className="flex justify-between">
                                                        <div className="pr-2 flex leading-none text-sm items-center font-semibold" >
                                                            {Profile?.nutritionSettings?.calorieGoal}Kcal</div>
                                                        <div><Flame size={30} /></div>
                                                    </div>

                                                </div>
                                            </button>

                                        </>
                                    ) : (
                                        <>


                                            <button
                                                disabled>
                                                <div className="bg-white/20 rounded-lg cursor-default border border-indigo-400 flex flex-col justify-between text-center backdrop-blur  py-1 pl-2 pr-1 mb-2 ">

                                                    <div className="flex justify-between">
                                                        <div className="pr-2 flex leading-none text-sm items-center font-semibold" >
                                                            Kcal Goal </div>
                                                        <div><Lock size={30} /></div>
                                                    </div>

                                                </div>
                                            </button>

                                        </>
                                    )}

                                    <button onClick={() => {
                                        setSelectedPage("SyncReport");
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }}>
                                        <div
                                            className="bg-white/20 rounded-lg  border border-indigo-400  hover:bg-indigo-300/50 flex flex-col justify-between text-center py-1 pl-2 pr-1">

                                            <div className="flex justify-between">
                                                <div className="flex leading-none text-sm items-center font-semibold" >
                                                    Trends</div>
                                                <div><Rotate3d size={30} /></div>

                                            </div>

                                        </div>
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 absolute top-0 right-0  text-indigo-100">
                                    {/*NUTRIENT LINKS*/}
                                    <button onClick={() => {
                                        setSelectedPage("Macros");
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }}>
                                        <div
                                            className="bg-white/20 rounded-xl  border border-indigo-400 flex flex-col  hover:bg-indigo-300/50 text-center p-2 mb-2">
                                            <div className="flex leading-none text-sm items-center flex-col font-semibold" >
                                                Macros
                                                <Flame size={30} />
                                            </div>
                                        </div>

                                    </button>

                                    <button onClick={() => {
                                        setSelectedPage("Vitamins");
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }}>
                                        <div
                                            className="bg-white/20 rounded-xl  border border-indigo-400 flex  hover:bg-indigo-300/50 flex-col text-center p-2 mb-2">
                                            <div className="flex leading-none text-sm items-center flex-col font-semibold" >
                                                Vitamin
                                                <Sprout size={30} />
                                            </div>
                                        </div>

                                    </button>

                                    <button onClick={() => {
                                        setSelectedPage("Minerals");
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }}>
                                        <div className="bg-white/20 rounded-xl  border border-indigo-400  hover:bg-indigo-300/50 flex flex-col text-center p-2 mb-2">
                                            <div className="flex leading-none text-sm items-center flex-col font-semibold" >
                                                Mineral
                                                <Atom size={30} />
                                            </div>
                                        </div>
                                    </button>

                                </div>
                                {/*END TRANSMITTION*/}



                            </>
                        </motion.div>)}

                    {/*PAGE 2 -  BIOMETRICS*/}
                    {bodySyncPageView === "bio" && (
                        <motion.div
                            key="bio"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}>
                            <>


                                <div className="relative h-[530px] ">
                                    <BiometricsComponent />
                                </div>



                            </>
                        </motion.div>)}

                    {/*NUTRITION GOALS*/}
                    {bodySyncPageView === "nutrition" && (

                        <motion.div
                            key="nutrition"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}>


                            <FitnessGoalsPageComponent />


                        </motion.div>
                    )}


                    {/*RepSync*/}
                    {bodySyncPageView === "RepSync" && (

                        <motion.div
                            key="RepSync"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}>





                        </motion.div>
                    )}


                    {/*DAILY GOALS */}
                    {bodySyncPageView === "DailyGoals" && (
                        <motion.div
                            key="DailyGoals"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}>
                            <>



                            </>
                        </motion.div>)}

                    {/*NutritionLog*/}
                    {bodySyncPageView === "NutrientLog" && (
                        <motion.div
                            key="NutrientLog"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}>
                            <>




                            </>
                        </motion.div>)}

                    {/*ACHIEVMENTS*/}
                    {bodySyncPageView === "Crowns" && (
                        <motion.div
                            key="Crowns"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}>
                            <>

                            </>
                        </motion.div>)}

                    {/*SyncSimulator*/}
                    {bodySyncPageView === "SyncSim" && (
                        <motion.div
                            key="SyncSim"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}>
                            <>

                            </>
                        </motion.div>)}

                    {/*INFO DEX*/}
                    {bodySyncPageView === "InfoDex" && (
                        <motion.div
                            key="InfoDex"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}>
                            <>

                            </>
                        </motion.div>)}

                    {/*UNLOCK PAGE*/}
                    {bodySyncPageView === "Unlock" && (
                        <motion.div
                            key="Unlock"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}>
                            <>

                            </>
                        </motion.div>)}

                    {/*MACROS*/}
                    {bodySyncPageView === "Macros" && (
                        <motion.div
                            key="Macros"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}>
                            <>

                            </>
                        </motion.div>)}


                    {/*VITAMINS*/}
                    {bodySyncPageView === "Vitamins" && (
                        <motion.div
                            key="Vitamins"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}>
                            <>






                            </>
                        </motion.div>)}


                    {/*MINERALS*/}
                    {bodySyncPageView === "Minerals" && (
                        <motion.div
                            key="Minerals"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}>
                            <>







                            </>
                        </motion.div>)}

                    {/*DAWN SYNC*/}
                    {bodySyncPageView === "DawnSync" && (
                        <motion.div
                            key="DawnSync"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}>
                            <>

                            </>
                        </motion.div>)}


                    {/*DUSK SYNC*/}
                    {bodySyncPageView === "DuskSync" && (
                        <motion.div
                            key="DuskSync"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}>
                            <>

                            </>
                        </motion.div>)}



                    {/*SYNC OVERRIDE*/}
                    {bodySyncPageView === "override" && (
                        <motion.div
                            key="override"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}>
                            <>

                            </>
                        </motion.div>)}

                </AnimatePresence>
            </div>
        </div>
    );
}