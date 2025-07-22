'use client';

import { useState, useEffect } from 'react';
import ScrollLoad from "@/Backgrounds/ScrollLoad"
import { getGlobalDataState } from "@/app/Global/store/globalStoreInstance";
import { useGlobalData } from "@/app/Global/GlobalData";
import type { UserProfile, LiftIndexData, FitnessSettingsData } from "../../Global/BodySyncManifest"
import { db } from "@/lib/firebase";
import { collection, getDocs, getDoc, addDoc, setDoc, updateDoc, doc, query, where, Timestamp, serverTimestamp } from "firebase/firestore";
import useAuth from "@/lib/useAuth";
import { motion, AnimatePresence } from "framer-motion";
import DailyNutritionComponent from "../../OverViewComponents/NutritionLog/DailyNutritionComponent"

export default function NutritionLog() {

  //inialization steps

  const { user } = useAuth();

  const userProfileSTORE = getGlobalDataState().userProfileSTORE;
  const userProfile = userProfileSTORE
  const setSelectedPage = useGlobalData((s) => s.setSelectedPage);

  const fitnessSettings = userProfile?.fitnessSettings ?? ({} as FitnessSettingsData);

  //DATA INPUT

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const dateString = `${yyyy}-${mm}-${dd}`;

  const [activeSplit, setActiveSplit] = useState("");
  const [bodygroup, setBodygroup] = useState("");
  const [movements, setMovements] = useState("");


  //SELECTED VIEW BAR/ 

  const nutritionPage = useGlobalData((s) => s.nutritionPage);
  const setNutritionPage = useGlobalData((s) => s.setNutritionPage);

  const NutriPageView = nutritionPage || "nutrition";


  if (typeof userProfile?.isPaid !== 'boolean') return;

  // Main NUTRITION LOG UI
  return (
    <>
      <ScrollLoad />
      {userProfile?.isPaid ? (
        <>

          <div className=" w-full rounded-xl ">
            <AnimatePresence mode="wait">

              {NutriPageView === "nutrition" && (
                <motion.div
                  key="nutrition"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}>
                  <div>
                    <DailyNutritionComponent />
                  </div>
                </motion.div>
              )}

              {NutriPageView === "mealindex" && (
                <motion.div
                  key="mealindex"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}>
                  <div>



                  </div>
                </motion.div>
              )}


              {NutriPageView === "history" && (
                <motion.div
                  key="history"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div>
                    <div className="relative h-32 bg-[url('/images/greyscale/macrovault.webp')] bg-cover bg-center bg-no-repeat rounded-2xl border 
        border-white/30 shadow-xl text-white text-5xl glowing-button mb-4 ">
                      <div className="absolute flex flex-col pb-2 items-center bg-indigo-500/30 justify-center inset-0 text-center rounded-xl">
                        <div className="flex items-center gap-2 pulse-glow">Nutrition History</div>
                        <h2 className="text-lg font-bold text-white">
                          Fuel Your Form, Master Your Macros.
                        </h2>
                      </div>
                    </div>
                  </div>



                </motion.div>
              )}

            </AnimatePresence>
          </div>


          <div className="w-full max-w-md px-2 left-1/2 -translate-x-1/2 fixed bottom-16 ">
            <div className="grid grid-cols-3 gap-1 w-full rounded-xl">
              <button
                onClick={() => setNutritionPage("history")}
                className={`px-5 w-full text-md rounded-xl shadow ${nutritionPage === "history" ? "bg-indigo-300/50" : "glowing-button"}`}>
                History
              </button>
              <button
                onClick={() => setNutritionPage("nutrition")}
                className={`w-full text-md rounded-xl shadow ${nutritionPage === "nutrition" ? "bg-indigo-300/50" : "glowing-button"}`}>
                NutritionLog
              </button>
              <button
                onClick={() => setNutritionPage("mealindex")}
                className={`px-5 w-full text-md rounded-xl shadow ${nutritionPage === "mealindex" ? "bg-indigo-300/50" : "glowing-button"}`}>
                Meal Index
              </button>
            </div>
          </div>




        </>
      ) : (
        <>
          <div>
            <div className="relative h-32 bg-[url('/images/greyscale/macrovault.webp')] bg-cover bg-center bg-no-repeat rounded-2xl border 
        border-white/30 shadow-xl text-white text-5xl glowing-button mb-4 ">
              <div className="absolute flex flex-col pb-2 items-center bg-indigo-500/30 justify-center inset-0 text-center rounded-xl">
                <div className="flex items-center gap-2 pulse-glow">NutritionLog</div>
                <h2 className="text-lg font-bold text-white">
                  Access Restricted..
                </h2>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4"></h2>
          <p className="text-lg max-w-md">
            MacroVault is your personal nutrition tracker designed to help you master your macros and fuel
            your body effectively. With a simple, user-friendly interface, it lets you log your meals and
            track macronutrients—protein, fats, and carbohydrates—so you can stay on top of your nutritional
            goals. Whether you&apos;re building muscle, losing weight, or simply aiming for a balanced diet,
            MacroVault ensures you hit your targets with ease and precision.  </p>

          <button onClick={() => {
            setSelectedPage("Unlock");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }} className="text-center p-3 text-lg hover:bg-indigo-300/50 glowing-button">
            More Info
          </button>

        </>
      )}
    </>
  );
}
