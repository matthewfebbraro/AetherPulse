// NavMenu.tsx
"use client";
import { useGlobalData } from "@/app/global-states/GlobalData";
import BodySyncApp from "@/components/nav-bar/bodysync-button";
import BodySyncCoreApp from "@/components/nav-bar/bodysync-core-button";

import { useRouter } from 'next/navigation';
import { Lock, Rotate3d, ListChecks, Dumbbell, Utensils, Globe, LogOut } from 'lucide-react';
import { Crown, Flame, Zap, Star, Shield, Atom, Heart, Bird, Dna, KeyRound, Settings, Mars, Venus, Fingerprint } from 'lucide-react';
import { Sun, Moon, CircleCheckBig, CircleArrowLeft, CircleArrowRight, SmilePlus, Webhook, StepForward, StepBack } from "lucide-react";

export default function ControlHubMenu() {

  const router = useRouter();

  const selectedPage = useGlobalData((s) => s.selectedPage);
  const setSelectedPage = useGlobalData((s) => s.setSelectedPage);

  const isOpen = useGlobalData((s) => s.isOpen);
  const setIsOpen = useGlobalData((s) => s.setIsOpen);


  return (
    <div className=" flex flex-col gap-1 z-60 mb-4 mt-3">
      <div className="text-gray-600 rounded-lg p-2 text-center">
        <div className="flex flex-row justify-center gap-2  rounded-xl mb-2">
          {/*TILE 7*/}
          <BodySyncApp />
          {/*TILE 8*/}
          <BodySyncCoreApp />
          {/*TILE 9*/}
      
        </div>
        <div className="grid grid-cols-1 gap-2 w-full rounded-xl mb-2">
          <button
            onClick={() => {
              router.push('/');
              setIsOpen(false);
            }}
            className="w-full h-[78px]  rounded-xl py-4 leading-sm flex flex-col justify-center items-center bg-white/20 backdrop-blur  text-gray-600 shadow-md">
            AetherHome<Globe size={36} />
          </button>
        </div>
      </div>
    </div>

  );
}
