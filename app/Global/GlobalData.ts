import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { GlobalSTATE } from "../Global/BodySyncManifest"
import { Niconne } from 'next/font/google';


export const useGlobalData = create<GlobalSTATE>()(
    persist(
        (set) => ({

            liveUserProfileState: null,
            setLiveUserProfileState: (profile) => {
                set((state) => ({
                    liveUserProfileState:
                        typeof profile === "function"
                            ? profile(state.liveUserProfileState)
                            : profile,
                }));
            },


            //FITNESS INFO
            // activeSessionStatus: false,
            //setActiveSessionStatus: (status: boolean) => set({ activeSessionStatus: status }),

            // temporaryFitnessSync: null,
            //  setTemporaryFitnessSync: (fitnessSync: { profileSlot: string; bodygroup: string }) =>
            //      set({ temporaryFitnessSync: fitnessSync }),


            workoutSessionData: {
                movements: [],
            },
            setWorkoutSessionData: (updater) =>
                set((state) => ({
                    workoutSessionData:
                        typeof updater === "function"
                            ? updater(state.workoutSessionData)
                            : updater,
                })),


            selectedSector2: "newsession",
            setSelectedSector2: (value: string) => set({ selectedSector2: value }),

            //NUTRITION STATES
            nutritionPage: "nutrition",
            setNutritionPage: (value: string) => set({ nutritionPage: value }),

            //BODYSYNC STATES
            bodySyncPage: "landing",
            setBodySyncPage: (value: string) => set({ bodySyncPage: value }),

            //OVERVIEW INFO
            pageDefault: "bodysync",
            selectedPage: "bodysync",
            setSelectedPage: (value: string) => set({ selectedPage: value }),

            HomeDefault: "home",
            selectedHomePage: "home",
            setSelectedHomePage: (value: string) => set({ selectedHomePage: value }),

            //CONTROL HUB INFO
            isOpen: false,
            setIsOpen: (value) => set({ isOpen: value }),


            //SYNC INFO
            hasDawnSyncedToday: false,
            setHasDawnSyncedToday: (value) => set({ hasDawnSyncedToday: value }),

            hasDuskSyncedToday: false,
            setHasDuskSyncedToday: (value) => set({ hasDuskSyncedToday: value }),

            hasFitnessSyncedToday: false,
            setHasFitnessSyncedToday: (value) => set({ hasFitnessSyncedToday: value }),

        }),

        {
            name: 'global-data',


        }

    )

);


