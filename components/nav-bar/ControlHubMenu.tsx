// NavMenu.tsx
"use client";
import { useGlobalData } from "@/app/global-states/GlobalData";
import BodySyncApp from "@/components/nav-bar/bodysync-button";
import InfoDexButton from "@/components/nav-bar/infodex-button";

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
    <div className=" flex flex-col gap-1 z-60 mb-0 mt-3">
      <div className="text-white rounded-lg p-2 text-center">
        <div className="flex flex-row justify-center gap-2  rounded-xl mb-2">
          {/*TILE 7*/}
          <BodySyncApp />
          {/*TILE 8*/}
          <InfoDexButton />
          {/*TILE 9*/}
        </div>
      </div>
    </div>

  );
}
