"use client";


import { getGlobalDataState } from "@/app/Global/store/globalStoreInstance";
import { useGlobalData } from "@/app/Global/GlobalData";
import { UserProfile, LiftIndexData, FitnessSettingsData } from "@/app/Global/BodySyncManifest";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleAlert, CircleCheckBig } from 'lucide-react';
import { useRouter } from "next/navigation";
import { collection, getDocs, getDoc, addDoc, setDoc, updateDoc, doc, query, where, Timestamp, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import useAuth from "@/lib/useAuth";
import ScrollLoad from "@/Backgrounds/ScrollLoad"


export default function DailyNutritionComponent() {

    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const dateString = `${yyyy}-${mm}-${dd}`;

    //QUARTER STRING
    const quarter = Math.floor((parseInt(mm) - 1) / 3) + 1;
    const quarterString = `Q${quarter}-${yyyy}`;

    //CENTRAL INTELLIGENCE
    const { user } = useAuth();

    const userProfileSTORE = getGlobalDataState().userProfileSTORE;
    const userProfile = userProfileSTORE

    const nutritionHistorySTORE = getGlobalDataState().nutritionHistorySTORE;
    const latestNutritionSyncSTORE = getGlobalDataState().latestNutritionSyncSTORE;

    const setSelectedPage = useGlobalData((s) => s.setSelectedPage);

    const [addWater, setAddWater] = useState("0");

    const totalWater_ml = nutritionHistorySTORE?.[dateString]?.totalWater_ml || 0;
    const totalWater_oz = nutritionHistorySTORE?.[dateString]?.totalWater_oz || 0;

    const [activeSplit, setActiveSplit] = useState("");


    const preferredVolumeUnit = userProfile?.preferredVolumeUnit ?? "ml";
    const [addWater_ml, setAddWater_ml] = useState("");
    const [addWater_oz, setAddWater_oz] = useState("");

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;

        if (input === "") {
            setAddWater_ml("");
            setAddWater_oz("");
            return;
        }

        const parsed = parseFloat(input);
        if (isNaN(parsed)) return; // Guard against nonsense

        if (preferredVolumeUnit === "ml") {
            setAddWater_ml(parsed.toString());
            setAddWater_oz((parsed * 0.033814).toString());
        } else {
            setAddWater_oz(parsed.toString());
            setAddWater_ml((parsed * 29.5735).toString());
        }
    };


    return (
        <>
            <ScrollLoad />
            <div>
                <div className="w-full h-32 bg-[url('/images/greyscale/macrovault.webp')] bg-cover bg-center bg-no-repeat mb-2 glowing-button2">
                    <div
                        className="w-full h-32 bg-[rgba(43,0,255,0.3)] rounded-xl py-4 leading-none justify-center flex flex-col items-center text-white shadow-md mb-2">
                        <div className=" text-4xl pulse-glow flex leading-none justify-center flex-col items-center gap-2 font-semibold" >
                            NutritionLog
                        </div>
                        <h2 className="text-lg font-bold text-white pb-2">
                            Fuel Your Form, Master Your Macros.
                        </h2>
                    </div>
                </div>
            </div>

            <div className="bg-white/30 w-full rounded-xl p-3 shadow-lg">

                <p className="text-lg text-white font-semibold mb-1">
                    Log Water Intake ({preferredVolumeUnit === "oz" ? "oz" : "ml"})
                </p>
                <div className="flex mb-4">
                    <input
                        type="number"
                        step="0.1"
                        min="0"
                        value={preferredVolumeUnit === "ml" ? addWater_ml.toString() : addWater_oz.toString()} onChange={handleVolumeChange}
                        placeholder="Enter Water Goal"
                        className="w-full p-2 rounded bg-gray-800/70 text-white"
                        required
                    />
                </div>




                <div className="flex px-12 pt-3 justify-center">
                    <button

                        className="w-full text-md rounded-xl p-2 shadow transition-all duration-50 glowing-purple-button hover:bg-[rgba(101,70,255,0.3)] cursor-pointer"
                        onClick={async () => {
                            if (!user) return;


                            const quarterDocRef = doc(db, "users", user.uid, "nutrition", quarterString);

                            await setDoc(
                                quarterDocRef,
                                {
                                    [dateString]: {
                                        id: dateString,
                                        quarterId: quarterString,

                                        totalWater_ml: Number(totalWater_ml + parseFloat(addWater_ml)),
                                        totalWater_oz: Number(totalWater_oz + parseFloat(addWater_oz)),
                                        nutritionSync: true,
                                        updatedAt: serverTimestamp(),
                                        token: "meals",
                                    }
                                },
                                { merge: true }
                            );


                            const setLatestNutritionSyncSTORE = getGlobalDataState().setLatestNutritionSyncSTORE;

                            const setNutritionHistorySTORE = getGlobalDataState().setNutritionHistorySTORE;
                            let latestHistory = null;
                            let restOfHistory = {};

                            if (nutritionHistorySTORE && nutritionHistorySTORE[dateString]) {
                                latestHistory = nutritionHistorySTORE[dateString];
                                const { [dateString]: _, ...rest } = nutritionHistorySTORE;
                                restOfHistory = rest;
                            }
                            const latest = getGlobalDataState().latestNutritionSyncSTORE;

                            const isToday = latestNutritionSyncSTORE?.id === dateString;


                            if (isToday) {
                                // ✅ Safe to merge into today's sync
                                setLatestNutritionSyncSTORE({
                                    ...latest,
                                    id: dateString,
                                    quarterId: quarterString,

                                    totalWater_ml: Number(totalWater_ml + parseFloat(addWater_ml)),
                                    totalWater_oz: Number(totalWater_oz + parseFloat(addWater_oz)),
                                    nutritionSync: true,
                                    updatedAt: serverTimestamp(),
                                    token: "meals",
                                });

                                setNutritionHistorySTORE({
                                    ...restOfHistory,
                                    [dateString as keyof typeof nutritionHistorySTORE]: {
                                        ...latestHistory,
                                        id: dateString,
                                        quarterId: quarterString,

                                        totalWater_ml: Number(totalWater_ml + parseFloat(addWater_ml)),
                                        totalWater_oz: Number(totalWater_oz + parseFloat(addWater_oz)),
                                        nutritionSync: true,
                                        updatedAt: serverTimestamp(),
                                        token: "meals",
                                    }
                                }
                                );

                            } else {
                                // 🚨 Not today's sync — don't merge. Just create a new object.
                                setLatestNutritionSyncSTORE({
                                    id: dateString,
                                    quarterId: quarterString,

                                    totalWater_ml: Number(totalWater_ml + parseFloat(addWater_ml)),
                                    totalWater_oz: Number(totalWater_oz + parseFloat(addWater_oz)),
                                    nutritionSync: true,
                                    updatedAt: serverTimestamp(),
                                    token: "meals",
                                });

                                setNutritionHistorySTORE({
                                    ...nutritionHistorySTORE,
                                    [dateString as keyof typeof nutritionHistorySTORE]: {
                                        id: dateString,
                                        quarterId: quarterString,

                                        totalWater_ml: Number(totalWater_ml + parseFloat(addWater_ml)),
                                        totalWater_oz: Number(totalWater_oz + parseFloat(addWater_oz)),
                                        nutritionSync: true,
                                        updatedAt: serverTimestamp(),
                                        token: "meals",
                                    }
                                }
                                );
                            }
                            setSelectedPage("bodysync");
                        }}>
                        Sync Now
                    </button>
                </div>


            </div >



        </>
    );
}
