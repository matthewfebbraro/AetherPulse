// NavMenu.tsx
"use client";
import { useGlobalData } from "@/app/global-states/GlobalData";

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

        <div className="grid grid-cols-3 gap-2 w-full rounded-xl mb-2">


          {/*TILE 7*/}

          <button className="h-[100px]  w-full rounded-xl py-4 leading-none bg-white/20 justify-center flex flex-col items-center backdrop-blur  text-gray-600 shadow-md"
            onClick={() => {
             
              setIsOpen(false);
            }}
          >
            Coming Soon<Crown size={36} className="mt-1 text-gray-600 transition cursor-pointer" />
          </button>




          {/*TILE 8*/}



          <button className="h-[100px]  w-full rounded-xl py-4 leading-none flex flex-col items-center bg-white/20 backdrop-blur justify-center  text-gray-600 shadow-md"
            onClick={() => {
             
              setIsOpen(false);
            }}
          >
            Coming Soon<Crown size={36} className=" mt-1 text-gray-600 transition cursor-pointer" />
          </button>




          {/*TILE 9*/}



          <button className="h-[100px]  w-full rounded-xl py-4 leading-none flex flex-col items-center bg-white/20 backdrop-blur justify-center  text-gray-600 shadow-md"
            onClick={() => {
             
              setIsOpen(false);
            }}
          >
            Coming Soon<Crown size={36} className=" mt-1 text-gray-600 transition cursor-pointer" />
          </button>


        </div>
        <div className="grid grid-cols-1 gap-2 w-full rounded-xl mb-2">

          <button
            onClick={() => { router.push('/');
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
