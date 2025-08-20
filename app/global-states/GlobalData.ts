import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { GlobalSTATE } from "../../global-states/type-manifest"
import { Niconne } from 'next/font/google';

export const useGlobalData = create<GlobalSTATE>()(
    persist(
        (set) => ({

            pageDefault: "bodysync",
            selectedPage: "bodysync",
            setSelectedPage: (value: string) => set({ selectedPage: value }),

            HomeDefault: "home",
            selectedHomePage: "home",
            setSelectedHomePage: (value: string) => set({ selectedHomePage: value }),

            //CONTROL HUB INFO
            isOpen: false,
            setIsOpen: (value) => set({ isOpen: value }),


        }),

        {
            name: 'global-data',
        }

    )

);


