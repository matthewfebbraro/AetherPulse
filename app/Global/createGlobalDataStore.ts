import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Niconne } from 'next/font/google';
import type { GlobalSTORE } from "../Global/BodySyncManifest"


export const createGlobalDataStore = (storageKey: string) =>

    create<GlobalSTORE>()(
        persist(
            (set, get) => ({

                //USERID INFO
                userProfileSTORE: null,

                setUserProfileSTORE: (profile) => {
                    console.log("[ZUSTAND] userProfileSTORE being set:", profile);

                    set((state) => ({
                        userProfileSTORE:
                            typeof profile === "function" ? profile(state.userProfileSTORE) : profile,

                    }));
                },
                syncHistorySTORE: null,
                setSyncHistorySTORE: (data) =>
                    set((state) => ({
                        syncHistorySTORE:
                            typeof data === "function" ? data(state.syncHistorySTORE) : data,
                    })),


                fitnessHistorySTORE: null,
                setFitnessHistorySTORE: (data) =>
                    set((state) => ({
                        fitnessHistorySTORE:
                            typeof data === "function" ? data(state.fitnessHistorySTORE) : data,
                    })),


                nutritionHistorySTORE: null,
                setNutritionHistorySTORE: (data) =>
                    set((state) => ({
                        nutritionHistorySTORE:
                            typeof data === "function" ? data(state.nutritionHistorySTORE) : data,
                    })),

                latestSyncSTORE: null,
                setLatestSyncSTORE: (sync: any) => set({ latestSyncSTORE: sync }),

                latestFitnessSyncSTORE: null,
                setLatestFitnessSyncSTORE: (sync: any) => set({ latestFitnessSyncSTORE: sync }),

                latestNutritionSyncSTORE: null,
                setLatestNutritionSyncSTORE: (sync: any) => set({ latestNutritionSyncSTORE: sync }),

                defaultsAdded: false,
                setDefaultsAdded: (value) => set({ defaultsAdded: value }),


            }),

            {
                name: storageKey,

            }

        )

    );


