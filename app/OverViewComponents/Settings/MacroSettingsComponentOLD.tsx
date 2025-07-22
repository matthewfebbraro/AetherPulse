'use client';
import { getGlobalDataState } from "@/app/Global/store/globalStoreInstance";
import { useGlobalData } from "@/app/Global/GlobalData";
import { UserProfile, NutritionSettingsData } from "../../Global/BodySyncManifest"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, setDoc, collection, serverTimestamp } from "firebase/firestore";

export default function FitnessGoalsPageComponent() {

    const router = useRouter();
    const [status, setStatus] = useState("");

    const userProfileSTORE = getGlobalDataState().userProfileSTORE;
    const userProfile = userProfileSTORE

    const setLiveUserProfileState = useGlobalData((s) => s.setLiveUserProfileState);
    const setUserProfileSTORE = getGlobalDataState().setUserProfileSTORE;

    const preferredVolumeUnit = userProfile?.preferredVolumeUnit ?? "ml";
    const [waterGoal_ml, setWaterGoal_ml] = useState("");
    const [waterGoal_oz, setWaterGoal_oz] = useState("");

    const setSelectedPage = useGlobalData((s) => s.setSelectedPage);

    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const dateString = `${yyyy}-${mm}-${dd}`;

    const [calorieGoal, setCalorieGoal] = useState("");

    useEffect(() => {
        if (!userProfile?.nutritionSettings) return;
        setCalorieGoal(userProfile?.nutritionSettings.calorieGoal?.toString() || "");

    }, [userProfile?.nutritionSettings]);


    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;

        if (input === "") {
            setWaterGoal_ml("");
            setWaterGoal_oz("");
            return;
        }

        const parsed = parseFloat(input);
        if (isNaN(parsed)) return; // Guard against nonsense

        if (preferredVolumeUnit === "ml") {
            setWaterGoal_ml(parsed.toString());
            setWaterGoal_oz((parsed * 0.033814).toString());
        } else {
            setWaterGoal_oz(parsed.toString());
            setWaterGoal_ml((parsed * 29.5735).toString());
        }
    };




    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        const userId = auth.currentUser!.uid;
        const userRef = doc(db, "users", userId,);

        try {
            await setDoc(userRef, {
                nutritionSettings: {
                    calorieGoal: Number(calorieGoal),
                    waterGoal_ml: Number(waterGoal_ml),
                    waterGoal_oz: Number(waterGoal_oz),
                }
            }, { merge: true });

            const latest = getGlobalDataState().userProfileSTORE?.nutritionSettings as NutritionSettingsData;

            setUserProfileSTORE({
                ...(getGlobalDataState().userProfileSTORE as UserProfile),
                nutritionSettings: {
                    ...latest,
                    calorieGoal: Number(calorieGoal),
                    waterGoal_ml: Number(waterGoal_ml),
                    waterGoal_oz: Number(waterGoal_oz),
                }
            });

            setLiveUserProfileState({
                ...(getGlobalDataState().userProfileSTORE as UserProfile),
                nutritionSettings: {
                    ...latest,
                    calorieGoal: Number(calorieGoal),
                    waterGoal_ml: Number(waterGoal_ml),
                    waterGoal_oz: Number(waterGoal_oz),
                }
            });


            setStatus("success");
        } catch (error) {
            setStatus("failiure");
        }
    };

    useEffect(() => {
        if (status === "success") {
            const timeout = setTimeout(() => {
                router.push('/syncing');
            }, 0);

            return () => clearTimeout(timeout);
        }
    }, [status, router]);

    return (

        <div className="flex items-center justify-center flex-col">

            <div className="h-32 relative w-full bg-[url('/images/menus/goals.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl border 
        border-white/30 shadow-xl text-white text-3xl glowing-button mb-2 ">
                <div className="absolute inset-0 pt-5 p-3 flex-col items-center bg-indigo-500/30 justify-center text-center rounded-xl">
                    <div className="text-center gap-2 pulse-glow ">Nutrient Settings</div>
                    <h2 className="text-sm font-bold text-white">
                        Optimize the interface to align with your rhythm, pace, and focus.
                    </h2>
                </div>
            </div>



            <div className="text-left bg-white/30 w-full rounded-xl p-3 shadow-lg mb-[110px]">
                <form onSubmit={handleSubmit} className="">
                    <p className="text-lg text-white font-semibold mb-1">
                        Calorie Goals
                    </p>
                    <div className="flex mb-4">

                        <select
                            value={calorieGoal}
                            onChange={(e) => setCalorieGoal(e.target.value)}
                            className="w-full p-2 rounded bg-gray-800/70 text-white"
                        >
                            <option value="">+/- Kcal</option>
                            {["500", "400", "300", "200", "100", "0", "-100", "-200", "-300", "-400", "-500"].map((kcal) => (
                                <option key={kcal} value={kcal}>
                                    {kcal} kcal
                                </option>
                            ))}
                        </select>
                    </div>

                    <p className="text-lg text-white font-semibold mb-1">
                        Water Intake Goal ({preferredVolumeUnit === "oz" ? "oz" : "ml"})
                    </p>
                    <div className="flex mb-4">
                        <input
                            type="number"
                            step="0.1"
                            min="0"
                            value={preferredVolumeUnit === "ml" ? waterGoal_ml.toString() : waterGoal_oz.toString()} onChange={handleVolumeChange}
                            placeholder="Enter weight"
                            className="w-full p-3 mb-2 rounded bg-gray-800/70 text-white border-none focus:outline-none appearance-none"
                            required
                        />
                    </div>

                    <div className="fixed bottom-16 left-1/2 -translate-x-1/2 w-full max-w-md flex justify-center z-30 px-2 ">
                        <button
                            type="submit"
                            className="text-xl bg-white text-black hover:bg-indigo-300/50 px-4 py-3 w-full rounded-lg font-semibold glowing-button"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );

}